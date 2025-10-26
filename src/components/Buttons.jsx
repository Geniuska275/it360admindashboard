import React from 'react';

function Buttons({ children, onCliick, width }) {
  return (
    <button
      className={`bg-[#1F1F1F] w-[${width}] font-lato font-bold shadow-md text-white px-6 py-2 rounded hover:bg-[#FF6500] cursor-pointer`}
      onClick={onCliick}
    >
      {children}
    </button>
  );
}

export default Buttons;
