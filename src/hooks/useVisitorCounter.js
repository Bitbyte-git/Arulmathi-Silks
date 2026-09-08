import { useState, useEffect, useRef } from 'react';
import { getOrUpdateVisitCount } from '../services/visitorService';

export function useVisitorCounter() {
  const [count, setCount] = useState(() => {
    const cached = localStorage.getItem('arulmathi_cached_visit_count');
    if (!cached) return null;
    const parsed = parseInt(cached, 10);
    return parsed > 500 ? null : parsed;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const hasFetchedRef = useRef(false);

  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;

    let isMounted = true;

    async function fetchCounter() {
      try {
        setIsLoading(true);
        const result = await getOrUpdateVisitCount();
        if (isMounted) {
          setCount(result.count);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Failed to update visitor count');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchCounter();

    return () => {
      isMounted = false;
    };
  }, []);

  const formattedCount = count !== null ? new Intl.NumberFormat('en-IN').format(count) : '';

  return {
    count,
    formattedCount,
    isLoading,
    error,
  };
}
