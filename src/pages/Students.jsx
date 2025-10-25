import { Box, Table } from '@radix-ui/themes';
import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import ActionBar from '../components/ActionBar';
import { Button } from '@/components/ui/button';
import ProgressBar from '../components/ui/progress-bar';

function Students() {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const students = [
    {
      id: 1,
      name: 'Taiwo Ajani',
      enrollment: '12/10/2023',
      progress: 60,
      last: '2 days ago',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      enrollment: '12/10/2023',
      progress: 40,
      last: '2 days ago',
    },
    {
      id: 3,
      name: 'Michael Brown',
      enrollment: '12/10/2023',
      progress: 50,
      last: '6 days ago',
    },
    {
      id: 4,
      name: 'Emily Davis',
      enrollment: '12/10/2023',
      progress: 80,
      last: '7 days ago',
    },
    {
      id: 5,
      name: 'David Wilson',
      enrollment: '12/10/2023',
      progress: 75,
      last: '1 day ago',
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentStudents = students.slice(startIndex, endIndex);

  // Row selection handlers
  const handleSelectRow = studentId => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(studentId)) {
      newSelected.delete(studentId);
    } else {
      newSelected.add(studentId);
    }
    setSelectedRows(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedRows.size === currentStudents.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentStudents.map(student => student.id)));
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
    <div className='mx-5 bg-white h-screen overflow-y-scroll'>
      <div className='flex gap-3 items-center p-4 w-full bg-[#F3F3F3] rounded-md my-4'>
        <GoSearch className='text-2xl' />
        <input
          type='text'
          placeholder='Search for students'
          className='w-[300px] outline-none px-3'
        />
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
                    selectedRows.size === currentStudents.length &&
                    currentStudents.length > 0
                  }
                  onChange={handleSelectAll}
                  className='rounded'
                />
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='font-normal'>
                S/N
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='font-normal'>
                Student Name
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='font-normal'>
                Enrollment Date
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='font-normal'>
                Progress
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='font-normal'>
                Last Activity
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell className='font-normal'>
                Action
              </Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {currentStudents.map((item, index) => (
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
                  <div className='flex gap-2 items-center'>
                    <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center'>
                      <span className='text-sm font-medium text-gray-600'>
                        {item.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className='font-medium'>{item.name}</span>
                  </div>
                </Table.Cell>
                <Table.Cell>{item.enrollment}</Table.Cell>
                <Table.Cell>
                  <Box maxWidth='400px'>
                    <ProgressBar 
                      value={item.progress}
                      variant="simple"
                      height="h-1"
                      fillColor="bg-red-500"
                    />
                  </Box>
                </Table.Cell>
                <Table.Cell>
                  <div className='w-[100px] p-1 rounded'>
                    <p className='text-center text-gray-600 text-sm'>{item.last}</p>
                  </div>
                </Table.Cell>
                <Table.Cell>
                  <ActionBar student={item} />
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
        <div className='flex gap-3'>
          <Button
            variant='outline'
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className='border-[#dddddd] text-[#373737] hover:bg-gray-50'
          >
            Previous
          </Button>
          <Button
            variant='outline'
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className='border-[#dddddd] text-[#373737] hover:bg-gray-50'
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Students;
