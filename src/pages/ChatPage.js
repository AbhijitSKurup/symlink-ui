import React from "react";
import ChatsListPanel from "../containers/ChatsListPanel";
import ChatsMessagePanel from "../containers/ChatsMessagePanel";

const ChatPage = () => {

  
  return (
    <div className="flex w-full h-screen">
      <div className="flex flex-col w-3/12 bg-[#1B2A41]">
        <ChatsListPanel />
      </div>
      <div className="flex flex-col w-full bg-[#0C1821]">
        <ChatsMessagePanel />
      </div>
    </div>
  );
};

export default ChatPage;
