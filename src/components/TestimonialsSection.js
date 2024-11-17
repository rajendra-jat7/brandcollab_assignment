import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = () => {
  return (
    <div className="p-4 bg-white rounded-lg">
    <div className='flex justify-between items-center'>
      <h3 className="text-lg font-bold">Testimonials</h3>
      <FontAwesomeIcon icon={faPen} className='text-gray-600 hover:text-gray-700 cursor-pointer' />
      </div>
      <blockquote className="mt-2 italic text-gray-500">
        "Working with Jennifer was the best experience possible for us. We've had over 150 B2B partners come from her audience, and likely so many influenced by her! Seriously, the best ROI we've seen."
      </blockquote>
      <p className="text-right mt-2 font-semibold">- John Smith, Company</p>
      <button className="text-white w-full mt-6 bg-black rounded-lg p-2">Add Testimonials</button>
    </div>
  );
};

export default TestimonialsSection;
