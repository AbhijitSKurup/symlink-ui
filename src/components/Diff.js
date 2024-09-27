import React, { useEffect, useState } from "react";
import { Textarea } from "./Textarea";
import { socket } from "../socket/socket";
import { useParams } from "react-router-dom";

const Diff = ({ diffText, setShowDiff }) => {
  const { masked_text, message, mapped_entity, message_id, chat_id } = diffText;
  const { id } = useParams();

  // Split the texts into words
  const words1 = message?.split(" ");
  const [maskedWords, setMaskedWords] = useState(
    masked_text?.replace(/([.,!?;:])/g, " $1 ")?.split(" ")
  );

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
    if (editedIdentifiers[word]) setIsEdit(word); // Set the  clicked word as the one being edited
  };

  const handleInputChange = (word, value, key) => {
    // Update the editedIdentifiers state for the corresponding identifier
    setEditedIdentifiers((prev) => ({
      ...prev,
      [word]: value,
    }));
  };

  const handleInputBlur = (word, value) => {
    const updatedMaskedWords = maskedWords.map((w) => (w === word ? value : w));
    setMaskedWords(updatedMaskedWords);
  }

  const handleConfirm = () => {
    // Update mapped_entity based on editedIdentifiers, keeping the entity the same
    const updatedMappedEntity = mapped_entity.map((entity) => ({
      ...entity,
      identifier: editedIdentifiers[entity.identifier] || entity.identifier, // Update the identifier field based on the state
    }));
    const entityToIdentifier = updatedMappedEntity.reduce((acc, item) => {
      acc[item.entity] = item.identifier;
      return acc;
    }, {});

    // Replace words in words1 with identifiers where applicable
    const replacedWords = words1.map((word) => {
      const cleanedWord = word.replace(/[.,]/g, ""); // Remove any punctuation
      return entityToIdentifier[cleanedWord] || word; // Replace if match found, else keep original
    });

    socket.emit("review_message", {
      message: replacedWords.join(" "),
      session_id: id,
      entity_map: updatedMappedEntity,
      message_id,
      chat_id,
    });
    setShowDiff(false);
  };

  const onTextareaClose = (word) => {
    // Find the entity associated with the word
    const originalEntity = mapped_entity.find(
      (entity) => entity.identifier === word
    );

    // If the word exists in editedIdentifiers, remove it
    setEditedIdentifiers((prev) => {
      const updatedIdentifiers = { ...prev };
      delete updatedIdentifiers[word]; // Remove the word from editedIdentifiers
      return updatedIdentifiers;
    });

    // Update the mapped_entity by resetting the identifier to its original entity value
    if (originalEntity) {
      originalEntity.identifier = originalEntity.entity; // Reset to original entity
    }

    const updatedMappedWords = maskedWords.map((w) =>
      w === word ? originalEntity.entity : w
    );
    setMaskedWords(updatedMappedWords);

    // Close the Textarea by resetting the isEdit state
    setIsEdit(null);
  };

  return (
    <div className="relative w-full mt-2">
      <div className="flex space-x-4 mb-2 w-full">
        {/* First div for original text (message) */}
        <div className="w-1/2 text-white p-4 flex flex-wrap bg-gray-4 rounded-lg">
          {words1?.map((word, index) => (
            <span key={index} className="mr-1">
              {word}
            </span>
          ))}
        </div>

        {/* Second div for masked text, adding yellow background for changed words */}
        <div className="w-1/2 text-white p-4 flex flex-wrap bg-gray-4 rounded-lg items-center">
          {maskedWords?.map((word, index) => (
            <span key={index}>
              {/* Toggle between span and input field for highlighted words */}
              {isEdit === word && isIdentifier(word) ? (
                <div className="h-[40px] w-[200px] mt-1 mr-1">
                  <Textarea
                    value={editedIdentifiers[word]}
                    onChange={(e) =>
                      handleInputChange(word, e.target.value, e.key)
                    }
                    showClose={true}
                    onClose={() => onTextareaClose(word)}
                    onBlur={(e) => handleInputBlur(word, e.target.value)}
                  />
                </div>
              ) : (
                <span
                  onClick={() => handleWordClick(word)}
                  className={`mr-1 cursor-pointer ${
                    isIdentifier(word) && editedIdentifiers[word]
                      ? "bg-yellow-300 rounded px-1 text-black"
                      : ""
                  }`}
                >
                  {word}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute right-0  bg-purple-1 rounded-lg px-5 py-2 mt-2 text-primary hover:scale-105">
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default Diff;
