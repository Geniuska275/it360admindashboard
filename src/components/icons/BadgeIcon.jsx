import React from 'react';
import badgeImage from '@/assets/images/badge.png';

function BadgeIcon({ className = "w-10 h-16" }) {
  return (
    <img 
      src={badgeImage} 
      alt="Badge" 
      className={className}
    />
  );
}

export default BadgeIcon;

