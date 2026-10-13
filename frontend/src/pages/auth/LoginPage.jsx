import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const LoginPage = () => {

const [form,setForm] = useState([]);

const handleChange = (e) =>{
  setform((prev)=> ({...prev,[e.target.name]: e.target.value}));
} 

  return (
    <div className="w-[50%] flex flex-col justify-center items-center gap-1">
      <div className="rounded-lg pl-6 pt-10 pb-10 pr-6 w-[36rem] flex flex-col justify-center items-center gap-4 shadow-xl border-2 border-gray-400 shadow-gray-400">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-600 text-[12px]">Log in to your account</p>
        </div>
        <div className="border border-gray-400 rounded-lg p-1 cursor-pointer w-full">
          <p className="flex items-center justify-center text-md text-gray-700 gap-2 ">
            <FcGoogle size={25} />
            Continue with Google
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 w-full">
          <div className="w-[45%] border text-gray-400"></div>
          <p className="text-[13px] text-gray-600">or</p>
          <div className="w-[45%] border text-gray-400"></div>
        </div>
        <form action="" className="flex flex-col gap-2 w-full">
          <label htmlFor="Email" className="text-[12px] font-bold">
            {" "}
            Email address
          </label>
          <div className="border border-purple-600 flex gap-2 p-2 rounded-md items-center">
            <p className="flex items-center ">
              <MdOutlineMail color="gray" />
            </p>
            <input
              type="email"
              name="email"
              onClick={handleChange}
              value={form.email}
              id="email"
              placeholder="john@example.com"
              className="text-sm outline-none"
            />
          </div>
          <label htmlFor="Email" className="text-[12px] font-bold">
            {" "}
            Password
          </label>
          <div className="border border-purple-600 flex gap-2 p-2 rounded-md items-center relative">
            <p className="flex items-center ">
              <IoLockClosedOutline color="gray" />
            </p>
            <input
            onClick={handleChange}
              type="password"
              name="password"
              value={form.password}
              id="password"
              placeholder="●●●●●●●●"
              className="text-sm outline-none "
            />
            <span className="absolute right-4 text-gray-400 cursor-pointer">
              <FaRegEye color="gray" />
            </span>
          </div>
          <div className="flex items-center gap-2 pt-3">
            <input type="checkbox" name="Checkbox" className="size-4" />
            <label htmlFor="Checkbox" className="text-[14px] cursor-pointer text-gray-500"> Remember me</label>
          </div>
          <div className="bg-primary hover:bg-primary-hover rounded-lg p-2 mt-4 flex justify-center items-center cursor-pointer">
            <button className="text-white text-md font-bold ">
              Log in
            </button>
          </div>
        </form>
        <div>
         <p className="text-[12px] text-gray-500">New here? <span className="text-purple-800 text-[13px] font-bold cursor-pointer">Create an account</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
