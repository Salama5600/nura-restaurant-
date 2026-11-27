import React from 'react';

interface BrandMarkProps {
  className?: string;
  size?: number;
}

export const BrandEmblem: React.FC<BrandMarkProps> = ({className = '', size = 28}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M18 4C15.6 9.6 15.6 16.4 18 22C20.4 16.4 20.4 9.6 18 4Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M18 22C13.2 18.6 9.8 13.8 9.2 8.2C13.4 10.6 16.4 15.6 18 22Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M18 22C22.8 18.6 26.2 13.8 26.8 8.2C22.6 10.6 19.6 15.6 18 22Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M18 23.5C12.2 21.8 7.5 18.4 5 14C9.5 15 13.8 18 18 23.5Z"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinejoin="round"
    />
    <path
      d="M18 23.5C23.8 21.8 28.5 18.4 31 14C26.5 15 22.2 18 18 23.5Z"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinejoin="round"
    />
    <path
      d="M9 28.5H27"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M13 31.5H23"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      opacity="0.7"
    />
  </svg>
);

export const LaurelWreath: React.FC<{className?: string}> = ({className = ''}) => (
  <svg
    viewBox="0 0 140 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M28 45C17 39 12 26 17 12"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path d="M17 12C20 14 21 18 18 20C15 18 15 14 17 12Z" fill="currentColor" opacity="0.45" />
    <path d="M14 22C18 23 20 27 17 30C14 29 12 25 14 22Z" fill="currentColor" opacity="0.45" />
    <path d="M17 32C21 32 24 36 21 39C18 39 15 35 17 32Z" fill="currentColor" opacity="0.45" />
    <path
      d="M112 45C123 39 128 26 123 12"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <path d="M123 12C120 14 119 18 122 20C125 18 125 14 123 12Z" fill="currentColor" opacity="0.45" />
    <path d="M126 22C122 23 120 27 123 30C126 29 128 25 126 22Z" fill="currentColor" opacity="0.45" />
    <path d="M123 32C119 32 116 36 119 39C122 39 125 35 123 32Z" fill="currentColor" opacity="0.45" />
  </svg>
);
