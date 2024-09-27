import { useEffect, useState } from "react";
import { Slider } from "../components/Slider";
import { Textarea } from "../components/Textarea";
import { useSettings } from "../hooks/useSettings";

export const SettingsForm = ({
  currentModelId,
  configurationData,
  setConfigurationData,
}) => {
  const defaultSettings = {
    openApiKey: "",
    customMessage: "",
    maxLength: 1024,
    temperature: 0.7,
    freqPenalty: 1.4,
    modelName: "chat-gpt",
  };

  const [settingsData, setSettingsData] = useState(defaultSettings);

  const { postData } = useSettings();

  const onClickSave = async () => {
    const data = await postData(settingsData);

    const updatedConfData = configurationData.map((item) =>
      item.model_name === data.model_name ? data : item
    );
    setConfigurationData(updatedConfData);
  };

  useEffect(() => {
    setSettingsData(defaultSettings);

    if (configurationData) {
      const currentModelData = configurationData?.find(
        (item) => item.model_name === currentModelId
      );
      setSettingsData({
        modelName: currentModelId,
        openApiKey: currentModelData?.secret_key || "",
        customMessage: currentModelData?.system_message || "",
        maxLength: currentModelData?.token_size ?? 1024,
        temperature: currentModelData?.temperature ?? 0.7,
        freqPenalty: currentModelData?.frequency_penalty ?? 1.4,
      });
    }
  }, [currentModelId, configurationData]);

  return (
    <>
      <div className="pb-6 w-[616px]">
        <div className="mb-3 text-gray-2 text-sm">OpenAI api key</div>
        <div className="h-10">
          <Textarea
            rows={1}
            value={settingsData?.openApiKey}
            onChange={(e) =>
              setSettingsData((prevData) => ({
                ...prevData,
                openApiKey: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="text-white text-base pb-4">Parameters</div>
      <div>
        <div className="mb-3 text-gray-2 text-sm">
          Chat System Message (Custom Message)
        </div>
        <Textarea
          rows={7}
          value={settingsData?.customMessage}
          onChange={(e) =>
            setSettingsData((prevData) => ({
              ...prevData,
              customMessage: e.target.value,
            }))
          }
        />
      </div>
      <div className="pt-6">
        <div className="flex justify-between">
          <div className="mb-3 text-gray-2 text-sm">Chat Maximum length</div>
          <div className="text-gray-2 text-sm">{settingsData.maxLength}</div>
        </div>
        <Slider
          value={settingsData.maxLength}
          min={1}
          max={10000}
          onChange={(e) =>
            setSettingsData((prevData) => ({
              ...prevData,
              maxLength: e.target.value,
            }))
          }
        />
      </div>
      <div className="pt-6">
        <div className="flex justify-between">
          <div className="mb-3 text-gray-2 text-sm">Temperature</div>
          <div className="text-gray-2 text-sm">{settingsData.temperature}</div>
        </div>
        <Slider
          value={settingsData.temperature}
          min={0}
          step={0.1}
          max={1}
          onChange={(e) =>
            setSettingsData((prevData) => ({
              ...prevData,
              temperature: e.target.value,
            }))
          }
        />
      </div>
      <div className="pt-6">
        <div className="flex justify-between">
          <div className="mb-3 text-gray-2 text-sm">Frequency Penalty</div>
          <div className="text-gray-2 text-sm">{settingsData.freqPenalty}</div>
        </div>
        <Slider
          value={settingsData.freqPenalty}
          min={0}
          step={0.1}
          max={5}
          onChange={(e) =>
            setSettingsData((prevData) => ({
              ...prevData,
              freqPenalty: e.target.value,
            }))
          }
        />
      </div>
      <button
        className="bg-purple-1 rounded-lg px-5 py-2 mt-6 text-primary hover:scale-105"
        onClick={onClickSave}
      >
        Save
      </button>
    </>
  );
};
