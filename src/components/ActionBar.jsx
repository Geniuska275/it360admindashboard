import React, { useState } from 'react'
import { IoEllipsisVertical } from "react-icons/io5";
import { TbEyeStar } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { MdBlockFlipped } from "react-icons/md";
import { AlertDialog, Button, Flex, Select } from '@radix-ui/themes';
import { IoCloseCircleSharp } from "react-icons/io5";
import { CgAsterisk } from "react-icons/cg";

function ActionBar() {
    const [show,setShow]=useState(false)


  return (
    <div>
       <div className='bg-[#E0E0E0] w-8 h-8 rounded flex justify-center items-center' onClick={()=>setShow(!show)}>
        <IoEllipsisVertical />
        </div>
        {show && <div className='w-[180px] h-[100px] p-4 z-10 shadow-md bg-white rounded-xl '>
            <div className='flex items-center my-1 gap-2'>
                <TbEyeStar className='text-xl'/>
                <h5 className='text-md'>View Profile</h5>
            </div>
            <div className='flex items-center my-1 gap-2'>
                <MdBlockFlipped className='text-xl'/>
                <h5  className='text-md'>Deactivate User</h5>
            </div>

<AlertDialog.Root>
	<AlertDialog.Trigger>

            <div className='flex items-center my-1  gap-2'>
                <CiEdit className='text-xl'/>
                <h5  className='text-md'>Edit profile</h5>
            </div>

	</AlertDialog.Trigger>
	<AlertDialog.Content maxWidth="800px" maxHeight="450px">
        <div className='flex justify-between items-center mx-5'>
            <h2 className='font-bold'>Edit Student Profile</h2>
        <AlertDialog.Cancel>
      <IoCloseCircleSharp className='text-xl' />

			</AlertDialog.Cancel>

        </div>
           <div className='flex justify-center items-center'>

            <form className='w-[700px] h-[300px] border border-[#dddddd]  p-2 rounded mx-5 my-3'>
                <div className='flex justify-between items-center gap-2'>

                <div className=''>
                    <div className='mb-1'>
                        <div className='flex gap-1 items-center'>
                            <h2 className='font-bold text-sm text-[#373737]'>FirstName</h2>
                            <CgAsterisk className='text-red-600' />

                        </div>
                        <input 
                        placeholder='Enter Firstname...'
                        className='border border-[#dddddd] py-1 text-md rounded px-[60px]'/>


                    </div>
                    <div className='mb-1'>
                        <div className='flex gap-1 items-center'>
                            <h2 className='font-bold text-sm text-[#373737]'>Email Address</h2>
                            <CgAsterisk className='text-red-600' />

                        </div>
                        <input className='border border-[#dddddd] py-1  rounded px-[60px]'/>
                        

                    </div>
                    <div className='mb-1'>
                         <div className='flex gap-1 items-center'>
                            <h2 className='font-bold text-sm text-[#373737]'>Date of Birth</h2>
                            <CgAsterisk className='text-red-600' />

                        </div>
                        <input className='border border-[#dddddd] py-1  rounded px-[60px]'/>
                        

                    </div>
                    <div className='mb-1'>
                         <div className='flex gap-1 items-center'>
                            <h2 className='font-bold text-sm text-[#373737]'>Nationality</h2>
                            <CgAsterisk className='text-red-600' />

                        </div>
                        <input className='border border-[#dddddd] py-1  rounded px-[60px]'/>
                        

                    </div>

                </div>

                <div>
                    <div className='my-1'>
                          <div className='flex gap-1 items-center'>
                            <h2 className='font-bold text-sm text-[#373737]'>Last Name</h2>
                            <CgAsterisk className='text-red-600' />

                        </div>
                        <input className='border border-[#dddddd] py-1 rounded px-[60px]'/>

                    </div>
                    <div className='my-1'>
                       <div className='flex gap-1 items-center'>
                            <h2 className='font-bold text-sm text-[#373737]'>Phone Number</h2>
                            <CgAsterisk className='text-red-600' />

                        </div>
                        <input className='border border-[#dddddd] py-1 rounded px-[60px]'/>

                    </div>
                    <div className='my-1'>
                        <div className='flex gap-1 items-center'>
                            <h2 className='font-bold text-sm text-[#373737]'>Gender</h2>
                            <CgAsterisk className='text-red-600' />

                        </div>
                        {/* <input className='border border-[#dddddd] py-1 rounded px-[50px]'/> */}
                          <Select.Root defaultValue="male" className='border border-[#dddddd] py-1 rounded w-[300px]'>
                                   <Select.Trigger />
                                  <Select.Content>
                                    <Select.Group>
                                    <Select.Label>select Gender</Select.Label>
                                    <Select.Item value="male">male</Select.Item>
                                    <Select.Item value="female">female</Select.Item>
                                   
                                </Select.Group>
                                

                            </Select.Content>
                        </Select.Root>

                    </div>
                    <div className='my-1'>
                       <div className='flex gap-1 items-center'>
                            <h2 className='font-bold text-sm text-[#373737]'>Marital Status</h2>
                            <CgAsterisk className='text-red-600' />

                        </div>
                           <Select.Root defaultValue="married" className='border border-[#dddddd] py-1 rounded w-[300px]'>
                                   <Select.Trigger />
                                  <Select.Content>
                                    <Select.Group>
                                    <Select.Label>Status</Select.Label>
                                    <Select.Item value="single">single</Select.Item>
                                    <Select.Item value="married">married</Select.Item>
                                    
                                </Select.Group>
                                

                            </Select.Content>
                        </Select.Root>
                    </div>

                </div>


                        </div>
               <div className='flex gap-2 mt-2 ml-[500px]'>
                <button className='border py-2 px-4 rounded-xl border-[#dddddd] text-[#373737]'> Cancel</button>
        
         <button className='border  bg-black py-2 px-4 rounded-xl border-[#dddddd] text-white'> Save</button>
               </div>

            </form>
           </div>
		
	</AlertDialog.Content>
</AlertDialog.Root>



        </div>}
    </div>
  )
}

export default ActionBar