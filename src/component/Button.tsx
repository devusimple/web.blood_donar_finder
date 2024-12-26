import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold transition-colors duration-200 disabled:opacity-50';
  const variants = {
    primary: 'bg-[#E53935] text-white hover:bg-[#D32F2F]',
    secondary: 'bg-[#4CAF50] text-white hover:bg-[#388E3C]'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};