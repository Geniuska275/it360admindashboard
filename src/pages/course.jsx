import React, { useState } from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import Coursedetails from './coursedetails';
import Modules from './modules';
import Students from './Students';
import Resources from './Resources';

function Course() {
    const [active,setActive]=useState("Course Details")
  return (
    <div className='bg-white flex-1'> 
        <div className='flex-1  bg-white  py-4 shadow w-full top-0 sticky z-10'>        
        <div className='flex gap-3  items-center px-1'>
                            <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
                            <h2 className='border-l px-2 text-[#71717A]'>Course Management </h2>
                            <IoIosArrowForward/>
                            <h2 className=' px-2 '>Course List View</h2>
                            <IoIosArrowForward/>
                            <h2 className=' px-2  font-bold'>Advance Python Programming</h2>
            </div>  
         </div>
      

         

            <div className=' bg-white flex gap-2  p-4 shadow relative ' >
                <div className='mx-4 relative'>
                <h2 className={`text-[#9498A3] ${active=="Course Details" ? 'text-black':""}`} onClick={()=>setActive("Course Details")}>Course Details</h2>
                {active=="Course Details" && <p className='px-[50px] bg-black p-[3px] absolute top-9 rounded'></p>}
                </div>
                  <div className='mx-4 relative'>
                <h2 className={`text-[#9498A3] ${active=="Modules" ? 'text-black':""}`} onClick={()=>setActive("Modules")}>Modules</h2>
                {active=="Modules" && <p className='px-[35px] bg-black p-[3px] absolute top-9 rounded'></p>}
                </div>
                 <div className='mx-4 relative'>
                <h2 className={`text-[#9498A3] ${active=="Students" ? 'text-black':""}`} onClick={()=>setActive("Students")}>Students</h2>
                {active=="Students" && <p className='px-[40px] bg-black p-[3px] absolute top-9 rounded'></p>}
                </div>
                  <div className='mx-4 relative'>
                <h2 className={`text-[#9498A3] ${active=="Resources" ? 'text-black':""}`} onClick={()=>setActive("Resources")}>Resources</h2>
                 {active=="Resources" && <p className='px-[40px] bg-black p-[3px] absolute top-9 rounded'></p>}
                </div>
            </div>
            {active=="Course Details" && (
                <Coursedetails/>
            )}
            {active=="Modules" && (
                <Modules/>
            )}
            {active=="Students" && (
                <Students/>
            )}
            {active=="Resources" && (
                <Resources/>
            )}
        



    </div>
  )
}

export default Course
