import axios from "axios";

export const useSettings = () => {
  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://fb20-103-181-238-106.ngrok-free.app/configurations",
        {
          model_name: data.modelName,
          secret_key: data.openApiKey,
          temperature: data.temperature,
          frequency_penalty: data.freqPenalty,
          token_size: data.maxLength,
          system_message: data.customMessage,
        }
      );

      return response.data;
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return { postData };
};
