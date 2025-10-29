import React from 'react';
import beltImage from '@/assets/images/belt.png';

function BeltIcon({ className = "w-10 h-16" }) {
  return (
    <img 
      src={beltImage} 
      alt="Belt" 
      className={className}
    />
  );
}

export default BeltIcon;

