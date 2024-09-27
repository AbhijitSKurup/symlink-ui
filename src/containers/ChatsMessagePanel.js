import React, { useEffect, useState } from 'react';
// import Diff from '../components/Diff';

import InputBar from '../components/InputBar';
import { socket } from '../socket/socket';

import ChatContainer from './ChatContainer';
import { OpenAIAppOptions } from '../utils/constants';
import Dropdown from '../components/Dropdown';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const ChatsMessagePanel = ({ chatId }) => {



  // session_id = data.get('session_id')
  //   message_text = data.get('message')
  //   chat_id = data.get('chat_id')
  //   model_name = data.get('model_name')\
  const { id } = useParams();

  const [selectedAiApp, setSelectedAiApp] = useState(OpenAIAppOptions[0]);
  const [isConnected, setIsConnected] = useState(false)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [showDiff, setShowDiff] = useState(false)
  const [diffText, setDiffText] = useState({})

  useEffect(()=>{
    socket.emit('get_history', { session_id: id ,chat_id: chatId })
  }
  ,[chatId])

  socket.on('connect', () => {
    setIsConnected(true)
  });
  

  socket.on('receive_message', (res) => {
    setMessages(prevMessages => {
      const isChatIdPresent = prevMessages.some(message => message.id === res.id);
      
      if (!isChatIdPresent) {
        return [...prevMessages, res];  // Spread prevMessages and append res
      }
  
      // Otherwise, return the current state without changes
      return prevMessages;
    });
  });

  socket.on('review_file', (res) => {
    setDiffText(res)
    setShowDiff(true)
  });

  socket.on('chat_history', (res) => {
    console.log("chat_history",res)
    setMessages(res);
  });

  // send message to socket
  const sendMessage = async (input, isReviewRequired) => {
    setInput(input)
    if(isReviewRequired){
      const response = await axios.post(
        "https://fb20-103-181-238-106.ngrok-free.app/messages/review_message",
        {
          model_name: 'test',
          session_id: id,
          message: input,
          chat_id: chatId,
        }
      );
      setDiffText(response.data)
      setShowDiff(true)
      
    } else {
      socket.emit('send_message', { message: input, session_id: id , model_name: 'test' }); 
    }
  }



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between w-full">
      <div className="absolute left-0">
        <Dropdown
          onSelect={setSelectedAiApp}
          selected={selectedAiApp}
          options={OpenAIAppOptions}
        />
      </div>
      <ChatContainer messages={messages} showDiff={showDiff} diffText={diffText} />
      <InputBar sendMessage={sendMessage} input={input} socket={socket} sessionId={id} chatId={chatId} />
    </div>
  );
};

export default ChatsMessagePanel;
