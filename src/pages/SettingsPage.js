import React, { useEffect, useState } from "react";
import { SettingsForm } from "./SettingsForm";

const MODELS = [
  {
    id: "chat-gpt",
    name: "Chat GPT",
  },
  { id: "llama-3.5", name: "LLama 3.5" },
];

const Button = ({ name, onClickModel, selected }) => {
  return (
    <button
      className={`border-[1px] border-purple-1 rounded-lg px-3 py-2 ${
        selected ? "bg-gray-3" : ""
      } `}
      onClick={onClickModel}
    >
      <span className="text-sm text-white">{name}</span>
    </button>
  );
};

function SettingsPage() {
  const [currentModelId, setCurrentModelId] = useState("chat-gpt");
  const [configurationData, setConfigurationData] = useState();
  const [loading, setLoading] = useState(true); // Add loading state

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://4824-103-138-236-18.ngrok-free.app/configurations",
        { headers: { "ngrok-skip-browser-warning": "true" } }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setConfigurationData(data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return;
  }

  return (
    <div className="bg-primary w-full h-screen px-8">
      <div className="w-[616px]">
        <div className="py-6 text-white text-lg">
          Start a Large Language Model
        </div>
        <div className="mb-6 space-x-3">
          {MODELS.map((model) => (
            <Button
              key={model.id}
              name={model.name}
              onClickModel={() => setCurrentModelId(model.id)}
              selected={currentModelId === model.id}
            />
          ))}
        </div>
        <SettingsForm
          currentModelId={currentModelId}
          configurationData={configurationData}
          setConfigurationData={setConfigurationData}
        />
      </div>
    </div>
  );
}

export default SettingsPage;
