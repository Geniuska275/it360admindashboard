import React from 'react';

function ProgressBar({ 
  value, 
  max = 100, 
  height = 'h-1', 
  bgColor = 'bg-gray-200', 
  fillColor = 'bg-red-500',
  showPercentage = true,
  className = '',
  label = '',
  variant = 'justified' // 'justified' or 'simple'
}) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  // Simple variant (like Students table)
  if (variant === 'simple') {
    return (
      <div className={`flex gap-2 items-center ${className}`}>
        <div className={`w-full ${bgColor} rounded-full ${height}`}>
          <div 
            className={`${fillColor} ${height} rounded-full transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        {showPercentage && (
          <span className="text-sm font-medium">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    );
  }

  // Justified variant (like ViewProgressDialog)
  return (
    <div className={`flex items-center justify-between w-full ${className}`}>
      {label && (
        <span className="text-paragraph-xs text-gray-600">
          {label}
        </span>
      )}
      
      <div className="flex items-center gap-2 w-1/2">
        <div className={`w-full ${bgColor} rounded-full ${height}`}>
          <div 
            className={`${fillColor} ${height} rounded-full transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        {showPercentage && (
          <span className="text-paragraph-xs text-gray-600 min-w-fit">
            {Math.round(percentage)}%
          </span>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
