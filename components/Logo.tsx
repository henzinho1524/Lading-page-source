
import React from 'react';

export const Logo: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M50 90C25 80 15 60 15 40C15 25 25 10 50 10C75 10 85 25 85 40C85 60 75 80 50 90Z" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M50 80V30M50 30L35 45M50 30L65 45" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="50" cy="80" r="6" fill="#3b82f6" />
    </svg>
  );
};
