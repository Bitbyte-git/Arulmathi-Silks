import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, UpdateCommand, GetCommand } from '@aws-sdk/lib-dynamodb';

const REGION = process.env.AWS_REGION || 'ap-south-1';
const TABLE_NAME = process.env.DYNAMODB_TABLE_NAME || 'SiteVisitCounter';
const COUNTER_ID = process.env.VISITOR_COUNTER_ID || 'arulmathi-silks';

const client = new DynamoDBClient({ region: REGION });
const docClient = DynamoDBDocumentClient.from(client, {
  marshallOptions: { removeUndefinedValues: true },
});

// Production-grade CORS Headers
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With, X-Amz-Date, X-Api-Key',
  'Access-Control-Max-Age': '86400',
  'Content-Type': 'application/json',
};

export const handler = async (event) => {
  const httpMethod = event.requestContext?.http?.method || event.httpMethod || 'GET';

  // Handle CORS OPTIONS preflight
  if (httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: true, message: 'CORS Preflight OK' }),
    };
  }

  try {
    const queryParams = event.queryStringParameters || {};
    const shouldIncrement = httpMethod === 'POST' || (httpMethod === 'GET' && queryParams.increment !== 'false');

    let count = 0;

    if (!shouldIncrement) {
      // Fetch current count without incrementing
      const getRes = await docClient.send(
        new GetCommand({
          TableName: TABLE_NAME,
          Key: { id: COUNTER_ID },
        })
      );
      count = getRes.Item?.visitCount || 695;
    } else {
      // Atomic increment in DynamoDB
      const updateRes = await docClient.send(
        new UpdateCommand({
          TableName: TABLE_NAME,
          Key: { id: COUNTER_ID },
          UpdateExpression: 'SET visitCount = if_not_exists(visitCount, :zero) + :incr, lastUpdated = :now',
          ExpressionAttributeValues: {
            ':incr': 1,
            ':zero': 694, // Initial starting baseline
            ':now': new Date().toISOString(),
          },
          ReturnValues: 'UPDATED_NEW',
        })
      );
      count = updateRes.Attributes?.visitCount || 695;
    }

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: true,
        count,
        incremented: shouldIncrement,
        timestamp: new Date().toISOString(),
      }),
    };
  } catch (error) {
    console.error('[AWS Lambda DynamoDB Visitor Counter Error]:', error);

    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: false,
        error: 'Failed to update visitor count in DynamoDB',
        message: error.message,
      }),
    };
  }
};
