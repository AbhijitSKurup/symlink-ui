import { useState } from 'react';
import apiCall from '../utils/api';

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (payload, headers = {}) => {
    setLoading(true);
    try {
      const result = await apiCall('POST', url, payload, headers);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

export default usePost;
