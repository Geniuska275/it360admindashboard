import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
function Header() {
  return (
    <div className=' bg-white  py-4 shadow-md w-full'>
      <div className='flex gap-3  items-center px-1'>
        <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
        <h2 className='border-l px-2 text-[#71717A]'>Dashboard</h2>
      </div>
      
    </div>
  )
}

export default Header