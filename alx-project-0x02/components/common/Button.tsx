import React from "react";
import {type ButtonProps} from '@/interfaces/index';
const Button: React.FC<ButtonProps> = ({ size, shape, onClick, children }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-700 transition-all`}
    >
      {children}
    </button>
  );
};

export default Button;
