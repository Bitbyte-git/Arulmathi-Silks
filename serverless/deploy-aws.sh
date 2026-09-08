#!/usr/bin/env bash

# Production AWS Deployment Script for Arulmathi Silks Site Visit Counter
set -e

REGION="${AWS_REGION:-ap-south-1}"
STACK_NAME="arulmathi-silks-visitor-counter-stack"
FUNCTION_NAME="ArulmathiSilksVisitCounter"
TABLE_NAME="SiteVisitCounter"

echo "==============================================================="
echo "🚀 Deploying Production AWS Lambda & DynamoDB Counter"
echo "Region: $REGION"
echo "==============================================================="

if command -v sam &> /dev/null; then
    echo "📦 Found AWS SAM CLI. Building and deploying SAM stack..."
    cd "$(dirname "$0")"
    sam build
    sam deploy \
        --stack-name "$STACK_NAME" \
        --region "$REGION" \
        --capabilities CAPABILITY_IAM \
        --no-confirm-changeset \
        --no-fail-on-empty-changeset
    echo "✅ AWS SAM Deployment Complete!"
elif command -v aws &> /dev/null; then
    echo "🛠️ SAM CLI not found. Using AWS CLI to update Lambda function code directly..."
    cd "$(dirname "$0")/lambda"
    zip -r /tmp/lambda_function.zip index.mjs node_modules/ 2>/dev/null || zip -r /tmp/lambda_function.zip index.mjs
    
    aws lambda update-function-code \
        --function-name "$FUNCTION_NAME" \
        --zip-file fileb:///tmp/lambda_function.zip \
        --region "$REGION"
    
    echo "✅ AWS Lambda function '$FUNCTION_NAME' code updated successfully!"
else
    echo "⚠️ Neither AWS SAM CLI nor AWS CLI was detected in PATH."
    echo "To deploy manually:"
    echo "1. Upload 'serverless/lambda/index.mjs' to your AWS Lambda Function ($FUNCTION_NAME) in region $REGION."
    echo "2. Ensure API Gateway has CORS enabled for GET, POST, and OPTIONS."
fi

echo "🎉 Production AWS Deployment script finished."
