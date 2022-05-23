import React from 'react';

interface ButtonType {
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  status?: 'idle' | 'loading' | 'ok' | 'err' | string;
  onClick?: any;
  disabled?: boolean;
  className?: string;
}

const Button = ({
                  children,
                  onClick,
                  status = 'idle',
                  disabled = false,
                  type = 'primary',
                  className,
                }: ButtonType) => {
  return (
      <button
          onClick={onClick}
          disabled={disabled}
          className={`${
              type == 'primary'
                  ? 'bg-primary hover:bg-primary-light active:bg-primary-dark text-gray-900'
                  : 'bg-secondary hover:bg-secondary-light active:bg-secondary-dark text-white'
          } px-8 py-3 rounded-lg font-bold disabled:bg-gray-400 disabled:text-gray-600 ${className}`}
      >
        {status == 'idle' ? children
            : status == 'loading' ?
                <p>Loading</p>
                : status == 'ok' ? <p>Ok</p> : <p>err</p>
        }
      </button>
  );
};

const TextButton = ({
                      children,
                      type = 'primary',
                      disabled = false,
                      onClick,
                    }: ButtonType) => {
  const color = `text-${type} hover:text-${type}-light active:text-${type}-dark`;
  return (
      <button
          className={`${
              type == 'primary'
                  ? 'text-primary hover:text-primary-light active:text-primary-dark '
                  : 'text-secondary hover:text-secondary-light active:text-secondary-dark '
          } font-bold`}
      >
        {children}
      </button>
  );
};

export {Button, TextButton};
