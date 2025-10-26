import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
function CreateCourse() {
  return (
    <div className='bg-white flex-1'>
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
            <h1 className='text-xl font-bold mx-5 mt-3'>Create New Course</h1>

            <div className='mx-5 mt-4 flex gap-2'>
              <div className='flex gap-2 items-center'>
              <div className='flex justify-center items-center w-8 h-8 border border-[#EB5757] rounded-full text-white font-bold'>
                <h1 className='text-[#EB5757] font-bold' >01</h1>
              </div>
              <h1 className='text-sm text-[#EB5757]  '>Course Details</h1>
               <IoIosArrowForward className='text-[#EB5757]'/>
              </div>
              <div className='flex gap-2 items-center'>
              <div className='flex justify-center items-center w-8 h-8 border border-[#BDBDBD] rounded-full text-white font-bold'>
                <h1 className='text-[#BDBDBD] font-bold' >02</h1>
              </div>
              <h1 className='text-sm text-[#BDBDBD]  '>modules</h1>
               <IoIosArrowForward className='text-[#BDBDBD]'/>

              </div>
              <div className='flex gap-2 items-center'>
              <div className='flex justify-center items-center w-8 h-8 border border-[#BDBDBD] rounded-full text-white font-bold'>
                <h1 className='text-[#BDBDBD] font-bold' >03</h1>
              </div>
              <h1 className='text-sm  text-[#BDBDBD]   '>Preview</h1>
               <IoIosArrowForward className='text-[#BDBDBD]'/>

              </div>

            </div>
      
    </div>
  )
}

export default CreateCourse
