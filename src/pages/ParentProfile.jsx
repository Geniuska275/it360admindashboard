import { AlertDialog, Separator, Table } from '@radix-ui/themes';
import React, { useState } from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';
import { Link, Links } from 'react-router-dom';
import { MdBlockFlipped } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

import { IoCloseCircleSharp } from 'react-icons/io5';
import { CgAsterisk } from 'react-icons/cg';

import { MdOutlineSpaceDashboard } from 'react-icons/md';

function ParentProfile() {
  const [active, setActive] = useState('Profile Details');

  const students = [
    {
      id: 1,
      title: 'Full Stack Development',
      type: 'self-paced',
      price: '$300',
      date: '12/05/2005',
      progress: '50% completed',
      child: 'Emma Jones',
    },
    {
      id: 1,
      title: 'Frontend Stack Development',
      type: 'self-paced',
      price: '$100',
      date: '10/05/2005',
      progress: '90% completed',
      child: 'Peter Jones',
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
      child: 'Emma Jones',
    },
    {
      id: 1,
      title: 'Frontend Stack Development',
      type: 'self-paced',
      price: '$100',
      date: '10/05/2005',
      progress: '100% completed',
      child: 'Paul Jones',
    },
    {
      id: 1,
      title: 'Backend Stack Development',
      type: 'instructor-led',
      price: '$100',
      date: '10/05/2005',
      progress: '100% completed',
      child: 'Peter Jones',
    },
  ];

  return (
    <div>
      <div className=' bg-white  py-4 shadow-md w-full top-0 sticky z-10'>
        <div className='flex gap-3  items-center px-1'>
          <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
          <h2 className='border-l px-2 text-[#71717A]'>User Management </h2>
          <IoIosArrowForward />
          <Link to='/Manage-Parent'>
            <h2 className=' px-2 text-[#71717A]'>Manage Parent</h2>
          </Link>
          <IoIosArrowForward />
          <h2 className=' px-2 text-black font-bold'>Tijani</h2>
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
          {active == 'Parent' ? (
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <button className='flex p-2 bg-[#DC2626] rounded text-white items-center gap-1'>
                  <MdBlockFlipped className='text-white' />
                  De-activate Parent
                </button>
              </AlertDialog.Trigger>
              <AlertDialog.Content maxWidth='800px' maxHeight='450px'>
                <div className='flex justify-between items-center mx-5'>
                  <h2 className='font-bold'>
                    Are you sure you want to deactivate this Parent?
                  </h2>
                 
                </div>
                <h3 className='text-md mx-5'>
                  This will restrict their access to all courses and features
                  until reactivated.
                </h3>

                <div className='flex gap-2 mt-2 ml-[500px]'>
                  <AlertDialog.Cancel>

                  <button className='border py-2 px-4 rounded-xl border-[#dddddd] text-[#373737]'>
                    {' '}
                    Cancel
                  </button>
                  </AlertDialog.Cancel>

                  <button className='border  bg-black py-2 px-4 rounded-xl border-[#dddddd] text-white'>
                    {' '}
                    Deactivate
                  </button>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Root>
          ) : (
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <button className='flex p-2 bg-[#01857C] rounded text-white items-center gap-1'>
                  <FaCheck />
                  Activate Parent
                </button>
              </AlertDialog.Trigger>
              <AlertDialog.Content maxWidth='800px' maxHeight='450px'>
                <div className='flex justify-between items-center mx-5'>
                  <h2 className='font-bold'>
                    Are you sure you want to activate this Parent?
                  </h2>
                 
                </div>
                <h3 className='text-md mx-5'>
                  This will give access to all courses and features until
                  reactivated.
                </h3>

                <div className='flex gap-2 mt-2 ml-[500px]'>
                  <AlertDialog.Cancel>
                  <button className='border py-2 px-4 rounded-xl border-[#dddddd] text-[#373737]'>
                    {' '}
                    Cancel
                  </button>
                  </AlertDialog.Cancel>

                  <button className='border  bg-black py-2 px-4 rounded-xl border-[#dddddd] text-white'>
                    {' '}
                    activate
                  </button>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Root>
          )}
        </div>

        <div className='bg-white shadow-md p-2 my-5 relative h-[210px]'>
          <div className='grid grid-cols-4 gap-4'>
            <div className=' p-4'>
              <div className='flex gap-3 items-center'>
                <img
                  src='https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwcHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500'
                  className='w-[100px] h-[100px] rounded-full cover'
                />
                <div>
                  <h1 className='font-bold uppercase '>Tijani Jones</h1>
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
                <h1 className='font-bold  '>3</h1>
                <p className='text-[12px] text-[#9498A3] uppercase'>
                  NO OF CHILDREN
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
                className={`text-[#9498A3] ${active == 'Parent' ? 'text-[#EB5757]' : ''}`}
                onClick={() => setActive('Parent')}
              >
                Parent-Child Profiles
              </h2>
              {active == 'Parent' && (
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
                  <p className='text-[12px] font-bold text-black'>Tijani</p>
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
                  <p className='text-[12px] font-bold text-black'>female</p>
                </div>
              </div>

              <div className='grid grid-cols-5 gap-3 mx-5 my-5'>
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
        {active == 'Parent' && (
          <div className='p-2 bg-white shadow'>
            <Table.Root variant='surface'>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>S/N</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Course Title</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Child's Name</Table.ColumnHeaderCell>

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
                    <Table.Cell>{item.child}</Table.Cell>

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

export default ParentProfile;
