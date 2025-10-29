import React from 'react';
import awardImage from '@/assets/images/rookie.png';

function RookieIcon({ className = "w-10 h-16" }) {
  return (
    <img 
      src={awardImage} 
      alt="Badge" 
      className={className}
    />
  );
}

export default RookieIcon;

