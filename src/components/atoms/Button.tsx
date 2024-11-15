import React, { MouseEventHandler, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', disabled = false, className }) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
