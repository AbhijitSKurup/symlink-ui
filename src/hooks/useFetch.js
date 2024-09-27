import { useEffect, useState } from 'react';
import apiCall from '../utils/api';

const useFetch = (url, headers = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiCall('GET', url, null, headers);
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, headers]);

  return { data, loading, error };
};

export default useFetch;
