import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { FiFilter } from 'react-icons/fi';
import { Table, Select } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import ActionBar from '../components/ActionBar';
import CourseBar from '../components/CourseBar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function CourseList() {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const courses = [
    {
      id: 1,
      title: 'Robotic and Cybersecurity',
      category: 'python',
      instructor: 'Taiwo Ajani',
      start: '12/10/2024',
      end: '12/10/2025',
      status: 'active',
    },
    {
      id: 2,
      title: 'Robotic and Cybersecurity',
      category: 'python',
      instructor: 'Taiwo Ajani',
      start: '12/10/2024',
      end: '12/10/2025',
      status: 'active',
    },
    {
      id: 3,
      title: 'Robotic and Cybersecurity',
      category: 'python',
      instructor: 'Taiwo Ajani',
      start: '12/10/2024',
      end: '12/10/2025',
      status: 'inactive',
    },
    {
      id: 4,
      title: 'Robotic and Cybersecurity',
      category: 'python',
      instructor: 'Taiwo Ajani',
      start: '12/10/2024',
      end: '12/10/2025',
      status: 'active',
    },
    {
      id: 5,
      title: 'Robotic and Cybersecurity',
      category: 'python',
      instructor: 'Taiwo Ajani',
      start: '12/10/2024',
      end: '12/10/2025',
      status: 'active',
    },
    {
      id: 1,
      title: 'Robotic and Cybersecurity',
      category: 'python',
      instructor: 'Taiwo Ajani',
      start: '12/10/2024',
      end: '12/10/2025',
      status: 'inactive',
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

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
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white py-4 shadow-md w-full sticky top-0 z-10'>
        <div className='flex gap-3 items-center px-6'>
          <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
          <h2 className='border-l border-[#71717A] px-3 text-[#71717A]'>
            Course Management
          </h2>
          <IoIosArrowForward className='text-[#71717A]' />
          <h2 className='px-2 font-bold text-[#373737]'>Course List View</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className='p-6 bg-white min-h-screen'>
        <h1 className='text-2xl font-bold text-[#373737] mb-6'>
          Course List View
        </h1>

        {/* Filter Section */}
        <div className='mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
          <div className='flex gap-3 items-center'>
            <Input
              placeholder='Filter by category, instructor, active/inactive...'
              className='w-[400px]'
            />
            <Button variant='outline' className='w-fit flex items-center gap-2'>
              <FiFilter className='w-4 h-4' />
              Filter
            </Button>
          </div>
          <Link to='/Create-Course'>
            <Button variant='default' className='bg-black hover:bg-black/90'>
              New Course
            </Button>
          </Link>
        </div>

        {/* Table Section */}
        <div className='bg-white rounded-lg shadow-sm border border-[#dddddd] overflow-hidden'>
          <Table.Root variant='surface' className='[&_td]:py-4 [&_th]:py-4'>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell className='font-normal'>
                  <input
                    type='checkbox'
                    checked={
                      selectedRows.size === currentCourses.length &&
                      currentCourses.length > 0
                    }
                    onChange={handleSelectAll}
                    className='rounded'
                  />
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  S/N
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Course Title
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Category
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Instructor (s) Assigned
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Start Date
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  End Date
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Status
                </Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell className='font-normal'>
                  Action
                </Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {currentCourses.map((item, index) => (
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
                      {item.title}
                    </Link>
                  </Table.Cell>
                  <Table.Cell>{item.category}</Table.Cell>
                  <Table.Cell>{item.instructor}</Table.Cell>

                  <Table.Cell>{item.start}</Table.Cell>
                  <Table.Cell>{item.end}</Table.Cell>

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
                    <CourseBar />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>

        {/* Pagination Section */}
        <div className='mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-lg'>
          <h4 className='text-[#373737] font-medium'>
            {selectedRows.size} of {courses.length} row(s) selected.
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

export default CourseList;
