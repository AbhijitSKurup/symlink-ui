import { useEffect, useState } from 'react';

const useStream = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const eventSource = new EventSource(url);

    eventSource.onmessage = (event) => {
      setData((prev) => [...prev, event.data]);
    };

    eventSource.onerror = (err) => {
      setError(err);
      eventSource.close();
    };

    eventSource.onopen = () => {
      setLoading(false);
    };

    return () => {
      eventSource.close(); // Cleanup on unmount
    };
  }, [url]);

  return { data, loading, error };
};

export default useStream;
