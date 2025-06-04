
import React from 'react';
import { type ButtonProps } from '@/interfaces';



const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

const Button: React.FC<ButtonProps> = ({
  size = 'medium',
  shape = 'rounded-md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'bg-gray-200 hover:bg-gray-300 border border-gray-400 text-gray-800 font-medium focus:outline-none';
  const finalClassName = `${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`;

  return (
    <button {...props} className={finalClassName}>
      {children}
    </button>
  );
};

export default Button;