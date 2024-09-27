import React from 'react';

import { GhostAiLogo, UserLogo } from '../assets/icons';

const ChatMessage = ({ message, sender }) => {
  const isUser = sender !== 'MODEL'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-center space-x-2 animate-fadeUp`}>
      {!isUser && (
        <GhostAiLogo />
      )}
      <div
        className={`max-w-xs rounded-lg p-3`}
      >
        {message?.split('\n').map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      {isUser && (
        <UserLogo />
      )}
    </div>
  );
};

export default ChatMessage;
