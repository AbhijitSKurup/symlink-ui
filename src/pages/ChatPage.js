import React from "react";
import { useLocation } from "react-router-dom";
import ChatsListPanel from "../containers/ChatsListPanel";
import ChatsMessagePanel from "../containers/ChatsMessagePanel";

const ChatPage = () => {
  const location = useLocation();
  const chatId = location.state?.chatId;
  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col min-w-96 w-3/12 bg-[#1B2A41]">
        <ChatsListPanel />
      </div>
      <div className="flex flex-col w-full bg-[#0C1821]">
        <ChatsMessagePanel chatId={chatId}/>
      </div>
    </div>
  );
};

export default ChatPage;
