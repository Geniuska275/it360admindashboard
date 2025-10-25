import React from 'react';
import Buttons from './Buttons';
import Card from './Shared/Cards';
import { BsCashCoin } from 'react-icons/bs';
import { IoMdBook } from 'react-icons/io';
import { MdOutlineSell } from 'react-icons/md';
import { PiGraduationCapDuotone } from 'react-icons/pi';
import CourseChart from './Shared/CourseChart';
import Example from './Shared/Example';
import { FaStar } from 'react-icons/fa6';
import Header from './Header';

function Dashboard() {
  const courses = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1759221784201-87893f58b71a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
      rating: '5.8',
      amt: '#300,000',
      name: 'henry jones',
      total: '4,000',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1759221784201-87893f58b71a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
      rating: '5.8',
      amt: '#300,000',
      name: 'henry jones',
      total: '4,000',
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1759221784201-87893f58b71a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
      rating: '5.8',
      amt: '#300,000',
      name: 'henry jones',
      total: '4,000',
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1759221784201-87893f58b71a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
      rating: '5.8',
      amt: '#300,000',
      name: 'henry jones',
      total: '4,000',
    },
  ];

  const activities = [
    {
      id: 1,
      icon: (
        <PiGraduationCapDuotone
          style={{
            color: '#EB5757',
          }}
        />
      ),
      time: 'Friday 11:10pm',
      title: 'John Doe enrolled in “Python for B...',
    },
    {
      id: 1,
      icon: (
        <PiGraduationCapDuotone
          style={{
            color: '#EB5757',
          }}
        />
      ),
      time: 'Friday 11:10pm',
      title: 'John Doe enrolled in “Python for B...',
    },
    {
      id: 1,
      icon: (
        <PiGraduationCapDuotone
          style={{
            color: '#EB5757',
          }}
        />
      ),
      time: 'Friday 11:10pm',
      title: 'John Doe enrolled in “Python for B...',
    },
    {
      id: 1,
      icon: (
        <PiGraduationCapDuotone
          style={{
            color: '#EB5757',
          }}
        />
      ),
      time: 'Friday 11:10pm',
      title: 'John Doe enrolled in “Python for B...',
    },
    {
      id: 1,
      icon: (
        <PiGraduationCapDuotone
          style={{
            color: '#EB5757',
          }}
        />
      ),
      time: 'Friday 11:10pm',
      title: 'John Doe enrolled in “Python for B...',
    },
    {
      id: 1,
      icon: (
        <PiGraduationCapDuotone
          style={{
            color: '#EB5757',
          }}
        />
      ),
      time: 'Friday 11:10pm',
      title: 'John Doe enrolled in “Python for B...',
    },
  ];

  const dash = [
    {
      id: 1,
      Text: 'Total Revenue',
      amount: '# 4.5M',
      year: 'vs Last Year',
      percent: '25.5%',
      icon: <BsCashCoin />,
    },
    {
      id: 2,
      Text: 'Total Courses',
      amount: '120',
      year: 'vs Last Year',
      percent: '25.5%',
      icon: <IoMdBook />,
    },
    {
      id: 3,
      Text: 'Courses Sold',
      amount: '300+',
      year: 'vs Last Year',
      percent: '25.5%',
      icon: <MdOutlineSell />,
    },
    {
      id: 3,
      Text: 'Students Enrolled',
      amount: '203+',
      year: 'vs Last Year',
      percent: '25.5%',
      icon: <PiGraduationCapDuotone />,
    },
  ];

  return (
    <div>
      <Header />
      <div className='flex justify-between items-center py-4 px-4'>
        <h1 className='font-bold'>Dashboard</h1>
        <Buttons>Add New Course</Buttons>
      </div>

      <div className='flex justify-between items-center mx-4'>
        {dash.map(item => (
          <Card item={item} />
        ))}
      </div>

      <CourseChart />
      <div className=' mx-4 grid grid-cols-3 mt-4 gap-6 mb-4'>
        <div className=' col-span-2 bg-white shadow-lg w-full h-[500px] rounded-2xl  '>
          <div className='flex justify-between items-center mx-5 my-4'>
            <strong>Courses</strong>
            <button className='border py-2 px-4 rounded border-[#E4E4E7] text-[#828282]'>
              See all
            </button>
          </div>

          <div className='p-4 text-[#1E1E1E]'>
            <div className='border-b py-2 flex justify-between items-center'>
              <h2 className='font-bold uppercase '>Courses</h2>
              <div className='flex justify-between items-center uppercase gap-3 font-bold '>
                <h2>rating</h2>
                <h2>total enroll</h2>
                <h2>revenue</h2>
              </div>
            </div>
            {courses.map(item => (
              <div className='border-[#E4E4E7] border-b  py-4 flex justify-between items-center text-gray-400'>
                <div className='flex gap-2 items-center'>
                  <img
                    src={item.img}
                    className='w-[40px] h-[40px] rounded-full'
                  />
                  <h2>{item.name}</h2>
                </div>
                <div className='flex justify-between items-center uppercase gap-[60px]  '>
                  <div className='flex items-center gap-1'>
                    <FaStar
                      style={{
                        color: 'orange',
                      }}
                    />
                    <h2>{item.rating}</h2>
                  </div>
                  <h2>{item.total}</h2>
                  <h2>{item.amt}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col-span-1  bg-white shadow-lg rounded-2xl '>
          <div className='flex justify-between items-center mx-5 my-4'>
            <strong>Recent Activities</strong>
            <button className='border py-2 px-4 rounded border-[#E4E4E7] text-[#828282]'>
              See all
            </button>
          </div>
          {activities.map(item => (
            <div className='flex gap-2 items-center p-4 '>
              <div className=''>
                <div className='w-10 h-10 rounded-full border border-[#F4F4F2] flex items-center justify-center'>
                  {item.icon}
                </div>
              </div>
              <div className=''>
                <h1 className='text-md'>{item.title}</h1>
                <p className='text-base text-sm text-gray-300'>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
