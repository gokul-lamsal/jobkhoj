import React from "react";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

const RegisterPage = () => {
  return (
    <div className="w-[50%] flex flex-col justify-center items-center">
      <div className="rounded-lg pl-6 pt-10 pb-6 pr-6 flex flex-col gap-4 shadow-xl shadow-gray-400">
        <div>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-gray-700 text-[14px]">
            Choose how you want to use Lunar Portal.
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="border p-2 rounded-xl flex gap-4 items-center cursor-pointer">
            <div>
              <h1 className="w-13 h-13 rounded-2xl text-white flex justify-center items-center bg-purple-900">
                <FiUser color="white" size={30} />
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold ">Job Seeker</h1>
              <p className="text-sm text-gray-700">Find and apply to jobs</p>
            </div>
            <div>
              <input
                type="radio"
                name="CheckBox"
                value=""
                className="cursor-pointer"
              ></input>
            </div>
          </div>
          <div className="border p-2 rounded-xl flex gap-4 items-center cursor-pointer">
            <div>
              <h1 className="font-bold text-xl w-13 h-13 rounded-2xl text-white flex justify-center items-center bg-purple-900">
                <LuBuilding color="white" size={30} />
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold ">Company</h1>
              <p className="text-sm text-gray-700">Post jobs and hire</p>
            </div>
            <div>
              <input
                type="radio"
                name="CheckBox"
                value=""
                className="cursor-pointer"
              ></input>
            </div>
          </div>
        </div>
        <div className="border border-gray-400 rounded-lg p-1 cursor-pointer">
          <p className="flex items-center justify-center text-md text-gray-700 gap-2">
            <FcGoogle size={25} />
            Continue with Google
          </p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div className="w-[30%] border text-gray-400"></div>
          <p className="text-[13px] text-gray-600">or sign up with email</p>
          <div className="w-[30%] border text-gray-400"></div>
        </div>

        <form action="" className="flex flex-col gap-1">
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
              type="password"
              name="password"
              id="password"
              placeholder="........."
              className="text-sm outline-none "
            />
             <span className="absolute right-4 text-gray-400 cursor-pointer">
              <FaRegEye  color="gray" />
            </span>
          </div>
          <p className="text-[12px] text-gray-500 ">At least 8 characters</p>
          <div className="bg-indigo-800 rounded-md p-2 flex justify-center items-center">
            <button className="text-white text-md font-bold">Create account</button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center gap-6">
        <p className="text-[12px] text-gray-500">We will email you a 6 digit code to verify your address.</p>
         <p className="text-[12px] text-gray-500">Already have an account? <span className="text-purple-800 text-[13px] font-bold cursor-pointer">Log in</span></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
