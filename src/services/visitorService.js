const SESSION_KEY = 'arulmathi_visited_session';
const CACHE_KEY = 'arulmathi_cached_visit_count';

const LIVE_AWS_URL = 'https://k5sc1xyw97.execute-api.ap-south-1.amazonaws.com/visitor';

// Primary endpoint candidates (Direct CORS endpoint first)
const ENDPOINT_CANDIDATES = [
  import.meta.env.VITE_COUNTER_API_URL || LIVE_AWS_URL,
  '/api/visitor',
  `https://api.allorigins.win/raw?url=${encodeURIComponent(LIVE_AWS_URL)}`,
];

/**
 * Perform fetch against candidate endpoints until one succeeds
 */
async function fetchFromApi(method) {
  for (const url of ENDPOINT_CANDIDATES) {
    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) continue;

      const data = await response.json();
      if (data && (typeof data.count === 'number' || data.count !== undefined)) {
        const count = typeof data.count === 'number' ? data.count : parseInt(data.count, 10);
        if (!isNaN(count)) {
          return count;
        }
      }
    } catch (err) {
      continue;
    }
  }
  throw new Error('All API endpoint candidates failed');
}

/**
 * Get or update site visit count from AWS API Gateway & DynamoDB
 */
export async function getOrUpdateVisitCount() {
  const isVisitedInSession = Boolean(sessionStorage.getItem(SESSION_KEY));
  const method = isVisitedInSession ? 'GET' : 'POST';

  try {
    const count = await fetchFromApi(method);

    // Save count to local cache
    localStorage.setItem(CACHE_KEY, count.toString());

    // Mark session as visited
    if (!isVisitedInSession) {
      sessionStorage.setItem(SESSION_KEY, 'true');
    }

    return {
      count,
      source: 'aws-dynamodb',
      incremented: !isVisitedInSession,
    };
  } catch (error) {
    console.warn('[VisitorService] All endpoints unreachable, using cached count:', error.message);

    const rawCached = localStorage.getItem(CACHE_KEY);
    let cachedCount = rawCached ? parseInt(rawCached, 10) : 2;
    
    // Clear old stale cache from previous API if it's over 500
    if (cachedCount > 500) {
      cachedCount = 2;
    }

    const fallbackCount = isVisitedInSession ? cachedCount : cachedCount + 1;

    localStorage.setItem(CACHE_KEY, fallbackCount.toString());
    if (!isVisitedInSession) {
      sessionStorage.setItem(SESSION_KEY, 'true');
    }

    return {
      count: fallbackCount,
      source: 'cache-fallback',
      incremented: !isVisitedInSession,
    };
  }
}

