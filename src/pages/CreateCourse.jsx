import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
function CreateCourse() {
  return (
    <div>
                   <div className='flex-1  bg-white  py-4 shadow-md w-full top-0 sticky z-10'>        
                       <div className='flex gap-3  items-center px-1'>
                         <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
                         <h2 className='border-l px-2 text-[#71717A]'>Course Management </h2>
                         <IoIosArrowForward/>
                         <h2 className=' px-2 text-[#71717A] '>Course List View</h2>
                          <IoIosArrowForward/>
                         <h2 className=' px-2 text-black font-bold'>Create Course</h2>
                       </div>  
                     </div>
      
    </div>
  )
}

export default CreateCourse
