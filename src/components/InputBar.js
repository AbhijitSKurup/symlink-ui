import React, { useRef, useState } from 'react';
import { PaperClip, SendIcon } from '../assets/icons';

const InputBar = (props) => {

  const {sendMessage, socket, sessionId, chatId } = props
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const fileInputRef = useRef(null);

  const handleSend = (e) => {
    e.stopPropagation(); // Prevents event propagation
    setShowPopup(!showPopup); // Toggles the popup
  };

  
  const handleDirectSend = () => {
    sendMessage(message)
    setMessage('')
    setShowPopup(false)
  };

  const handleReviewAndSend = () => {
    sendMessage(message,true)
    setMessage('')
    setShowPopup(false)
  };

  const handleOnUploadClick = (files) =>{
    if(files?.length){
      socket.emit("send_message_with_file", { 
      message: message, session_id: sessionId , model_name: 'chat-gpt', 
      file: files[0], filename: files[0]?.name, chat_id: chatId })
      
      setMessage('')
    };
  }

  const handleFileIconClick = () => fileInputRef?.current.click();

  return (
    <div className="flex items-center bg-gray-800 p-3 rounded-2xl w-8/12 h-14 my-4 animate-fadeUp">
      <div className="mr-3">
      <input className='hidden' type="file" onChange={(e)=>handleOnUploadClick(e.target.files)} ref={fileInputRef} />
        <PaperClip className='cursor-pointer' onClick={handleFileIconClick} />
      </div>
      {/* Input Field */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask Anything"
        className="flex-grow bg-transparent border-none outline-none text-white placeholder-gray-400"
      />
      <button
        onClick={handleSend}
        role="presentation"
        className="ml-3 p-2 rounded-full"
      >
        <SendIcon />
        {showPopup && (
              <div className="absolute bottom-20 right-15 w-72 bg-gray-900 text-white p-4 rounded-lg shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="block w-full text-left mb-2 p-2 bg-gray-800 rounded-md hover:bg-gray-700"
                  onClick={handleReviewAndSend}
                >
                  Review and Send
                </button>
                <button
                  className="block w-full text-left p-2 bg-gray-800 rounded-md hover:bg-gray-700"
                  onClick={handleDirectSend}
                >
                  Send
                </button>
              </div>
            )}
      </button>
    </div>
  );
};

export default InputBar;
