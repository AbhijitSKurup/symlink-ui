import React from 'react';
import ChatMessage from '../components/ChatMessage';


const ChatContainer = (props) => {

    const {messages} = props

  return (
    <div className="bg-#0C1821 text-white h-full p-4 flex flex-col space-y-2 overflow-y-auto w-8/12">
      {messages.map(message => (
        <ChatMessage key={message.id} message={message.content} sender={message.sent_by} />
      ))}
    </div>
  );
};

export default ChatContainer;
