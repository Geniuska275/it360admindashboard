import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Buttons from '../Buttons';

function Card({ item }) {
  return (
    <div className='bg-white shadow-lg  border border-gray-300 rounded flex justify-around  gap-2 p-4 w-[280px]'>
      <div>
        <h3 className='text-[#4F4F4F]'>{item.Text}</h3>
        <h1 className='text-2xl font-bold'>{item.amount}</h1>
        <div className='flex gap-1 mt-2 items-center'>
          <MdOutlineArrowOutward className='text-sm text-[#009B4D]' />
          <p className='text-[#009B4D] text-sm'>{item.percent}</p>
          <p className='text-sm text-[#828282]'>{item.year}</p>
        </div>
      </div>
      <div className='w-8 h-8 rounded-md bg-[#E0E0E0] flex justify-center items-center'>
        {item.icon}
      </div>
    </div>
  );
}

export default Card;
