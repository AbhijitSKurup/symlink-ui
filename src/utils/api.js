import axios from 'axios';

const apiCall = async (method, url, data = null, headers = {}) => {
  const baseURL = "https:localhost:5000/"
  const finalURL = baseURL+ url;
  const config = {
    method,
    finalURL,
    headers,
    data,
  };

  const response = await axios(config);
  return response.data;
};

export default apiCall;