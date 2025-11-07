import React, { useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Buttons from '../Buttons';
const data = [
  {
    name: ' Jan',
    Enrolled: 4000,
    Graduated: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    Enrolled: 3000,
    Graduated: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    Enrolled: 12000,
    Graduated: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    Enrolled: 2780,
    Graduated: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    Enrolled: 11890,
    Graduated: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    Enrolled: 10090,
    Graduated: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    Enrolled: 9490,
    Graduated: 4300,
    amt: 2100,
  },
  {
    name: 'Aug',
    Enrolled: 8490,
    Graduated: 4300,
    amt: 2100,
  },
  {
    name: 'Sept',
    Enrolled: 12090,
    Graduated: 11300,
    amt: 2100,
  },
  {
    name: 'Oct',
    Enrolled: 10090,
    Graduated: 4300,
    amt: 2100,
  },
  {
    name: 'Nov',
    Enrolled: 8490,
    Graduated: 4300,
    amt: 2100,
  },
  {
    name: 'Dec',
    Enrolled: 7490,
    Graduated: 4300,
    amt: 2100,
  },
];

function CourseChart() {
   const [selectedTime, setSelectedTime] = useState('');
  return (
    <div className='bg-white h-[30rem] mt-5 p-4 rounded-sm mx-4 border border-gray-200'>
      <div className='flex justify-between items-center mx-5 my-4'>
        <strong>Courses</strong>
                  <div >
                    <Select value={selectedTime} onValueChange={setSelectedTime}> 
                      <SelectTrigger className="w-full rounded-sm h-10 bg-white">
                        <SelectValue placeholder="Select Duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="course-1">Yearly</SelectItem>
                        <SelectItem value="course-2">Monthly</SelectItem>
                        <SelectItem value="course-3">Weekly</SelectItem>
                        <SelectItem value="course-4">Daily</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
      </div>

      <ResponsiveContainer width='100%' height='85%'>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey='Enrolled'
            fill='#E5F5ED'
            activeBar={<Rectangle fill='#009B4D' stroke='#009B4D' />}
          />
          <Bar
            dataKey='Graduated'
            fill='#009B4D'
            activeBar={<Rectangle fill='#E5F5ED' stroke='purple' />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CourseChart;
