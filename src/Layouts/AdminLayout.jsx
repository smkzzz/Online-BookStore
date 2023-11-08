import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header.jsx";
function AdminLayout({ children, collapse, setCollapse }) {
  return (
    <div className="flex flex-row">
      <Sidebar collapse={collapse} setCollapse={setCollapse} />
      <div className="bg-gray-800  flex flex-col w-full">
        <Toaster />
        <Header collapse={collapse} setCollapse={setCollapse} />
        {children}
      </div>
    </div>
  )
}

export default AdminLayout