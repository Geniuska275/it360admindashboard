import React from 'react'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Select, Table, TextField } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import ActionBar from '../components/ActionBar';
import CourseBar from '../components/CourseBar';

function CourseList() {


   const courses=[
       {
        id:1,
        title:"Robotic and Cybersecurity",
        category:"python",
        instructor:"Taiwo Ajani",
        start:"12/10/2024",
        end:"12/10/2025",
        status:"active"
       },
        {
        id:2,
        title:"Robotic and Cybersecurity",
        category:"python",
        instructor:"Taiwo Ajani",
        start:"12/10/2024",
        end:"12/10/2025",
        status:"active"
       },
        {
        id:3,
        title:"Robotic and Cybersecurity",
        category:"python",
        instructor:"Taiwo Ajani",
        start:"12/10/2024",
        end:"12/10/2025",
        status:"inactive"
       },
        {
        id:4,
        title:"Robotic and Cybersecurity",
        category:"python",
        instructor:"Taiwo Ajani",
        start:"12/10/2024",
        end:"12/10/2025",
        status:"active"
       },
        {
        id:5,
        title:"Robotic and Cybersecurity",
        category:"python",
        instructor:"Taiwo Ajani",
        start:"12/10/2024",
        end:"12/10/2025",
        status:"active"
       },
        {
        id:1,
        title:"Robotic and Cybersecurity",
        category:"python",
        instructor:"Taiwo Ajani",
        start:"12/10/2024",
        end:"12/10/2025",
        status:"inactive"
       },
    ]
  return (
    <div>
           <div className='flex-1  bg-white  py-4 shadow-md w-full top-0 sticky z-10'>        
                  <div className='flex gap-3  items-center px-1'>
                    <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
                    <h2 className='border-l px-2 text-[#71717A]'>Course Management </h2>
                    <IoIosArrowForward/>
                    <h2 className=' px-2  font-bold'>Course List View</h2>
                  </div>  
                </div>
              <div className='p-5 bg-white h-screen overflow-y-scroll'>
                <h1 className='font-bold'>Course List View </h1>
                <div className='my-5 flex flex-row justify-between items-center '>
                       <div className='flex gap-1'>
                        <TextField.Root placeholder="filter name…" className='w-[300px]'>
                          
                        </TextField.Root>
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
                

                        </div>
                            <Link to="/Create-Course">
                                <button className='border  bg-black py-2 px-4 rounded-xl border-[#dddddd] text-white'> New Course</button>
                            </Link>
                      </div>





              <div className='mt-6 relative'>
        <Table.Root variant="surface">
	<Table.Header>
		<Table.Row>
			<Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Course Title</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Category</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Instructor (s) Assigned</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Start Date</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>End Date</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
			<Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>

		</Table.Row>
	</Table.Header>

  <Table.Body>

      {courses.map((item, index)=>(
        <Table.Row key={item.id}> 
        <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
        <Table.Cell>
          
          {item.title}
            
          </Table.Cell>
        <Table.Cell>{item.category}</Table.Cell>
        <Table.Cell>{item.instructor}</Table.Cell>
 
        <Table.Cell>{item.start}</Table.Cell>
        <Table.Cell>{item.end}</Table.Cell>

        <Table.Cell> 

          {item.status=="active" ?
        <div className=' bg-[#009B4D1A] w-[100px] p-1  rounded-3xl'>
          <p className='text-center text-[#01857C] '>{item.status}</p>
        </div>:<div className='bg-red-300  w-[100px] p-1  rounded-3xl'>
          <p className='text-center text-[#FF0000] '>{item.status}</p>
        </div>}
      </Table.Cell>
      <Table.Cell>
        <CourseBar/>
       
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

export default CourseList