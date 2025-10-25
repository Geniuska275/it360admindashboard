import { Separator, Table } from '@radix-ui/themes';
import React, { useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { MdBlockFlipped } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

import { MdOutlineSpaceDashboard } from 'react-icons/md';

function StudentProfile() {
  const [active, setActive] = useState('Profile Details');

  const students = [
    {
      id: 1,
      title: 'Full Stack Development',
      type: 'self-paced',
      price: '$300',
      date: '12/05/2005',
      progress: '50% completed',
    },
    {
      id: 1,
      title: 'Frontend Stack Development',
      type: 'self-paced',
      price: '$100',
      date: '10/05/2005',
      progress: '90% completed',
    },
  ];
  const completed = [
    {
      id: 1,
      title: 'Full Stack Development',
      type: 'self-paced',
      price: '$300',
      date: '12/05/2005',
      progress: '100% completed',
    },
    {
      id: 1,
      title: 'Frontend Stack Development',
      type: 'self-paced',
      price: '$100',
      date: '10/05/2005',
      progress: '100% completed',
    },
    {
      id: 1,
      title: 'Backend Stack Development',
      type: 'instructor-led',
      price: '$100',
      date: '10/05/2005',
      progress: '100% completed',
    },
  ];

  return (
    <div>
      <div className=' bg-white  py-4 shadow-md w-full top-0 sticky z-10'>
        <div className='flex gap-3  items-center px-1'>
          <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
          <h2 className='border-l px-2 text-[#71717A]'>User Management </h2>
          <IoIosArrowForward />
          <Link to='/Manage-Student'>
            <h2 className=' px-2 text-[#71717A]'>Manage Student</h2>
          </Link>
          <IoIosArrowForward />
          <h2 className=' px-2 text-black font-bold'>Benjamin</h2>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex justify-between items-center '>
          <Link to='/Manage-Student'>
            <div className='flex gap-2 items-center'>
              <FaLongArrowAltLeft />
              <h4>Go Back</h4>
            </div>
          </Link>
          {active == 'Ongoing' ? (
            <button className='flex p-2 bg-[#DC2626] rounded text-white items-center gap-1'>
              <MdBlockFlipped className='text-white' />
              De-activate User
            </button>
          ) : (
            <button className='flex p-2 bg-[#01857C] rounded text-white items-center gap-1'>
              <FaCheck />
              Activate User
            </button>
          )}
        </div>

        <div className='bg-white shadow-md p-2 my-5 relative h-[210px]'>
          <div className='grid grid-cols-4 gap-4'>
            <div className=' p-4'>
              <div className='flex gap-3 items-center'>
                <img
                  src='https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=1024x1024&w=is&k=20&c=M4QZ9PB4fVixyNIrWTgJjIQNPgr2TxX1wlYbyRK40dE='
                  className='w-[100px] h-[100px] rounded-full'
                />
                <div>
                  <h1 className='font-bold  '>Benjamin</h1>
                  <p className='text-[12px] text-[#9498A3]'>081092809345</p>
                </div>
              </div>
            </div>
            <div className='p-2 flex items-center gap-10'>
              <Separator my='1' size='4' orientation='vertical' />
              <div>
                <h1 className='font-bold  '>02/02/2024</h1>
                <p className='text-[12px] text-[#9498A3]'>DATE JOINED</p>
              </div>
            </div>
            <div className=' p-2 flex items-center gap-10'>
              <Separator my='1' size='4' orientation='vertical' />
              <div>
                <h1 className='font-bold  '>united kingdom</h1>
                <p className='text-[12px] text-[#9498A3]'>COUNTRY</p>
              </div>
            </div>
            <div className=' p-2 flex items-center gap-10'>
              <Separator my='1' size='4' orientation='vertical' />
              <div>
                <h1 className='font-bold  '>mrs benjamin lauren</h1>
                <p className='text-[12px] text-[#9498A3] uppercase'>
                  parent/guardian name
                </p>
              </div>
            </div>
          </div>
          <div className='mt-4 flex gap-2 py-4 mx-5 absolute'>
            <div>
              <h2
                className={`text-[#9498A3] ${active == 'Profile Details' ? 'text-[#EB5757]' : ''}`}
                onClick={() => setActive('Profile Details')}
              >
                Profile Details
              </h2>
              {active == 'Profile Details' && (
                <p className='px-8 bg-[#EB5757] p-[3px] mt-2 rounded'></p>
              )}
            </div>
            <div>
              <h2
                className={`text-[#9498A3] ${active == 'Ongoing' ? 'text-[#EB5757]' : ''}`}
                onClick={() => setActive('Ongoing')}
              >
                Ongoing Courses
              </h2>
              {active == 'Ongoing' && (
                <p className='px-8 bg-[#EB5757] p-[3px] mt-2 rounded'></p>
              )}
            </div>
            <div>
              <h2
                className={`text-[#9498A3] ${active == 'Completed' ? 'text-[#EB5757]' : ''}`}
                onClick={() => setActive('Completed')}
              >
                Completed Courses
              </h2>
              {active == 'Completed' && (
                <p className='px-8 bg-[#EB5757] p-[3px] mt-2 rounded'></p>
              )}
            </div>
          </div>
        </div>
        {active == 'Profile Details' && (
          <div className='mt-5'>
            <div className='bg-white shadow-md p-4 my-5 rounded-xl '>
              <h1 className='font-bold mx-5 my-3'>Personal Information</h1>
              <div className='grid grid-cols-5 gap-3 mx-5'>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>First name</h2>
                  <p className='text-[12px] font-bold text-black'>Benjamin</p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>last Name</h2>
                  <p className='text-[12px] font-bold text-black'>Jones</p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>Phone number</h2>
                  <p className='text-[12px] font-bold text-black'>
                    090111789028
                  </p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>email address</h2>
                  <p className='text-[12px] font-bold text-black'>
                    example@gmail.com
                  </p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>gender</h2>
                  <p className='text-[12px] font-bold text-black'>male</p>
                </div>
              </div>

              <div className='grid grid-cols-5 gap-3 mx-5 my-5'>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>DOB</h2>
                  <p className='text-[12px] font-bold text-black'>
                    June 20,2025
                  </p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>location</h2>
                  <p className='text-[12px] font-bold text-black'>Oyo,Ibadan</p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>Home address</h2>
                  <p className='text-[12px] font-bold text-black'>
                    No 3 meridian street
                  </p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>Current school</h2>
                  <p className='text-[12px] font-bold text-black'>
                    divine love grammer school
                  </p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>class/grade</h2>
                  <p className='text-[12px] font-bold text-black'>Jss 1</p>
                </div>
              </div>
            </div>

            <div className='bg-white shadow-md p-4 my-5 rounded-xl '>
              <h1 className='font-bold mx-5 my-3'>
                Guadian/parent Information
              </h1>
              <div className='grid grid-cols-5 gap-3 mx-5'>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>First name</h2>
                  <p className='text-[12px] font-bold text-black'>Benjamin</p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>last Name</h2>
                  <p className='text-[12px] font-bold text-black'>Jones</p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>Phone number</h2>
                  <p className='text-[12px] font-bold text-black'>
                    090111789028
                  </p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>email address</h2>
                  <p className='text-[12px] font-bold text-black'>
                    example@gmail.com
                  </p>
                </div>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>location</h2>
                  <p className='text-[12px] font-bold text-black'>Oyo,state</p>
                </div>
              </div>

              <div className='grid grid-cols-5 gap-3 mx-5 my-5'>
                <div>
                  <h2 className=' text-[#9498A3] uppercase '>relationship</h2>
                  <p className='text-[12px] font-bold text-black'>mother</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {active == 'Ongoing' && (
          <div className='p-2 bg-white shadow'>
            <Table.Root variant='surface'>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Course Title</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    Course Progress
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Course Type</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Purchase Date</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Course Price</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {students.map((item, index) => (
                  <Table.Row key={item.id}>
                    <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
                    <Table.Cell>
                      <div className='flex gap-2 items-center'>
                        <span>{item.title}</span>
                      </div>
                    </Table.Cell>
                    <Table.Cell>{item.progress}</Table.Cell>
                    <Table.Cell>{item.type}</Table.Cell>

                    <Table.Cell>{item.date}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </div>
        )}
        {active == 'Completed' && (
          <div className='p-2 bg-white shadow'>
            <Table.Root variant='surface'>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Course Title</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>
                    Course Progress
                  </Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Course Type</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Purchase Date</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Course Price</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {completed.map((item, index) => (
                  <Table.Row key={item.id}>
                    <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
                    <Table.Cell>
                      <div className='flex gap-2 items-center'>
                        <span>{item.title}</span>
                      </div>
                    </Table.Cell>
                    <Table.Cell>{item.progress}</Table.Cell>
                    <Table.Cell>{item.type}</Table.Cell>

                    <Table.Cell>{item.date}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentProfile;
