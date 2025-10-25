import { AlertDialog, Select, Table, TextField } from '@radix-ui/themes';
import React from 'react';
import ActionBar from '../components/ActionBar';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa6';
import { IoCloseCircleSharp } from 'react-icons/io5';

import { TbEyeStar } from 'react-icons/tb';
import { CiEdit } from 'react-icons/ci';
import { MdBlockFlipped } from 'react-icons/md';
import { Button, Flex } from '@radix-ui/themes';

import { CgAsterisk } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa6';
import { IoCameraOutline } from 'react-icons/io5';

import { MdOutlineSpaceDashboard } from 'react-icons/md';
import ActionBars from '../components/ActionBars';
function Administrators() {
  const instructors = [
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
      status: 'restricted',
    },
  ];

  return (
    <div className='flex-1'>
      <div className='flex-1  bg-white  py-4 shadow-md w-full top-0 sticky z-10'>
        <div className='flex gap-3  items-center px-1'>
          <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
          <h2 className='border-l px-2 text-[#71717A]'>User Management </h2>
          <IoIosArrowForward />
          <h2 className=' px-2 text-[#71717A]'>Administrators</h2>
        </div>
      </div>

      <div className='p-4 bg-white flex-1'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-bold capitalize'>Administrators</h1>
          <AlertDialog.Root>
            <AlertDialog.Trigger>
              <button className='flex p-2 bg-[#01857C] rounded text-white items-center gap-1'>
                <FaPlus />
                create Admin
              </button>
            </AlertDialog.Trigger>

            <AlertDialog.Content maxWidth='900px' maxHeight='650px'>
              <div className='flex justify-between items-center mx-5 relative'>
                <h2 className='font-bold'>Create Admin </h2>
                <AlertDialog.Cancel>
                  <IoCloseCircleSharp className='text-xl' />
                </AlertDialog.Cancel>
              </div>

              <div className='flex justify-center items-center'>
                <form className='w-[800px] h-[500px]   p-2 rounded border border-[#dddddd] mx-5 my-3'>
                  <div className='flex justify-center items-center mb-4 relative'>
                    <div className='bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center'>
                      <FaUser className='text-white w-12 h-12' />
                    </div>
                    <div className='bg-[#01857C] w-8 h-8 rounded-full flex justify-center items-center absolute top-[50px] right-[290px] border border-white text-white'>
                      <IoCameraOutline />
                    </div>
                  </div>
                  <div>
                    <h1 className='text-black font-bold text-center'>
                      {' '}
                      Upload profile photo
                    </h1>
                    <p className='text-center text-md'>
                      {' '}
                      drag and drop a photo here or upload photo
                    </p>
                    <p className='text-center text-[#727C87] text-sm'>
                      {' '}
                      PNG, JPEG (Max: 10mb)
                    </p>
                  </div>

                  <div className='flex justify-between items-center gap-2'>
                    <div className=''>
                      <div className=''>
                        <div className='flex gap-1 items-center'>
                          <h2 className='font-bold text-sm text-[#373737]'>
                            FirstName
                          </h2>
                          <CgAsterisk className='text-red-600' />
                        </div>
                        <input
                          placeholder='Enter Firstname...'
                          className='border border-[#dddddd] py-1 text-md rounded w-[350px] p-2'
                        />
                      </div>
                      <div className='mb-1'>
                        <div className='flex gap-1 items-center'>
                          <h2 className='font-bold text-sm text-[#373737]'>
                            Email Address
                          </h2>
                          <CgAsterisk className='text-red-600' />
                        </div>
                        <input className='border border-[#dddddd] py-1  rounded  w-[350px] p-2' />
                      </div>
                      <div className='mb-1'>
                        <div className='flex gap-1 items-center'>
                          <h2 className='font-bold text-sm text-[#373737]'>
                            Date of Birth
                          </h2>
                          <CgAsterisk className='text-red-600' />
                        </div>
                        <input className='border border-[#dddddd] py-1  rounded rounded w-[350px] p-2' />
                      </div>
                      <div className='mb-1'>
                        <div className='flex gap-1 items-center'>
                          <h2 className='font-bold text-sm text-[#373737]'>
                            Nationality
                          </h2>
                          <CgAsterisk className='text-red-600' />
                        </div>
                        <input className='border border-[#dddddd] py-1  rounded rounded w-[350px] p-2' />
                      </div>
                    </div>

                    <div>
                      <div className='my-1'>
                        <div className='flex gap-1 items-center'>
                          <h2 className='font-bold text-sm text-[#373737]'>
                            Last Name
                          </h2>
                          <CgAsterisk className='text-red-600' />
                        </div>
                        <input className='border border-[#dddddd] py-1 rounded w-[350px] p-2' />
                      </div>
                      <div className='my-1'>
                        <div className='flex gap-1 items-center'>
                          <h2 className='font-bold text-sm text-[#373737]'>
                            Phone Number
                          </h2>
                          <CgAsterisk className='text-red-600' />
                        </div>
                        <input className='border border-[#dddddd] py-1 rounded rounded w-[350px] p-2' />
                      </div>
                      <div className='my-1'>
                        <div className='flex gap-1 items-center'>
                          <h2 className='font-bold text-sm text-[#373737]'>
                            Gender
                          </h2>
                          <CgAsterisk className='text-red-600' />
                        </div>
                        {/* <input className='border border-[#dddddd] py-1 rounded px-[50px]'/> */}
                        <Select.Root
                          defaultValue='male'
                          className='border border-[#dddddd] py-1 rounded w-[300px]'
                        >
                          <Select.Trigger />
                          <Select.Content>
                            <Select.Group>
                              <Select.Label>select Gender</Select.Label>
                              <Select.Item value='male'>male</Select.Item>
                              <Select.Item value='female'>female</Select.Item>
                            </Select.Group>
                          </Select.Content>
                        </Select.Root>
                      </div>
                      <div className='my-1'>
                        <div className='flex gap-1 items-center'>
                          <h2 className='font-bold text-sm text-[#373737]'>
                            Marital Status
                          </h2>
                          <CgAsterisk className='text-red-600' />
                        </div>
                        <Select.Root
                          defaultValue='married'
                          className='border border-[#dddddd] py-1 rounded w-[300px]'
                        >
                          <Select.Trigger />
                          <Select.Content>
                            <Select.Group>
                              <Select.Label>Status</Select.Label>
                              <Select.Item value='single'>single</Select.Item>
                              <Select.Item value='married'>married</Select.Item>
                            </Select.Group>
                          </Select.Content>
                        </Select.Root>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-2 mt-2 ml-[500px]'>
                    <button className='border py-2 px-4 rounded-xl border-[#dddddd] text-[#373737]'>
                      {' '}
                      Cancel
                    </button>

                    <button className='border  bg-black py-2 px-4 rounded-xl border-[#dddddd] text-white'>
                      {' '}
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </AlertDialog.Content>
          </AlertDialog.Root>
        </div>
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

        <div className='mt-6 relative'>
          <Table.Root variant='surface'>
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
              {instructors.map((item, index) => (
                <Table.Row key={item.id}>
                  <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
                  <Table.Cell>
                    <div className='flex gap-2 items-center'>
                      <img src={item.img} className='w-8 h-8 rounded-full' />
                      <span>{item.name}</span>
                    </div>
                  </Table.Cell>
                  <Table.Cell>{item.country}</Table.Cell>
                  <Table.Cell>{item.Dob}</Table.Cell>

                  <Table.Cell>{item.phone}</Table.Cell>
                  <Table.Cell>
                    {item.status == 'active' ? (
                      <div className=' bg-[#009B4D1A] w-[100px] p-1  rounded-3xl'>
                        <p className='text-center text-[#01857C] '>
                          {item.status}
                        </p>
                      </div>
                    ) : (
                      <div className='bg-red-300  w-[100px] p-1  rounded-3xl'>
                        <p className='text-center text-[#FF0000] '>
                          {item.status}
                        </p>
                      </div>
                    )}
                  </Table.Cell>
                  <Table.Cell>
                    <ActionBars type={'Admin'} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>
        <div className='my-4 flex justify-between items-center'>
          <h4 className='text-[#373737]'>0 of 1 row(s) selected.</h4>
          <div className='flex gap-3'>
            <button className='border py-2 px-4 rounded border-[#dddddd] text-[#373737]'>
              {' '}
              Previous
            </button>

            <button className='border py-2 px-4 rounded border-[#dddddd] text-[#373737]'>
              {' '}
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Administrators;
