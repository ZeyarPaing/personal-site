import React from 'react';
import { ButtonType } from 'types';

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
      disabled={disabled || status !== 'idle'}
      className={`${
        type == 'primary'
          ? 'bg-primary hover:bg-primary-light active:bg-primary-dark text-gray-900'
          : 'bg-secondary hover:bg-secondary-light active:bg-secondary-dark text-white'
      } px-8 py-3 rounded-xl font-bold disabled:bg-gray-400 disabled:text-gray-600 ${className}`}
    >
      {status == 'idle' ? (
        children
      ) : status == 'loading' ? (
        <p>Sending</p>
      ) : status == 'ok' ? (
        <p>Ok</p>
      ) : (
        <p>Error</p>
      )}
    </button>
  );
};

const TextButton = ({
  children,
  type = 'primary',
  disabled = false,
  onClick,
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
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

const LinkButton = ({
  children,
  type = 'primary',
  disabled = false,
  onClick,
  href,
}: ButtonType & { href: string }) => {
  return (
    <a
      className={`${
        type == 'primary'
          ? 'text-primary hover:text-primary-light active:text-primary-dark '
          : 'text-secondary hover:text-secondary-light active:text-secondary-dark '
      } font-bold`}
      href={href}
    >
      {children}
    </a>
  );
};

export { Button, TextButton, LinkButton };
