import React, { useEffect, useState } from 'react';

const Diff = ({ diffText }) => {
  const { masked_text, message, mapped_entity } = diffText;

  // Split the texts into words
  const words1 = message?.split(' ');
  const words2 = masked_text?.split(' ');

  const [isEdit, setIsEdit] = useState(null); // Track the identifier being edited (null means no identifier is being edited)
  const [editedIdentifiers, setEditedIdentifiers] = useState({}); // To store updated identifiers for ENTITY1 and ENTITY2

  // Initialize the editedIdentifiers with default values from mapped_entity
  useEffect(() => {
    const initialIdentifiers = {};
    mapped_entity.forEach((entity) => {
      initialIdentifiers[entity.identifier] = entity.identifier;
    });
    setEditedIdentifiers(initialIdentifiers);
  }, [mapped_entity]);

  const isIdentifier = (word) => {
    // Check if the word is an identifier in mappedEntity
    return mapped_entity?.some((entity) => entity.identifier === word);
  };

  const handleWordClick = (word) => {
    setIsEdit(word); // Set the clicked word as the one being edited
  };

  const handleInputChange = (word, value) => {
    // Update the editedIdentifiers state for the corresponding identifier
    setEditedIdentifiers((prev) => ({
      ...prev,
      [word]: value
    }));
  };

  const handleConfirm = () => {
    // Update mapped_entity based on editedIdentifiers, keeping the entity the same
    const updatedMappedEntity = mapped_entity.map((entity) => ({
      ...entity,
      identifier: editedIdentifiers[entity.identifier] || entity.identifier // Update the identifier field based on the state
    }));
    console.log('Updated Mapped Entity:', updatedMappedEntity);
    // You can now use this updatedMappedEntity for further processing
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
            {isEdit === word && isIdentifier(word) ? (
              <input
                type="text"
                value={editedIdentifiers[word]} // Value comes from the state
                className="border p-1 text-black"
                onChange={(e) => handleInputChange(word, e.target.value)} // Update the input value in the state
                onBlur={() => setIsEdit(null)} // Convert back to span on blur
                autoFocus
              />
            ) : (
              <span
                onClick={() => handleWordClick(word)}
                className={`mr-1 cursor-pointer ${
                  isIdentifier(word) ? 'bg-yellow-300 text-black' : ''
                }`}
              >
                {word}
              </span>
            )}
          </span>
        ))}
      </div>

      <div>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Diff;
