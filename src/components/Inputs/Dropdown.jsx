"use client";
import React, { useState } from "react";

const Dropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [presentValue, setPresentValue] = useState(null)
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelect = (value) => {
    onSelect(value);
    setIsOpen(false);
    setPresentValue(value)
  };

  return (
    <div className="w-full">
      <div className="border-b w-full border-b-slate-300">
        <button onClick={handleClick} className="flex justify-between w-full text-gray-400 text-lg capitalize">
          <p>{presentValue? presentValue : label} </p>
          <p>{isOpen ? "▴" : "▾"}</p>
        </button>
      </div>
    
      {isOpen && (
        <ul>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleItemSelect(option.value)}
              className="text-gray-800 text-base cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
