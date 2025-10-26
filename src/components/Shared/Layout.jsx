import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Header from '../Header';

function Layout() {
  return (
    <div className='flex flex-row h-screen w-screen'>
      <Sidebar />
      <div className='flex flex-col flex-1 bg-gray-100 overflow-auto w-full'>
        {/* <Header/> */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
