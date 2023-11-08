import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import {HiUsers} from 'react-icons/hi2'
import {IoBookSharp} from 'react-icons/io5'
import { Link } from "react-router-dom";

import {TbLayoutSidebarLeftCollapse} from 'react-icons/tb'
function Sidebar({collapse,setCollapse}) {
  return (
    <div className={`text-white h-screen  bg-slate-900 ${collapse ? 'md:w-[48px] left-[-400px]' : 'md:w-56 left-[0]'} md:h-[1105px] absolute md:static md:overflow-hidden z-10   md:block duration-200 transition-all`}>
      <div className="p-4 border-b-[1px] border-slate-600 w-full overflow-hidden">
        <span className="flex flex-row items-center  gap-10">Bookstore  <TbLayoutSidebarLeftCollapse className='cursor-pointer md:hidden'onClick={()=>setCollapse((prev)=>!prev)}/></span>
      </div>
      <ul className="flex flex-col p-4">
        <Link to='/admin/customers'className="group flex flex-row items-center gap-4 mb-4">
          <span className="cursor-pointer hover:text-blue-400 relative flex flex-row items-center gap-4">
            
            <HiUsers />
            Customers
          </span>
          <span className={` group-hover:text-white  pointer-events-none opacity-0  bg-slate-700 rounded-md ${collapse ? 'group-hover:opacity-[1]' : ''} duration-200 transition-opacity first-letter:rounded-md text-xs absolute top-50 left-10 cursor-default p-1`}>
    Customers
  </span>
        </Link>

        <Link to='/admin/items'className="group flex flex-row items-center gap-4 mb-4">
          <span className="cursor-pointer hover:text-blue-400 relative flex flex-row items-center gap-4">
            
            <IoBookSharp />
            Items
          </span>
          <span className={` group-hover:text-white  pointer-events-none opacity-0  bg-slate-700 rounded-md ${collapse ? 'group-hover:opacity-[1]' : ''} duration-200 transition-opacity first-letter:rounded-md text-xs absolute top-50 left-10 cursor-default p-1`}>
    Items
  </span>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
