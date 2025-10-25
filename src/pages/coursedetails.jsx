import React from 'react';
import lg from './strategy.png';

function Coursedetails() {
  return (
    <div className='container-main'>
      <h1 className='text-heading-xl my-5'>Advance Python Programming</h1>
        <p className='text-paragraph-sm'>
          master advanced Python concepts and techniques for building robust
          applications.
        </p>
      <img src={lg} className='my-3' />
      <div className='flex gap-8 spacing-sm '>
        <div>
          <h1 className='text-heading-xs'>Instructor</h1>
          <p className='text-paragraph-sm'>Dr. Eleanor Vance</p>
        </div>
        <div className='ml-16'>
          <h1 className='text-heading-xs'>Enrollment</h1>
          <p className='text-paragraph-sm'>3000</p>
        </div>
      </div>
      <div className='mt-8'>
        <h1 className='text-heading-xs mb-4'>Course Overview</h1>
        <p className='text-paragraph-md'>
          This course delves into advanced Python programming, covering topics
          such as asynchronous programming, decorators, generators, and
          metaclasses. Students will learn to write efficient, scalable, and
          maintainable Python code.
        </p>
      </div>
    </div>
  );
}

export default Coursedetails;
