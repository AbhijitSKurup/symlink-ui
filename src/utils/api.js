import axios from "axios";

const apiCall = async (method, url, data = null, headers = {}, queryParams) => {
  const baseURL = "https://fb20-103-181-238-106.ngrok-free.app/";
  const finalURL = baseURL + url + `?${queryParams}`;
  const config = {
    method,
    url: finalURL,
    headers,
    data,
  };

  const response = await axios(config);
  return response.data;
};

export default apiCall;
