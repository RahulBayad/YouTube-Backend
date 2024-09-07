import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';

export const Layout = () => {

  return (
    <div className=' min-h-screen grid grid-rows-[50px_auto] antialised' style={{fontFamily:"Roboto"}}>
      
      <header>
        <Navbar/>
      </header>

      <div className=' grid lg:grid-cols-[209px_auto] sm:grid-cols-[60px_auto]'>
        <Sidebar/>

        <div className=' '>   
          <Outlet/>
        </div>
      </div>

    </div>
  )
}
