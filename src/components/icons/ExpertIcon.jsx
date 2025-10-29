import React from 'react';
import awardImage from '@/assets/images/expert.png';

function ExperIcon({ className = "w-10 h-16" }) {
  return (
    <img 
      src={awardImage} 
      alt="Badge" 
      className={className}
    />
  );
}

export default ExperIcon;

