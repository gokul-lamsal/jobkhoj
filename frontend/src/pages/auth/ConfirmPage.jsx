import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";


const ConfirmPage = () => {
    const [otp,setOtp] = useState("");
    const handleChange =(e)=>{
       setOtp(prev=>(prev+e.target.value));
    }
    console.log(otp);
  return (
        <div className="w-[50%] flex flex-col justify-center items-center">
      <div className="rounded-lg pl-6 pt-10 pb-6 pr-6 flex flex-col gap-4 shadow-xl shadow-gray-400 border-2 border-gray-400">
        <div className="flex justify-center items-center">
          <span className="p-4 text-4xl text-purple-600 bg-purple-200/50 rounded-xl">
            <CiMail size={50} strokeWidth={1}/>
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-1">
            <p className="text-5xl font-bold">Check your email</p>
            <p className="text-gray-400 mt-2">we sent a 6 digit code to </p>
            <p className="font-bold">john@student.com</p>
        </div>
        <div >
            <form action="" className="flex justify-center items-center gap-2 mb-3 mt-2">

            <input type="text" maxLength={1} name="otp" id="" className="border-2 rounded-xl border-gray-400 w-12 h-15 text-center px-3 py-2 text-2xl" onChange={handleChange} />
            <input type="text" maxLength={1} name="otp" id="" className="border-2 rounded-xl border-gray-400 w-12 h-15 text-center px-3 py-2 text-2xl"onChange={handleChange} />
            <input type="text" maxLength={1} name="otp" id="" className="border-2 rounded-xl border-gray-400 w-12 h-15 text-center px-3 py-2 text-2xl" onChange={handleChange}/>
            <input type="text" maxLength={1} name="otp" id="" className="border-2 rounded-xl border-gray-400 w-12 h-15 text-center px-3 py-2 text-2xl" onChange={handleChange} />
            <input type="text" maxLength={1} name="otp" id="" className="border-2 rounded-xl border-gray-400 w-12 h-15 text-center px-3 py-2 text-2xl" onChange={handleChange} />
            <input type="text" maxLength={1} name="otp" id="" className="border-2 rounded-xl border-gray-400 w-12 h-15 text-center px-3 py-2 text-2xl" onChange={handleChange}/>
            </form>
           
        </div>
        <div className="flex justify-center items-center mb-2">
            <button className="bg-primary hover:bg-primary-hover rounded-xl w-[30rem] py-3 shadow-xl hover:cursor-pointer"><span className="text-xl text-white">Verify Email</span></button>
        </div>
        <div className="flex justify-center items-center">
            <p className="text-gray-400">Didn't get the code? <span className="text-primary font-bold">Resend code</span></p>
        </div>
        <div className="flex justify-center items-center mb-4">
            <button className="hover:cursor-pointer"><span className="text-gray-400">&#60; Back to sign up</span></button>
        </div>

      </div>
      </div>
  )
}

export default ConfirmPage
