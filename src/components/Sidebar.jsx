import React from 'react'
// import super from "./media.png";
import logo from "./sidelogo.png";

import {
FaRegUserCircle
} from "react-icons/fa";

import { IoBookOutline } from "react-icons/io5";
import { LuNotebookText } from "react-icons/lu";
import classNames from "classnames"
import { DASHBOARD_SIDEBAR, DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigations';
import { Link, useLocation } from 'react-router-dom';
const linkClasses='flex items-center text-[#828282] gap-2 font-light px-4 p-1 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-sm'
function Sidebar() {
  return (
    <div className='w-60 bg-[#1E1E1E] text-white '>
        <div className='flex flex-row items-center mt-6 ml-2 gap-2'> 
            <img src={logo} alt="Logo" className='w-12 h-12 '/>
            <div>
                <h2>IT360academy</h2>
                <p className='text-[12px] text-gray-400'>Management</p>
            </div>
        </div>
         {DASHBOARD_SIDEBAR.map((item)=>(
            <div key={item.key}>
                <Sidebars item={item}/>
            </div>
        ))}
        {/* user management */}
        <div className='flex items-center py-4  ml-4 gap-2'>
            <FaRegUserCircle/>
            <h2>User Management</h2>
            
        </div>
        <div className=''>

        {DASHBOARD_SIDEBAR_LINKS.slice(1,5).map((item)=>(
            <div key={item.key}>
                <Sidebarlink item={item}/>
            </div>
        ))}
        </div>

        {/* course management */}

          <div className='flex items-center py-4  ml-4 gap-2'>
            <IoBookOutline/>
            <h2>Course Management</h2>
            
        </div>
        <div className=''>

        {DASHBOARD_SIDEBAR_LINKS.slice(5,7).map((item)=>(
            <div key={item.key}>
                <Sidebarlink item={item}/>
            </div>
        ))}
        </div>



        {/* Assignment and Assessment */}
                  <div className='flex items-center py-4  ml-4 gap-2'>
            <LuNotebookText/>
            <h2>Assignment & Assessment</h2>
            
        </div>
        <div className=''>

        {DASHBOARD_SIDEBAR_LINKS.slice(7,9).map((item)=>(
            <div key={item.key}>
                <Sidebarlink item={item}/>
            </div>
        ))}
        </div>



        {/* Message and Notification */}

                <div className='flex items-center py-4  ml-4 gap-2'>
            <LuNotebookText/>
            <h2>Message & Notification</h2>
            
        </div>
        <div className=''>

        {DASHBOARD_SIDEBAR_LINKS.slice(9,12).map((item)=>(
            <div key={item.key}>
                <Sidebarlink item={item}/>
            </div>
        ))}
        </div>




        {/* super admin */}
        <div className='flex items-center gap-2 mx-1'>
            <img src={logo} />
            <div>
                <h1 className='text-sm'>Super-Admin</h1>
                <p className='text-sm text-[#828282]'>m@example.com</p>
            </div>
        </div>

        
    
      
    </div>
  )
}

export default Sidebar


function Sidebarlink({item}){
    const {pathname}=useLocation()
    return(
        <Link to={item.path} className={classNames(pathname==item.path ? "bg-neutral-700 text-white":"text-[#828282]",linkClasses)}>
            {item.label}
       </Link>
    )
}

function Sidebars({item}){
     const {pathname}=useLocation()
    return(
       <Link to={item.path} className={classNames(pathname==item.path ? "bg-neutral-700 text-white":"text-[#828282]",linkClasses)}>
           <span className='text-xl'>{item.icon}</span> {item.label}
       </Link>
    )
}