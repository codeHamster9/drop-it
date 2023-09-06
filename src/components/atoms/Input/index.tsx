import { useState } from 'react';
import './input.css';

const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="b-input"
      placeholder="search item"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
