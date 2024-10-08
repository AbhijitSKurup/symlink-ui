import React from "react";
import ChatMessage from "../components/ChatMessage";
import Diff from "../components/Diff";

const ChatContainer = (props) => {
  const { messages, showDiff, diffText, chatId, setShowDiff } = props;

  return (
    <div className="bg-#0C1821 text-white h-full p-4 flex flex-col space-y-2 overflow-y-auto w-8/12 mt-12">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          message={message.content}
          sender={message.sent_by}
        />
      ))}
      {showDiff && (
        <Diff diffText={diffText} chatId={diffText.chatId} setShowDiff={setShowDiff} />
      )}
    </div>
  );
};

export default ChatContainer;
