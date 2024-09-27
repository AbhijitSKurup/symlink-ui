import React, { useState } from 'react';
// import Diff from '../components/Diff';

import InputBar from '../components/InputBar';
import { socket } from '../socket/socket';
import { socketMethods } from '../socket/ConnectionState';

import ChatContainer from './ChatContainer';
import { OpenAIAppOptions } from '../utils/constants';
import Dropdown from '../components/Dropdown';



const ChatsMessagePanel = ({ chatId }) => {

  console.log('chatIdInChatMessagePanel', chatId);
  const [selectedAiApp, setSelectedAiApp] = useState(OpenAIAppOptions[0]);
  const [isConnected, setIsConnected] = useState(false)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey! How\'s it going?', sender: 'bot' },
    { id: 2, text: 'fine\nwhat about you', sender: 'user' },
    { id: 3, text: 'I\'m doing great, thanks for asking! What\'s on your mind today?', sender: 'bot' },
    { id: 4, text: 'having food', sender: 'user' },
  ]);


  socket.on('connect', () => {
    setIsConnected(true)
  });

  socket.on('receive_message', (res) => {
    console.log({res})
    // setMessages(prev => [...prev, {id: Math.random(), text: res.output.message, sender: 'bot'}])
  })

  // send message to socket
  const sendMessage = async (input, isReviewRequired) => {
    setInput(input)
    console.log('emit count')
    if(isReviewRequired){
      socket.emit('send_message', { message: input, session_id: '1ef3fd8edb2407f54b056190d43479322b818641b17462b838720d06480ad8ba', model_name: 'test' });
    }

    socket.emit('send_message', { message: input, session_id: '1ef3fd8edb2407f54b056190d43479322b818641b17462b838720d06480ad8ba', model_name: 'test' });
    setMessages(prev => [...prev, {id: Math.random(), text: input, sender: 'user'}])
  }





  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between w-full">
      {/* <Diff /> */}
      <div className="absolute left-0">
        <Dropdown
          onSelect={setSelectedAiApp}
          selected={selectedAiApp}
          options={OpenAIAppOptions}
        />
      </div>
      <ChatContainer messages={messages} />
      <InputBar sendMessage={sendMessage} input={input} />
    </div>
  );
};

export default ChatsMessagePanel;
