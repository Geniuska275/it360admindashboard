import React from 'react'
import Buttons from './Buttons'
import Card from './Shared/Cards'
import { BsCashCoin } from "react-icons/bs";
import { IoMdBook } from "react-icons/io";
import { MdOutlineSell } from "react-icons/md";
import { PiGraduationCapDuotone } from "react-icons/pi";
import CourseChart from './Shared/CourseChart';
import Example from './Shared/Example';

function Dashboard() {
    const dash=[
      {
        id:1,
        Text:"Total Revenue",
        amount:"# 4.5M",
        year:"vs Last Year",
       percent:"25.5%",
       icon:<BsCashCoin />,
      },
      {
        id:2,
        Text:"Total Courses",
        amount:"120",
        year:"vs Last Year",
       percent:"25.5%",
       icon:<IoMdBook />,


      },
      {
        id:3,
        Text:"Courses Sold",
        amount:"300+",
        year:"vs Last Year",
        percent:"25.5%",
        icon:<MdOutlineSell />

      },
       {
        id:3,
        Text:"Students Enrolled",
        amount:"203+",
        year:"vs Last Year",
       percent:"25.5%",
        icon:<PiGraduationCapDuotone />


      },
    ]

  return (
    <div>
      <div className='flex justify-between items-center py-4 px-4'>
        <h1 className='font-bold'>Dashboard</h1>
          <Buttons>Add New Course</Buttons>
      </div>

      <div className='flex justify-between items-center mx-4' >
        {dash.map((item)=>(
           <Card item={item}/>
        ))}

      </div>

      <CourseChart/>
      




    </div>
  )
}

export default Dashboard