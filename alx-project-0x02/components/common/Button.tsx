// components/common/Button.tsx

import React from 'react';
import { type ButtonProps } from '@/interfaces';

const sizeMap = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  shape = 'rounded-md',
  onClick,
}) => {
  const baseStyle = 'bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-200';
  const className = `${baseStyle} ${sizeMap[size]} ${shape}`;

  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  );
};

export default Button;
