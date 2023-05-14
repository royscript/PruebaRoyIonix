import { useState, useEffect } from 'react';

function useFetch(Api : any) {
  /* Este hook sirve para gestionar errores y el loading */
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    try {
      const response = await Api();
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! Status: ${response.status}, ${errorText}`);
      }
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (error : any) {
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