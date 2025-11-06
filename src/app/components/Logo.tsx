import React from 'react';

const Logo = ({ className = 'h-8 w-auto' }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.083 0.23999L0 12.03V33.63L10.5 27.87V17.79L22.083 11.07L41.083 21.39V11.07L22.083 0.23999Z" fill="currentColor"/>
      <path d="M20.5 33.63L41.083 21.75V33.63L20.5 33.63Z" fillOpacity="0.6" fill="currentColor"/>
    </svg>
  );
};

export default Logo;