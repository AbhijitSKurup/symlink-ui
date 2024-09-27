import { useState } from "react";
import apiCall from "../utils/api";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async (url, headers = {}, queryParams) => {
    try {
      const result = await apiCall("GET", url, null, headers, queryParams);
      setData(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
