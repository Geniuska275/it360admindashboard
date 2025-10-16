import { AlertDialog, Separator, Table } from '@radix-ui/themes';
import React, { useState } from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { Link, Links } from 'react-router-dom';
import { MdBlockFlipped } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

import { IoCloseCircleSharp } from "react-icons/io5";
import { CgAsterisk } from "react-icons/cg"

import { MdOutlineSpaceDashboard } from "react-icons/md";
import ActionBar from '../components/ActionBar';

function AdminStrator() {
    const [active,setActive]=useState("Profile Details");


    const students=[
       {
        id:1,
        name:"John Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"active"
      },
        {
        id:2,
        name:"Peter Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"active"
      },
        {
        id:3,
        name:"Jude Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"active"
      },
        {
        id:4,
        name:"Paul Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"active"
      },
       {
        id:5,
        name:"John Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"deactivated"
      },
   
    ]
     const completed=[
      {
        id:1,
        title:"Full Stack Development",
        type:"self-paced",
        price:"$300",
        date:"12/05/2005",
        progress:"100% completed",
        child:"Emma Jones"

      },
        {
        id:1,
        title:"Frontend Stack Development",
        type:"self-paced",
        price:"$100",
        date:"10/05/2005",
        progress:"100% completed",
        child:"Paul Jones"

      },
  {
        id:1,
        title:"Backend Stack Development",
        type:"instructor-led",
        price:"$100",
        date:"10/05/2005",
        progress:"100% completed",
        child:"Peter Jones"

      },
 
  
   
    ]

  return (
    <div>

          <div className=' bg-white  py-4 shadow-md w-full top-0 sticky z-10'>
                
                           <div className='flex gap-3  items-center px-1'>
                             <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
                             <h2 className='border-l px-2 text-[#71717A]'>User Management </h2>
                             <IoIosArrowForward/>
                             <Link to="/Administrators">
                             <h2 className=' px-2 text-[#71717A]'>Administrator</h2>
                             </Link>
                               <IoIosArrowForward/>
                             <h2 className=' px-2 text-black font-bold'>John Doe</h2>
               
               
                           </div>
                
              </div>
    <div className='p-4'>
        <div className='flex justify-between items-center '>
            <Link to="/Administrators">
            <div className='flex gap-2 items-center'>
                <FaLongArrowAltLeft/>
                <h4>Go Back</h4>
            </div>


            </Link>
            <div className='flex gap-2 items-center'>

                  <AlertDialog.Root>
                                <AlertDialog.Trigger>
                                    
         
                              <button className='border  bg-white py-2 px-4 rounded border-[#dddddd] text-[#373737] font-bold'> Edit Profile</button>

                                </AlertDialog.Trigger>
                                <AlertDialog.Content maxWidth="800px" maxHeight="450px">
                                    <div className='flex justify-between items-center mx-5'>
                                        <h2 className='font-bold'>
                                          Are you sure you want to activate this Parent?
                            
                                        </h2>
                                    <AlertDialog.Cancel>
                                  <IoCloseCircleSharp className='text-xl' />
                            
                                        </AlertDialog.Cancel>
                            
                                    </div>
                                     <h3 className='text-md mx-5'>
                                         This will give  access to all courses and features until reactivated.
                            
                                        </h3>
                                       
                                           <div className='flex gap-2 mt-2 ml-[500px]'>
                                            <button className='border py-2 px-4 rounded-xl border-[#dddddd] text-[#373737]'> Cancel</button>
                                    
                                     <button className='border  bg-black py-2 px-4 rounded-xl border-[#dddddd] text-white'> activate</button>
                                           </div>
                            
                                    
                                </AlertDialog.Content>
                            </AlertDialog.Root>
                            
                            
                            
                       {active=="Parent" ?

<AlertDialog.Root>
                <AlertDialog.Trigger>
                   
            <button className='flex p-2 bg-[#DC2626] rounded text-white items-center gap-1'>
                <MdBlockFlipped className='text-white'/>
                De-activate Instructor
            </button>
            
                </AlertDialog.Trigger>
                <AlertDialog.Content maxWidth="800px" maxHeight="450px">
                    <div className='flex justify-between items-center mx-5'>
                        <h2 className='font-bold'>
                          Are you sure you want to deactivate this Instructor?
            
                        </h2>
                    <AlertDialog.Cancel>
                  <IoCloseCircleSharp className='text-xl' />
            
                        </AlertDialog.Cancel>
            
                    </div>
                     <h3 className='text-md mx-5'>
                         This will restrict their access to all courses and features until reactivated.
            
                        </h3>
                       
                           <div className='flex gap-2 mt-2 ml-[500px]'>
                            <button className='border py-2 px-4 rounded-xl border-[#dddddd] text-[#373737]'> Cancel</button>
                    
                     <button className='border  bg-black py-2 px-4 rounded-xl border-[#dddddd] text-white'> Deactivate</button>
                           </div>
            
                    
                </AlertDialog.Content>
            </AlertDialog.Root>
            
            
            
            
            
            
            : 
            
            
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    
            <button className='flex p-2 bg-[#01857C] rounded text-white items-center gap-1'>
                <FaCheck/>
                Activate Instructor
            </button>
                </AlertDialog.Trigger>
                <AlertDialog.Content maxWidth="800px" maxHeight="450px">
                    <div className='flex justify-between items-center mx-5'>
                        <h2 className='font-bold'>
                          Are you sure you want to activate this Parent?
            
                        </h2>
                    <AlertDialog.Cancel>
                  <IoCloseCircleSharp className='text-xl' />
            
                        </AlertDialog.Cancel>
            
                    </div>
                     <h3 className='text-md mx-5'>
                         This will give  access to all courses and features until reactivated.
            
                        </h3>
                       
                           <div className='flex gap-2 mt-2 ml-[500px]'>
                            <button className='border py-2 px-4 rounded-xl border-[#dddddd] text-[#373737]'> Cancel</button>
                    
                     <button className='border  bg-black py-2 px-4 rounded-xl border-[#dddddd] text-white'> activate</button>
                           </div>
            
                    
                </AlertDialog.Content>
            </AlertDialog.Root>
            
            
            
            
        }
        </div>
        </div>

        <div className='bg-white shadow-md p-2 my-5 relative h-[180px]'>
            <div className='grid grid-cols-4 gap-4'>
                <div className=' p-4'>
                    <div className='flex gap-3 items-center'>
                        <img src='https://media.istockphoto.com/id/1459398604/photo/gym-fitness-and-portrait-of-proud-man-standing-with-smile-motivation-health-and-energy-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=dxB0e4na8AKeRekZ73vjmQot9-SlfegsWCyG9d924-4='
                        className='w-[100px] h-[100px] rounded-full fill'/>
                        <div>
                            <h1 className='font-bold uppercase '>John Doe</h1>
                            <p className='text-[12px] text-[#9498A3]'>081092809345</p>
                        </div>
                    </div>

                </div>
                <div className='p-2 flex items-center gap-10'>
                <Separator my="1" size="4" orientation="vertical" />
                <div>
                    <h1 className='font-bold  '>02/02/2024</h1>
                     <p className='text-[12px] text-[#9498A3]'>DATE JOINED</p>
                    </div>


                </div>
                <div className=' p-2 flex items-center gap-10'>
                <Separator my="1" size="4" orientation="vertical" />
                                <div>
                    <h1 className='font-bold  '>united kingdom</h1>
                     <p className='text-[12px] text-[#9498A3]'>COUNTRY</p>
                    </div>




                </div>
                <div className=' p-2 flex items-center gap-10'>
                <Separator my="1" size="4" orientation="vertical" />
                                <div>
                    <h1 className='font-bold  '>
                        head of staff
                    </h1>
                     <p className='text-[12px] text-[#9498A3] uppercase'>Role</p>
                    </div>

                </div>
            </div>
           
        </div>
        
            <div className='mt-5'>

             <div className='bg-white shadow-md p-4 my-5 rounded-xl '>
                <h1 className='font-bold mx-5 my-3'>Personal Information</h1>
                <div className='grid grid-cols-5 gap-3 mx-5'>
                     <div>
                            <h2 className=' text-[#9498A3] uppercase '>First name</h2>
                            <p className='text-[12px] font-bold text-black'>John</p>
                        </div>
                        <div>
                             <h2 className=' text-[#9498A3] uppercase '>last Name</h2>
                            <p className='text-[12px] font-bold text-black'>Doe</p>
                            
                        </div>
                        <div>
                            <h2 className=' text-[#9498A3] uppercase '>Phone number</h2>
                            <p className='text-[12px] font-bold text-black'>090111789028</p>
                            
                           
                        </div>
                        <div>
                            <h2 className=' text-[#9498A3] uppercase '>email address</h2>
                            <p className='text-[12px] font-bold text-black'>example@gmail.com</p>
                           
                        </div>
                        <div>
                          <h2 className=' text-[#9498A3] uppercase '>gender</h2>
                            <p className='text-[12px] font-bold text-black'>male</p>
                           
                        </div>
                </div>
                  
                  <div className='grid grid-cols-5 gap-3 mx-5 my-5'>

                        <div>
                             <h2 className=' text-[#9498A3] uppercase '>location</h2>
                            <p className='text-[12px] font-bold text-black'>Oyo,Ibadan</p>
                            
                        </div>
                        <div>
                             <h2 className=' text-[#9498A3] uppercase '>Home address</h2>
                            <p className='text-[12px] font-bold text-black'>No 3 meridian street</p>
                            
                        </div>

                        
                </div>
                

            </div>


                  
                 
                

            </div>
        

        {active=="Students" && (
            <div className='mt-5'>               
             <div className='bg-white shadow-md p-4 my-5 rounded-xl '>
                <Table.Root variant="surface">
    <Table.Header>
        <Table.Row>
            <Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Full Name</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Country</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>DOB</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Phone no</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>

        </Table.Row>
    </Table.Header>

  <Table.Body>

      {students.map((item, index)=>(
        <Table.Row key={item.id}> 
        <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
        <Table.Cell>
          <div className='flex gap-2 items-center'>
            <img src={item.img} className='w-8 h-8 rounded-full'/>
            <span>
          {item.name}
            </span>
          </div>
          </Table.Cell>
        <Table.Cell>{item.country}</Table.Cell>
        <Table.Cell>{item.Dob}</Table.Cell>
 
        <Table.Cell>{item.phone}</Table.Cell>
        <Table.Cell> 

          {item.status=="active" ?
        <div className=' bg-[#009B4D1A] w-[100px] p-1  rounded-3xl'>
          <p className='text-center text-[#01857C] '>{item.status}</p>
        </div>:<div className='bg-red-300  w-[100px] p-1  rounded-3xl'>
          <p className='text-center text-[#FF0000] '>{item.status}</p>
        </div>}
      </Table.Cell>
      <Table.Cell>
       <ActionBar/>
       
      </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
     
  <div className='my-4 flex justify-between items-center'>
        <h4 className='text-[#373737]'>0 of 1 row(s) selected.</h4>
        <div className='flex gap-3'>
          <button className='border py-2 px-4 rounded border-[#dddddd] text-[#373737]'> Previous</button>
        
         <button className='border py-2 px-4 rounded border-[#dddddd] text-[#373737]'> Next</button>
        </div>
      </div>


             </div>
            </div>
        )}
</div>

    </div>
  )
}

export default AdminStrator