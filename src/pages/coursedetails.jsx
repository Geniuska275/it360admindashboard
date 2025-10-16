import React from 'react'
import lg from "./strategy.png"

function Coursedetails() {
  return (
    <div className='mx-5 bg-white h-screen overflow-y-scroll'>
        <h1 className='text-[30px] my-5 font-bold'>Advance Python Programming</h1>
        <p>master advanced Python concepts and techniques for building robust applications.</p>
        <img src={lg} className='my-3'/>
        <div className='flex gap-4'>
            <div>
                <h1 className='font-bold'>  Instructor</h1>
                <p>Dr. Eleanor Vance</p>
            </div>
            <div >
                 <h1 className='font-bold'>Enrollment</h1>
                <p>3000</p>        
            </div>
        </div>
        <div className='mt-3'>
             <h1 className='font-bold'>Course Overview</h1>
                <p>This course delves into advanced Python programming, covering topics such as asynchronous programming, decorators, generators, and metaclasses. Students will learn to write efficient, scalable, and maintainable Python code.</p>
       </div>


    </div>
  )
}

export default Coursedetails