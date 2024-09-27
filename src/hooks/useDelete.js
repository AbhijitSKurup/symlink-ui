import { useState } from 'react';
import apiCall from '../utils/api';

const useDelete = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async (headers = {}) => {
    setLoading(true);
    try {
      const result = await apiCall('DELETE', url, null, headers);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, deleteData };
};

export default useDelete;
