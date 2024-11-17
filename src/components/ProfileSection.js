import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const ProfileSection = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <div className='flex justify-between items-center'>
        <h3 className="text-lg font-bold">Adrian Brewer</h3>
        <FontAwesomeIcon icon={faPen} className='text-gray-600 hover:text-gray-700 cursor-pointer' />
      </div>
      <p className="text-sm text-gray-500">Engineer at BB Agency - Industry</p>
      <p className="text-sm text-gray-500">New York, United States</p>
      <div className="flex space-x-2 mt-2">
        <span className="bg-gray-200 text-sm text-gray-500 p-2 rounded-3xl pl-3 pr-3">UX Research</span>
        <span className="bg-gray-200 text-sm text-gray-500 p-2 rounded-3xl pl-3 pr-3">CX Strategy</span>
        <span className="bg-gray-200 text-sm text-gray-500 p-2 rounded-3xl pl-3 pr-3">Project Management</span>
      </div>
    </div>
  );
};

export default ProfileSection;
