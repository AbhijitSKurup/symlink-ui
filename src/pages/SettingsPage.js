import React, { useState } from "react";
import { Textarea } from "../components/Textarea";
import { Slider } from "../components/Slider";

function SettingsPage() {
  const [settingsData, setSettingsData] = useState({
    openApiKey: "",
    customMessage: "",
    maxLength: 1024,
    temperature: 0.7,
    freqPenalty: 1.4,
  });
  console.log(settingsData);
  return (
    <div className="bg-primary w-full h-screen px-8">
      <div className="w-[616px]">
        <div className="py-6 text-white text-lg">
          Start a Large Language Model
        </div>
        <div className="pb-6">
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
            <div className="text-gray-2 text-sm">
              {settingsData.temperature}
            </div>
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
            <div className="text-gray-2 text-sm">
              {settingsData.freqPenalty}
            </div>
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
      </div>
    </div>
  );
}

export default SettingsPage;
