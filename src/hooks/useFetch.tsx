import { useState, useEffect } from 'react';

type FetchResult<T> = [data: T | null, fetchData: () => void, loading: boolean, error: string | null];

function useFetch<T>(api: () => Promise<Response>): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await api();
      if (!response.ok) {
        const errorText = await response.text();
        //throw new Error(`HTTP error! Status: ${response.status}, ${errorText}`);
      }
      const result = await response.json() as T;
      setData(result);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return [data, fetchData, loading, error];
}

export default useFetch;
