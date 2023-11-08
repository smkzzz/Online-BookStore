import React from "react";
import { useState } from "react";
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarRightCollapse } from "react-icons/tb";
function Header({collapse,setCollapse}) {
  

  const handleSide = () => setCollapse((prev) => !prev)
  return (
  
    <div className="p-5 text-white bg-slate-900 " ><span className="cursor-pointer" onClick={handleSide}>{collapse ? <TbLayoutSidebarRightCollapse /> : <TbLayoutSidebarLeftCollapse/>}</span></div>
    
  );
}

export default Header;
