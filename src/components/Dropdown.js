import React from 'react';

const Dropdown = ({ selected, options, onSelect }) => {
  return (
    <div className="p-4 bg-primary text-white rounded-md w-64">
    <select
      className="w-full p-2 bg-primary text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2  cursor-pointer"
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value} className='w-full p-2 rounded-md  cursor-pointer'>
          {option.label}
        </option>
      ))}
    </select>
  </div>
  );
};

export default Dropdown;
