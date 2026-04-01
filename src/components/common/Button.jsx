import React from 'react';

const Button = ({ children, type = "button", variant = "primary", onClick, className = "" }) => {
  return (
    <button 
      type={type} 
      className={`btn-base ${variant} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;