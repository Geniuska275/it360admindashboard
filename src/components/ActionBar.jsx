import React, { useState, useEffect, useRef } from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { TbEyeStar } from 'react-icons/tb';
import ViewProgressDialog from './Course/modules/ViewProgressDialog';

function ActionBar({ type, student }) {
  const [show, setShow] = useState(false);
  const [showProgressDialog, setShowProgressDialog] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show]);

  const handleViewProgress = () => {
    setShowProgressDialog(true);
    setShow(false);
  };

  return (
    <div className='relative' ref={menuRef}>
      <div
        className='bg-[#E0E0E0] w-8 h-8 rounded flex justify-center items-center cursor-pointer'
        onClick={() => setShow(!show)}
      >
        <IoEllipsisVertical />
      </div>
      {show && (
        <div className='absolute right-0 mt-2 w-[180px] p-4 z-[9999] shadow-lg bg-white rounded-xl border border-gray-200'>
          <div 
            className='flex items-center my-1 gap-2 hover:bg-gray-100 p-2 rounded cursor-pointer'
            onClick={handleViewProgress}
          >
            <TbEyeStar className='text-xl' />
            <h5 className='text-md'>View Progress</h5>
          </div>
        </div>
      )}
      
      <ViewProgressDialog 
        isOpen={showProgressDialog}
        onClose={() => setShowProgressDialog(false)}
        student={student}
      />
    </div>
  );
}

export default ActionBar;
