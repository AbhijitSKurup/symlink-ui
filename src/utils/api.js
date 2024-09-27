import axios from "axios";

const apiCall = async (method, url, data = null, headers = {}, queryParams) => {
  const baseURL = "https://4824-103-138-236-18.ngrok-free.app/";
  const finalURL = baseURL + url + `?${queryParams}`;
  const config = {
    method,
    url: finalURL,
    headers: { "ngrok-skip-browser-warning": "true" },
    data,
  };

  const response = await axios(config);
  return response.data;
};

export default apiCall;
