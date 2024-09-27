import React, { useEffect, useState } from 'react';

const Diff = ({diffText}) => {

  const { masked_text, message, mapped_entity } = diffText

  console.log({masked_text, message, mapped_entity})
  // Split the texts into words
  const words1 = message?.split(' ');
  const [words2, setWords2] = useState(masked_text?.split(' '));
  const [entityMap, setEntityMap] = useState(mapped_entity);

  console.log({words2, entityMap})


//   useEffect(() => {
//     console.log({masked_text, entityMap})
// }, [masked_text , entityMap])

console.log(entityMap)

  // Find differences based on the mapped entity
  const differences = {};
  entityMap?.forEach((item) => {
    const indexInWords1 = words1.indexOf(item.entity);
    const indexInWords2 = words2.indexOf(item.identifier);
    if (indexInWords1 !== indexInWords2 && indexInWords2 !== -1) {
      differences[indexInWords2] = {
        oldWord: item.entity,
        newWord: item.identifier,
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
    // Create a new array with the updated word
    const updatedWords = [...words2];
    updatedWords[index] = newValue;
    // setWords2(updatedWords); // Update the state with the new array

    // Update the corresponding entity in the mapped_entity
    const updatedEntityMap = entityMap?.map((item) => {
      if (item.identifier === words2[index]) {
        return {
          ...item,
          entity: newValue,
        };
      }
      return item;
    });

    setEntityMap(updatedEntityMap); // Update the mapped_entity state
  };

  return (
    <div className="flex space-x-4">
      {/* First div for original text (message) */}
      <div className="w-64 text-white p-4 flex flex-wrap">
        {words1?.map((word, index) => (
          <span key={index} className="mr-1">{word}</span>
        ))}
      </div>

      {/* Second div for masked text, adding yellow background for changed words */}
      <div className="w-64 text-white p-4 flex flex-wrap">
        {words2?.map((word, index) => (
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
  );
};

export default Diff;
