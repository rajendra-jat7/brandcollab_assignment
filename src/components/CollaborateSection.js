import React, { useState } from 'react';

const CollaborateSection = () => {
  const [collaborations, setCollaborations] = useState(['Coca Cola']);

  const addCollaboration = () => {
    setCollaborations([...collaborations, 'New Collaboration']);
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-lg font-bold">Previous Collaborate</h3>
      <div className="flex space-x-2 mt-2">
        {collaborations.map((collab, index) => (
          <span key={index} className="bg-gray-300 text-sm text-gray-500 p-2 pl-3 pr-3 rounded-3xl">{collab}</span>
        ))}
        <button onClick={addCollaboration} className="text-white bg-black rounded-lg p-2">+ Add Previous Collaboration</button>
      </div>
    </div>
  );
};

export default CollaborateSection;
