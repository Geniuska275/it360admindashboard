import { Select, Table, TextField } from '@radix-ui/themes';
import React, { useState } from 'react';
import ActionBar from '../components/ActionBar';
import { IoIosArrowForward } from 'react-icons/io';

import { MdOutlineSpaceDashboard } from 'react-icons/md';
import ActionBars from '../components/ActionBars';
import { Link } from 'react-router-dom';
import CourseBar from '@/components/CourseBar';
import { useState } from 'react';
import { Button } from '@/components/ui/button';



function ManageParents() {
  const [selectedRows, setSelectedRows] = useState(new Set());
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 2;
  const students = [
    {
      id: 1,
      name: 'John Eze',
      country: 'Nigeria',
      phone: '+2349056890228',
      img: 'https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=',
      Dob: '12/05/2005',
      status: 'active',
    },
    {
      id: 2,
      name: 'John Eze',
      country: 'Nigeria',
      phone: '+2349056890228',
      img: 'https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=',
      Dob: '12/05/2005',
      status: 'active',
    },
    {
      id: 3,
      name: 'John Eze',
      country: 'Nigeria',
      phone: '+2349056890228',
      img: 'https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=',
      Dob: '12/05/2005',
      status: 'active',
    },
    {
      id: 4,
      name: 'John Eze',
      country: 'Nigeria',
      phone: '+2349056890228',
      img: 'https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=',
      Dob: '12/05/2005',
      status: 'active',
    },
    {
      id: 5,
      name: 'John Eze',
      country: 'Nigeria',
      phone: '+2349056890228',
      img: 'https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=',
      Dob: '12/05/2005',
      status: 'deactivated',
    },
    {
      id: 5,
      name: 'John Eze',
      country: 'Nigeria',
      phone: '+2349056890228',
      img: 'https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=',
      Dob: '12/05/2005',
      status: 'deactivated',
    },
    {
      id: 5,
      name: 'John Eze',
      country: 'Nigeria',
      phone: '+2349056890228',
      img: 'https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=',
      Dob: '12/05/2005',
      status: 'deactivated',
    },
    {
      id: 5,
      name: 'John Eze',
      country: 'Nigeria',
      phone: '+2349056890228',
      img: 'https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=',
      Dob: '12/05/2005',
      status: 'deactivated',
    },
    {
      id: 5,
      name: 'John Eze',
      country: 'Nigeria',
      phone: '+2349056890228',
      img: 'https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE=',
      Dob: '12/05/2005',
      status: 'active',
    },
  ];

    // Pagination logic
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = students.slice(startIndex, endIndex);

  // Row selection handlers
  const handleSelectRow = courseId => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(courseId)) {
      newSelected.delete(courseId);
    } else {
      newSelected.add(courseId);
    }
    setSelectedRows(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === currentCourses.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentCourses.map(course => course.id)));
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  return (
    <div>
      <div className=' bg-white  py-4 shadow-md w-full top-0 sticky z-10'>
        <div className='flex gap-3  items-center px-1'>
          <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
          <Link to='/'>
            <h2 className='border-l px-2 text-[#71717A]'>User Management </h2>
          </Link>
          <IoIosArrowForward />
          <h2 className=' px-2 text-[#71717A]'>Manage Parent</h2>
        </div>
      </div>

      <div className='p-4 bg-white flex-1'>
        <h1 className='text-xl font-bold capitalize'>manage parents</h1>
        <div className='my-5 flex flex-row justify-between items-center '>
          <TextField.Root
            placeholder='filter name…'
            className='w-[300px]'
          ></TextField.Root>

          <div className='flex items-center gap-2'>
            <Select.Root defaultValue='sort'>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Label>Fruits</Select.Label>
                  <Select.Item value='sort'>sort</Select.Item>
                  <Select.Item value='apple'>Apple</Select.Item>
                  <Select.Item value='grape' disabled>
                    Grape
                  </Select.Item>
                </Select.Group>

                <Select.Group>
                  <Select.Label>Vegetables</Select.Label>
                  <Select.Item value='carrot'>Carrot</Select.Item>
                  <Select.Item value='potato'>Potato</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>

            <Select.Root defaultValue='filter'>
              <Select.Trigger />
              <Select.Content>
                <Select.Group>
                  <Select.Label></Select.Label>
                  <Select.Item value='filter'>sort</Select.Item>
                  <Select.Item value='apple'>Apple</Select.Item>
                  <Select.Item value='grape' disabled>
                    Grape
                  </Select.Item>
                </Select.Group>

                <Select.Group>
                  <Select.Label>Vegetables</Select.Label>
                  <Select.Item value='carrot'>Carrot</Select.Item>
                  <Select.Item value='potato'>Potato</Select.Item>
                </Select.Group>
              </Select.Content>
            </Select.Root>
          </div>
        </div>
<<<<<<< HEAD
        {/* Table Section */}
        <div className='bg-white rounded-lg shadow-sm border border-[#dddddd] overflow-hidden'>
=======

       



               <div className='bg-white rounded-lg shadow-sm border border-[#dddddd] overflow-hidden'>
>>>>>>> 39ea2f7d49f2ac1791ff133a9ceab7980f35909f
          <Table.Root variant='surface' className='[&_td]:py-4 [&_th]:py-4'>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell className='font-normal'>
                  <input
                    type='checkbox'
                    checked={
<<<<<<< HEAD
                      selectedRows.size === currentCourses.length &&
                      currentCourses.length > 0
=======
                      selectedRows.size === students.length &&
                      students.length > 0
>>>>>>> 39ea2f7d49f2ac1791ff133a9ceab7980f35909f
                    }
                    onChange={handleSelectAll}
                    className='rounded'
                  />
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  S/N
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
<<<<<<< HEAD
                  Full Name
=======
                  FullName
>>>>>>> 39ea2f7d49f2ac1791ff133a9ceab7980f35909f
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Country
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
<<<<<<< HEAD
                  Dob
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Phone Number
                </Table.ColumnHeaderCell>
               
=======
                DOB
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Phone NO
                </Table.ColumnHeaderCell>
>>>>>>> 39ea2f7d49f2ac1791ff133a9ceab7980f35909f
                <Table.ColumnHeaderCell className='font-normal'>
                  Status
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Action
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {students.map((item, index) => (
                <Table.Row key={item.id}>
                  <Table.Cell>
                    <input
                      type='checkbox'
                      checked={selectedRows.has(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                      className='rounded'
                    />
                  </Table.Cell>
                  <Table.RowHeaderCell>
                    {startIndex + index + 1}
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Link
                      to='/Course'
                      className='text-[#FF6500] hover:text-[#FF6500]/80 hover:underline cursor-pointer'
                    >
                      {item.name}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{item.country}</Table.Cell>
                  <Table.Cell>{item.Dob}</Table.Cell>

                 
                  <Table.Cell>{item.phone}</Table.Cell>

                  <Table.Cell>
                    {item.status == 'active' ? (
                      <div className=' bg-[#009B4D1A] w-[100px] p-1  rounded-3xl'>
                        <p className='text-center text-[#01857C] capitalize'>
                          {item.status}
                        </p>
                      </div>
                    ) : (
                      <div className='bg-red-300  w-[100px] p-1  rounded-3xl'>
                        <p className='text-center text-[#FF0000] capitalize'>
                          {item.status}
                        </p>
                      </div>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <ActionBars/>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>

        {/* Pagination Section */}
        <div className='mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-lg'>
          <h4 className='text-[#373737] font-medium'>
            {selectedRows.size} of {students.length} row(s) selected.
          </h4>
          <div className='flex gap-3 items-center'>
            <span className='text-sm text-[#373737]'>
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant='outline'
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              variant='outline'
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ManageParents;
