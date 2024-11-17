import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const AboutSection = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
        <div className='flex justify-between items-center'>
            <h3 className="text-lg font-bold">About Me</h3>
            <FontAwesomeIcon icon={faPen} className='text-gray-600 hover:text-gray-700 cursor-pointer' />
        </div>
      <p className=" text-gray-500">
        Hi, my name is Adrian Brewer, I'm the Co-founder and Head of Design at BB agency. Designer at heart. Head of Design might be an overstatement, but as with many 20 people agencies I need to wear many different hats...
      </p>
      
    </div>
  );
};

export default AboutSection;
