import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import SettingsPage from "./pages/SettingsPage";

import "./App.css";
import ChatSidePanel from "./containers/ChatSidePanel";
import Pricing from "./pages/Pricing";

const App = () => {
  const location = useLocation();
  return (
    <div className="flex h-screen w-full">
      {location.pathname !== "/" && (
        <div className="flex flex-col w-20 bg-[#1B2A41] border-r border-r-gray-1">
          <ChatSidePanel />
        </div>
      )}
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
