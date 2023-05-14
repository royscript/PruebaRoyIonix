import { useState, useEffect } from 'react';

function useFetch(url : string, params = {}, method = 'GET') {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        }
      };
      if (method === 'GET' || method === 'HEAD') {
        options.body = null;
      } else if (Object.keys(params).length > 0) {
        options.body = JSON.stringify(params);
      }
      const response = await fetch(url, options);
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
  useEffect(()=>{
    //console.log(data);
  },[data])

  return [data, fetchData, loading, error];
}

export default useFetch;