import React from 'react';
import { FaYoutube } from "react-icons/fa";
import {TextField } from "@radix-ui/themes";
import { MagnifyingGlassIcon} from "@radix-ui/react-icons";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="grid grid-cols-3 px-4 h-full ">

            <div id="menu_Logo" className=" flex gap-5 items-center ">
                <span class="material-symbols-outlined text-[1.7rem] font-extralight cursor-pointer">menu</span>
                <NavLink className="flex gap-1 items-center">
                    <FaYoutube  className="text-[1.7rem] text-red-500"/>
                    <span className="text-[1.1rem] font-thin text-gray-700 tracking-wide" style={{fontFamily:"Anton"}}>YouTube</span>
                </NavLink>
            </div>

            <div id="SearchBox" className="flex items-center">
              <TextField.Root id="searchBar" className="w-full" placeholder="Search" >
                <TextField.Slot className="font-bold ">
                  <MagnifyingGlassIcon  height="16" width="16" />
                </TextField.Slot>
              </TextField.Root>
            </div>

            <div id="Profile" className="text-end">
              Profile
            </div>
        </nav>
  )
}

export default Navbar
