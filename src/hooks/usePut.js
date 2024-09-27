import { useState } from 'react';
import apiCall from '../utils/api';

const usePut = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateData = async (payload, headers = {}) => {
    setLoading(true);
    try {
      const result = await apiCall('PUT', url, payload, headers);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, updateData };
};

export default usePut;
