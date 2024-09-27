import axios from 'axios';

const apiCall = async (method, url, data = null, headers = {}) => {
  const config = {
    method,
    url,
    headers,
    data,
  };

  const response = await axios(config);
  return response.data;
};

export default apiCall;