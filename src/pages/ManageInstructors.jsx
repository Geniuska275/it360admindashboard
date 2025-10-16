
import { Select, Table, TextField } from '@radix-ui/themes'
import React from 'react'
import ActionBar from '../components/ActionBar'
import { IoIosArrowForward } from "react-icons/io";


import { MdOutlineSpaceDashboard } from "react-icons/md";
function ManageInstructors() {

    const instructors=[
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
        name:"John Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"active"
      },
        {
        id:3,
        name:"John Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"active"
      },
        {
        id:4,
        name:"John Eze",
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
          {id:5,
        name:"John Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"deactivated"
      },
                {id:5,
        name:"John Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"deactivated"
      },          {id:5,
        name:"John Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"deactivated"
      },       
         {id:5,
        name:"John Eze",
        country:"Nigeria",
        phone:"+2349056890228",
        img:"https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=",
        Dob:"12/05/2005",
        status:"active"
      },
    ]

  return (

    <div>
      <div className=' bg-white  py-4 shadow-md w-full top-0 sticky z-10'>
            
            <div className='flex gap-3  items-center px-1'>
              <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
              <h2 className='border-l px-2 text-[#71717A]'>User Management </h2>
              <IoIosArrowForward/>
              <h2 className=' px-2 text-[#71717A]'>Manage Instructors</h2>

            </div>
            
          </div>

    <div className='p-4 bg-white flex-1'>
      <h1 className='text-xl font-bold capitalize'>manage instructors</h1>
      <div className='my-5 flex flex-row justify-between items-center '>
        <TextField.Root placeholder="filter name…" className='w-[300px]'>
      
        </TextField.Root>

        <div className='flex items-center gap-2'>
          <Select.Root defaultValue="sort">
         <Select.Trigger />
        <Select.Content>
        <Select.Group>
      <Select.Label>Fruits</Select.Label>
      <Select.Item value="sort">sort</Select.Item>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="grape" disabled>
        Grape
      </Select.Item>
    </Select.Group>
    
    <Select.Group>
      <Select.Label>Vegetables</Select.Label>
      <Select.Item value="carrot">Carrot</Select.Item>
      <Select.Item value="potato">Potato</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>

           <Select.Root defaultValue="filter">
         <Select.Trigger />
        <Select.Content>
        <Select.Group>
      <Select.Label></Select.Label>
      <Select.Item value="filter">sort</Select.Item>
      <Select.Item value="apple">Apple</Select.Item>
      <Select.Item value="grape" disabled>
        Grape
      </Select.Item>
    </Select.Group>
    
    <Select.Group>
      <Select.Label>Vegetables</Select.Label>
      <Select.Item value="carrot">Carrot</Select.Item>
      <Select.Item value="potato">Potato</Select.Item>
    </Select.Group>
  </Select.Content>
</Select.Root>

        </div>


      </div>

      <div className='mt-6 relative'>
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

      {instructors.map((item, index)=>(
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
       <ActionBar type={"instructor"}/>
       
      </Table.Cell>
      </Table.Row>
    ))}
  </Table.Body>
</Table.Root>
     

      </div>
      <div className='my-4 flex justify-between items-center'>
        <h4 className='text-[#373737]'>0 of 1 row(s) selected.</h4>
        <div className='flex gap-3'>
          <button className='border py-2 px-4 rounded border-[#dddddd] text-[#373737]'> Previous</button>
        
         <button className='border py-2 px-4 rounded border-[#dddddd] text-[#373737]'> Next</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ManageInstructors
