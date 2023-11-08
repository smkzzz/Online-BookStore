import React from "react";
import image from "../assets/svg.svg";
import { Link } from "react-router-dom";
import wave from "../assets/wave.png"
function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-slate-900 rounded-lg  flex flex-row   w-[860px] h-[501px] relative">
        <div className="w-96 self-center">
        <img src={wave} className="w-96 absolute z-0 h-[500px] top-0" />
          <div className=" flex flex-col  gap-10 ml-10"> 
          <div className="relative z-10 flex flex-col">
          <span className="w-56  text-slate-900 font-bold text-xl text-center">Welcome Back!</span>
          <p className="w-56 text-center mt-10 text-sm text-slate-700 ">Ready to take control of your academic success?</p>
          </div>
          <img src={image} className="w-56 z-10 relative" />
          </div>
        </div>
        <div className="w-1/2 relative z-10  mr-10 mt-20 flex flex-col gap-4">
            <p className="text-2xl font-bold text-white mb-6">Login</p>
          <div className="flex flex-col gap-2 p-1 text-white">
            <label>Email</label>
            <input
              type="emal"
              placeholder="email"
              className="rounded-md p-3 text-sm text-slate-700 outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2 p-1 text-white">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              className="w-full rounded-md p-3 text-sm text-slate-700 outline-none"
              required
            />
          </div>
          <div className="self-end">
            <a className="text-white cursor-pointer ">Forgot Password?</a>
          </div>
          <div className="flex justify-center">
            <span className="bg-blue-500 p-2 rounded-md text-white cursor-pointer">Sign In</span>
          </div>
        </div>
        <p className="text-white absolute top-3 right-4">Back to <Link to='/' className="text-blue-500 cursor-pointer">Home.</Link></p>
      </div>
    </div>
  );
}

export default Login;
