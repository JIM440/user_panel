import React from 'react';

const TextAreaValue = ({ label, name, placeholder, value }) => {
  return (
    <label className="textArea-component" htmlFor={name}>
      <span>{label}:</span>
      <textarea
        id={name}
        placeholder={placeholder}
        value={value}
        required
      ></textarea>
    </label>
  );
};

export default TextAreaValue;
