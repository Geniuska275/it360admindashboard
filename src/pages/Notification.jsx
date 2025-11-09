import React, { useState } from 'react';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa6';
import Button from '@/components/Button';
import pay from "./panotify.png"
import perform from "./pnotify.png"
import studentn from "./snotifiy.png"
import set from "./senotify.png"

function Notification() {
  const [activeTab,setActiveTab]=useState("all")
  const notifications=[
    {
      id:1,
      text:"Payment confirmed: “Advanced Excel Techniques” (₦25,000 – Peter Obi).",
      date:"july 14, 2024 ",
      time:"9:30am ",
      icon:pay
    },
      {
      id:2,
      text:"Elena Cruz received a “Golden Belt” reward from her instructor.",
      date:"july 14, 2024 ",
      time:"9:30am ",
      icon:perform
    },
      {
      id:3,
      text:"Student Alex T. resubmitted assignment for review in “Coding for Teens.",
      date:"july 14, 2024 ",
      time:"9:30am ",
      icon:studentn
    },
      {
      id:4,
      text:"Security alert: 3 failed login attempts detected from IP 192.168.1.45.",
      date:"july 14, 2024 ",
      time:"9:30am ",
      icon:set
    },
  ]
 return <div className="min-h-screen bg-white">
        {/* Header */}
        <div className='flex-1 bg-white py-4 shadow-md w-full top-0 sticky z-10'>
          <div className='flex gap-3 items-center px-6'>
            <MdOutlineSpaceDashboard className='text-xl text-[#71717A]' />
            <h2 className='border-l px-2 text-[#71717A]'>Message & Notification</h2>
            <IoIosArrowForward />
            <h2 className='px-2 text-black font-bold'>Notification</h2>
          </div>
        </div>

        <div className='px-6' >

          <h1 className='font-bold text-2xl mt-2'>Notification</h1>
          <div className='flex justify-between items-center'>
            <h3>You have 3 unread Notification</h3>
            <div className='flex gap-2 items-center'>
               <button className=' h-[32px] w-[150px]  bg-[#01857C] rounded-sm  text-white'>
                  Mark all as read
                </button>
                 <Button
                  variant='outline'
                  onClick={{}}
              
                     >
                        Clear all
                  </Button>
            </div>
          </div>
            {/* Tab Headers */}
           <div className='flex border-b border-[#dddddd] mb-4'>
             <button
               className={`px-2 sm:px-4 py-2 text-sm sm:text-[#828282] border-b-2 flex-1 sm:flex-none ${
                 activeTab === 'all' 
                   ? 'border-[#01857C] font-bold text-[#01857C] ' 
                   : 'border-transparent  hover:text-primary'
               }`}
               onClick={() => setActiveTab('all')}
             >
               <span className={`hidden sm:inline  ${ activeTab === 'all'? "text-[#01857C]":"text-[#828282]"}`}>All</span>
               <span className='sm:hidden'>All</span>
             </button>
             <button
               className={`px-2 sm:px-4 py-2 text-sm sm:text-paragraph-md border-b-2 flex-1 sm:flex-none ${
                 activeTab === 'Academic' 
                   ? 'border-[#01857C] font-bold text-primary ' 
                   : 'border-transparent  hover:text-primary'
               }`}
               onClick={() => setActiveTab('Academic')}
             >
               <span className={`hidden sm:inline ${ activeTab === 'Academic'? "text-[#01857C]":"text-[#828282]"}`

               }>Academic</span>
               <span className='sm:hidden'>Academic</span>
             </button>
                <button
               className={`px-2 sm:px-4 py-2 text-sm sm:text-paragraph-md border-b-2 flex-1 sm:flex-none ${
                 activeTab === 'Performance' 
                   ? 'border-[#01857C] font-bold text-primary ' 
                   : 'border-transparent  hover:text-primary'
               }`}
               onClick={() => setActiveTab('Performance')}
             >
               <span className={`hidden sm:inline ${ activeTab === 'Performance'? "text-[#01857C]":"text-[#828282]"}`}>Performance</span>
               <span className='sm:hidden'>Performance</span>
             </button>
                <button
               className={`px-2 sm:px-4 py-2 text-sm sm:text-paragraph-md border-b-2 flex-1 sm:flex-none ${
                 activeTab === 'Payment' 
                   ? 'border-[#01857C] font-bold text-primary ' 
                   : 'border-transparent  hover:text-primary'
               }`}
               onClick={() => setActiveTab('Payment')}
             >
               <span className={`hidden sm:inline ${ activeTab === 'Payment'? "text-[#01857C]":"text-[#828282]"} `}>Payment</span>
               <span className='sm:hidden'>Payment</span>
             </button>
                <button
               className={`px-2 sm:px-4 py-2 text-sm sm:text-paragraph-md border-b-2 flex-1 sm:flex-none ${
                 activeTab === 'System' 
                   ? 'border-[#01857C] font-bold text-primary ' 
                   : 'border-transparent  hover:text-primary'
               }`}
               onClick={() => setActiveTab('System')}
             >
               <span className={`hidden sm:inline ${ activeTab === 'System'? "text-[#01857C]":"text-[#828282]"} `}>System</span>
               <span className='sm:hidden'>System</span>
             </button>
           </div>

           {/* Tab Content */}

           {activeTab === 'all' && (
            <div>
              {notifications.map((item)=>(
                <div className='shadow-md p-4 my-3 rounded-md flex justify-between items-center'>
                  <div className='flex gap-2'>
                  <img src={item.icon} className='w-[50px] h-[50px]'/>
                  <div>
                    <p className='font-bold '>{item.text}</p>
                    <span className='text-sm text-[#71717A]'>{item.date} 
                      | </span>   <span className='text-sm text-[#71717A]'>{item.time} 
                     </span> 
                  </div>
                  </div>
                  <button className="text-[#01857C]">NEW</button>
                 
                </div>
              ))}
            </div>
           )}
           {activeTab === 'Academic' && (
            <div>
              {notifications.map((item)=>(
                <div className='shadow-md p-4 my-3 rounded-md flex gap-2'>
                  <img src={item.icon} className='w-[50px] h-[50px]'/>
                  <div>
                    <p className='font-bold '>{item.text}</p>
                    <span className='text-sm text-[#71717A]'>{item.date} 
                      | </span>   <span className='text-sm text-[#71717A]'>{item.time} 
                     </span> 
                  </div>

                </div>
              ))}
            </div>
           )}

            {activeTab === 'Payment' && (
            <div>
              {notifications.map((item)=>(
                <div className='shadow-md p-4 my-3 rounded-md flex gap-2'>
                  <img src={item.icon} className='w-[50px] h-[50px]'/>
                  <div>
                    <p className='font-bold '>{item.text}</p>
                    <span className='text-sm text-[#71717A]'>{item.date} 
                      | </span>   <span className='text-sm text-[#71717A]'>{item.time} 
                     </span> 
                  </div>

                </div>
              ))}
            </div>
           )}


            {activeTab === 'Performance' && (
            <div>
              {notifications.map((item)=>(
                <div className='shadow-md p-4 my-3 rounded-md flex gap-2'>
                  <img src={item.icon} className='w-[50px] h-[50px]'/>
                  <div>
                    <p className='font-bold '>{item.text}</p>
                    <span className='text-sm text-[#71717A]'>{item.date} 
                      | </span>   <span className='text-sm text-[#71717A]'>{item.time} 
                     </span> 
                  </div>

                </div>
              ))}
            </div>
           )}


            {activeTab === 'System' && (
            <div>
              {notifications.map((item)=>(
                <div className='shadow-md p-4 my-3 rounded-md flex gap-2'>
                  <img src={item.icon} className='w-[50px] h-[50px]'/>
                  <div>
                    <p className='font-bold '>{item.text}</p>
                    <span className='text-sm text-[#71717A]'>{item.date} 
                      | </span>   <span className='text-sm text-[#71717A]'>{item.time} 
                     </span> 
                  </div>

                </div>
              ))}
            </div>
           )}

           {/* Pagination Section */}
                   <div className='mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-4 rounded-lg'>
                     <h4 className='text-[#373737] font-medium'>
                       0 of 1 row(s) selected.
                     </h4>
                     <div className='flex gap-3 items-center'>
                       
                       <Button
                         variant='outline'
                         onClick={{}}
                        //  disabled={currentPage === 1}
                       >
                         Previous
                       </Button>
                       <Button
                         variant='outline'
                        //  onClick={handleNext}
                        //  disabled={currentPage === totalPages}
                       >
                         Next
                       </Button>
                     </div>
                   </div>
               
 






        </div>
      </div>
    
}

export default Notification;
