import { Box, Progress, Table } from '@radix-ui/themes';
import React from 'react'
import { GoSearch } from "react-icons/go";
import ActionBar from '../components/ActionBar';
function Students() {

        const students=[
        {
            id:1,
            name:"Taiwo Ajani",
            enrollment:"12/10/2023",
            progress:60,
            last:"2 days ago",
        },
         {
            id:2,
            name:"Taiwo Ajani",
            enrollment:"12/10/2023",
            progress:40,
            last:"2 days ago",
        },
         {
            id:3,
            name:"Taiwo Ajani",
            enrollment:"12/10/2023",
            progress:50,
            last:"6 days ago",
        },
         {
            id:5,
            name:"Taiwo Ajani",
            enrollment:"12/10/2023",
            progress:80,
            last:"7 days ago",
        },
    ]
  return (
    <div className='mx-5 bg-white h-screen overflow-y-scroll'>
         <div className='flex gap-3  items-center p-4 w-full bg-[#F3F3F3] rounded-md my-4' >     
           <GoSearch  className='text-2xl'/>
              <input type="text" placeholder='Search for students' className=' w-[300px] outline-none  px-3'/>
         </div>

                  <div className='mt-6 relative'>
                          <Table.Root variant='surface' >
                     <Table.Header>
                         <Table.Row>
                             <Table.ColumnHeaderCell>Student Name</Table.ColumnHeaderCell>
                             <Table.ColumnHeaderCell>Enrollment Date</Table.ColumnHeaderCell>
                             <Table.ColumnHeaderCell>Progress</Table.ColumnHeaderCell>
                             <Table.ColumnHeaderCell>Last Activity</Table.ColumnHeaderCell>
                             <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
                  
                         </Table.Row>
                     </Table.Header>
                  
                    <Table.Body>
                  
                        {students.map((item, index)=>(
                          <Table.Row key={item.id}>    
                          <Table.Cell>             
                             {item.name} 
                            </Table.Cell>
                      
                          <Table.Cell>{item.enrollment}</Table.Cell>
                   
                          <Table.Cell>
                            <Box maxWidth="400px" className='text-red-800'>
                                <div className='flex gap-2 items-center'>

	                           <Progress value={item.progress} color='red'/> <p className='text-sm font'>{item.progress}%</p>
                                </div>
                            </Box>

                          

                          </Table.Cell>
                          <Table.Cell> 
                  
                         
                          <div className='  w-[100px] p-1  rounded'>
                            <p className='text-center text-black '>{item.last}</p>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                         <ActionBar/>
                         
                        </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>
                        </div>
         
         



    </div>
  )
}

export default Students