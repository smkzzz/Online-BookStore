import React from "react";
import { useState } from "react";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { Link } from "react-router-dom";
function Header({ collapse, setCollapse }) {


  const handleSide = () => setCollapse((prev) => !prev)
  return (

    <div className="flex gap-3  items-center p-5 text-white bg-slate-900 " ><span className="cursor-pointer" onClick={handleSide}>{collapse ? <TbLayoutSidebarRightCollapse /> : <TbLayoutSidebarLeftCollapse />} </span>
    <Link to='/' className="hover:underline cursor-pointer">Home</Link>
    </div>

  );
}

export default Header;
