import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import {TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon} from "@radix-ui/react-icons";

export const Layout = () => {
  return (
    <div className=' min-h-screen grid grid-rows-[50px_auto]'>
      
      <navbar className="grid grid-cols-3 px-4 bg-slate-100">
          <div id="menu_Logo" className=" flex gap-5 items-center ">
            <span class="material-symbols-outlined text-[1.7rem] font-extralight">menu</span>
            <div className="flex gap-1 items-center">
              <FaYoutube  className="text-[1.7rem] text-red-500"/>
              <span 
                className="text-[1.1rem] font-thin text-gray-700 tracking-wide"
                style={{fontFamily:"Anton"}}
              >YouTube</span>
            </div>
          </div>

          <div id="SearchBox" className="flex items-center">
            <TextField.Root id="searchBar" className="w-full" placeholder="Search" >
              <TextField.Slot className="font-bold active:border-red-600">
                <MagnifyingGlassIcon  height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
          </div>

          <div id="Profile" className="text-end">
            Profile
          </div>
      </navbar>

      <div className=' grid lg:grid-cols-[160px_auto] sm:grid-cols-[60px_auto]'>
        <sidebar className='border border-red-500 sm:block hidden'>
          <div>
            <span>Home</span>
          </div>
          <div>
            <span>Home</span>
          </div>
          <div>
            <span>Home</span>
          </div>
        </sidebar>

        <div className=' '>   
          <Outlet/>
        </div>
      </div>

    </div>
  )
}
