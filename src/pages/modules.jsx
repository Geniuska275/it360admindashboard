import React from 'react'
import lg from "./strategy.png"
import { Table } from '@radix-ui/themes'
import ActionBar from '../components/ActionBar'

function Modules() {

    const students=[
      {
        id:1,
        title:"Setting Up Your Development Environment",
        type:"Video",
        duration:"10min",
        status:"published"
      },
        {
            id:2,
        title:"Setting Up Your Development Environment",
        type:"Video",
        duration:"10min",
        status:"published"
       
      },
        {
       id:3,
        title:"Setting Up Your Development Environment",
        type:"Video",
        duration:"10min",
        status:"published"
      },
        {
        id:4,
        title:"Setting Up Your Development Environment",
        type:"Video",
        duration:"10min",
        status:"Draft"
      },
          
         {id:5,
        title:"Setting Up Your Development Environment",
        type:"Video",
        duration:"10min",
        status:"published"
      },
    ]


  return (
    <div className='mx-5 bg-white h-screen overflow-y-scroll'>
        <div>  
        <h1 className='text-[30px] mt-2 font-bold'> Module 1: Asynchronous  Programming</h1>
        <p>manage the lessons within this module. and new lessons or edit existing ones to enhance the learning experience</p>
        <button className='border my-2 bg-[#2F80ED] py-2 px-4 rounded-xl border-[#dddddd] text-white'> Add Lesson</button>
        </div>

         <div className='mt-6 relative'>
                 <Table.Root >
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Lesson Title</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Lesson Type</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Duration</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
         
                </Table.Row>
            </Table.Header>
         
           <Table.Body>
         
               {students.map((item, index)=>(
                 <Table.Row key={item.id}>    
                 <Table.Cell>             
                   Lessson {index + 1}: {item.title} 
                   </Table.Cell>
             
                 <Table.Cell>{item.type}</Table.Cell>
          
                 <Table.Cell>{item.duration}</Table.Cell>
                 <Table.Cell> 
         
                
                 <div className=' bg-[#F3F3F3] w-[100px] p-1  rounded'>
                   <p className='text-center text-black '>{item.status}</p>
                 </div>
               </Table.Cell>
               <Table.Cell>
                 <div className='flex gap-2'>
                    <button className=' py-2 px-4 rounded-xl border-[#dddddd] text-black'> Edit</button>
                    <button className=' py-2 px-4 rounded-xl border-[#dddddd] text-red-800'> Delete</button>
                 </div>
                
               </Table.Cell>
               </Table.Row>
             ))}
           </Table.Body>
         </Table.Root>
               </div>



                 <div className='my-2'>  
        <h1 className='text-[30px] mt-2 font-bold'> Module 2: Asynchronous  Programming</h1>
        <p>manage the lessons within this module. and new lessons or edit existing ones to enhance the learning experience</p>
        <button className='border  bg-[#2F80ED] py-2 px-4 rounded-xl border-[#dddddd] text-white'> Add Lesson</button>
        </div>

         <div className='mt-6 relative'>
                 <Table.Root >
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeaderCell>Lesson Title</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Lesson Type</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Duration</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
         
                </Table.Row>
            </Table.Header>
         
           <Table.Body>
         
               {students.map((item, index)=>(
                 <Table.Row key={item.id}>    
                 <Table.Cell>             
                   Lessson {index + 1}: {item.title} 
                   </Table.Cell>
             
                 <Table.Cell>{item.type}</Table.Cell>
          
                 <Table.Cell>{item.duration}</Table.Cell>
                 <Table.Cell> 
         
                
                 <div className=' bg-[#F3F3F3] w-[100px] p-1  rounded'>
                   <p className='text-center text-black '>{item.status}</p>
                 </div>
               </Table.Cell>
               <Table.Cell>
                 <div className='flex gap-2'>
                    <button className=' py-2 px-4 rounded-xl border-[#dddddd] text-black'> Edit</button>
                    <button className=' py-2 px-4 rounded-xl border-[#dddddd] text-red-800'> Delete</button>
                 </div>
                
               </Table.Cell>
               </Table.Row>
             ))}
           </Table.Body>
         </Table.Root>
               </div>


      

    </div>
  )
}

export default Modules