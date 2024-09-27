import React, { useState } from 'react'


const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker 
including versions of Lorem Ipsum.`;

const text2 = `Dolor Sit is simply placeholder text of the printing and typesetting sector. 
Dolor Sit has been the sector's standard placeholder text ever since the 1500s, 
when an unknown machine took a galley of type and scrambled it to make a type specimen manuscript. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unaltered. It was popularised in the 1960s with the release of Letraset sheets 
containing Dolor Sit passages, and more recently with desktop publishing program like Aldus PageMaker 
including versions of Dolor Sit.`;

export default function Diff() {

    const words1 = text.split(' ');
    const words2 = text2.split(' ');
  
    // Find differences between the two texts
    const differences = {};
    words1.forEach((word, index) => {
      if (word !== words2[index]) {
        differences[index] = {
          oldWord: word,
          newWord: words2[index],
        };
      }
    });
  
    // State to track which indices are being edited
    const [editState, setEditState] = useState({});
  
    // Handle click to toggle between span and input field
    const handleWordClick = (index) => {
      if (differences[index]) { // Only allow click if the word is in differences
        setEditState((prevState) => ({
          ...prevState,
          [index]: !prevState[index], // Toggle edit mode for the clicked index
        }));
      }
    };
  
    // Handle input change
    const handleInputChange = (index, newValue) => {
      words2[index] = newValue; // Update the word at the specified index
    };
  return (
    <div className="flex space-x-4">
              <div className="w-64 bg-blue-500 text-white p-4 flex flex-wrap">
        {words1.map((word, index) => (
          <span key={index} className="mr-1">{word}</span>
        ))}
      </div>

      {/* Second div with text2, adding yellow background for changed words */}
      <div className="w-64 bg-blue-500 text-white p-4 flex flex-wrap">
        {words2.map((word, index) => (
          <span key={index} className="mr-1">
            {/* Toggle between span and input field for highlighted words */}
            {editState[index] && differences[index] ? (
              <input
                type="text"
                value={word}
                className="border p-1"
                onChange={(e) => handleInputChange(index, e.target.value)}
                onBlur={() => handleWordClick(index)} // Convert back to span on blur
                autoFocus
              />
            ) : (
              <span
                onClick={() => handleWordClick(index)}
                className={`mr-1 cursor-pointer ${
                  differences[index] ? 'bg-yellow-300 text-black' : ''
                }`}
              >
                {word}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
