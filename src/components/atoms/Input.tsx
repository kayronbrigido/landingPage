'use client'
import React, { useState } from 'react';

type InputProps = {
  label: string;
  width?: string;
  margin?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ label, width = 'w-full', margin, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(rest.value || '');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={`relative ${margin}`}>
      <input
        className={`border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 ${width}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        value={inputValue}
        {...rest}
      />
      <label
        className={`absolute left-3 transition-all duration-200 ${
          isFocused || inputValue ? '-top-6 text-sm text-gray-600' : 'top-1/2 -translate-y-1/2 text-base text-gray-400'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
