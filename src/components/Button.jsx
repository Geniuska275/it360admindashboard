import React from 'react'

function Button({children,onCliick,width}) {
  return (

        <button className={`bg-[#FF6500] w-[${width}] font-lato font-bold shadow-md text-white px-6 py-2 rounded hover:bg-[#FF6500] cursor-pointer`} onClick={onCliick}>
            {children}
        </button>

  )
}

export default Button