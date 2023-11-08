import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [hide, setHide] = useState(false);
  console.log(hide);
  return (
    <nav className="flex flex-row justify-between items-center bg-slate-900 text-white  p-6">
      <div>
        <span className="">Online BookStore</span>
      </div>
      <div className={`bg-slate-800 relative rounded-md w-1/2 p-1 hidden lg:block ${hide ? '' : ''}`}>
        <label
          className={`${
            hide ? "hidden" : " "
          } top-[8px] text-slate-600 left-3  absolute z-0 text-xs duration-200 tansition-all`}
        >
          Search harry potter, fantastic beast, game of thrones
        </label>
        <input
          onFocus={() => setHide(true)}
          onBlur={() => setHide(false)}
          ontype="text"
          className=" pl-3 w-full text-xs bg-transparent outline-none z-20 border-none relative"
        />
      </div>
      <div className="sm:hidden">
        Search
      </div>
      <ul className="hidden sm:flex flex-row gap-10 mr-15">
        <li className="hover:text-blue-600 duration-200 transition-colors hover:underline">
          <Link>Home</Link>
        </li>
        <li className="hover:text-blue-600 duration-200 transition-colors hover:underline">
          <Link to='/admin'>Admin</Link>
        </li>
        <li className="hover:text-blue-600 duration-200 transition-colors hover:underline">
          <Link>Cart</Link>
        </li>
        <li className=" duration-200 transition-colors hover:underline">
          <Link className="p-2 bg-blue-600 rounded-md px-3 " to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
