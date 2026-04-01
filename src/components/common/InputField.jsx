import React from 'react';

const InputField = ({ label, type, placeholder, value, onChange, required = false }) => {
  return (
    <div className="input-group">
      {label && <label>{label}</label>}
      <input 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;