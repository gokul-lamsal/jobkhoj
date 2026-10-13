import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AuthSideBar = () => {
  return (
    <div className="bg-indigo-700 flex flex-col justify-between pl-[4rem] pt-[2rem] w-[50%]">
      <div className="flex gap-2">
        <h1 className="font-bold text-xl w-8 h-8 rounded-lg text-center bg-amber-50">
          L
        </h1>
        <h1 className="text-xl font-bold text-white">Lunar portal</h1>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="text-3xl text-white font-extrabold">
            Your next opportunity
          </h1>
          <h1 className="text-3xl text-white font-extrabold">starts here.</h1>
        </div>
        <div className="rounded-2xl p-2 w-[70%] bg-white/20 border-white/20 backdrop-blur-xl">
          <div className="flex gap-2 ">
            <div>
              <h1 className="font-bold text-xl w-13 h-13 rounded-2xl text-white flex justify-center items-center bg-[#1687E8]">
                IL
              </h1>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white">
                Full Stack Engineer
              </h1>
              <h1 className="text-sm text-gray-200 font-bold">
                InnoLabs-Kathmandu
              </h1>
            </div>
          </div>
            <div className="flex p-2 gap-4">
              <p className="text-sm text-white bg-white/10  border-white/20 rounded-xl p-1">Full time</p>
              <p className="text-sm  text-white bg-white/10  border-white/20 rounded-xl p-1">NPR 80k-120k</p>
            </div>
        </div>
        <div>
              <p className="text-white text-lg flex gap-2 items-center"><IoMdCheckmarkCircleOutline />One profile, unlimited applications</p>
              <p className="text-white text-lg flex gap-2 items-center"><IoMdCheckmarkCircleOutline />Track every application status</p>
              <p className="text-white text-lg flex gap-2 items-center"><IoMdCheckmarkCircleOutline />Instant notification</p>
            </div>
      </div>
      <div className="pb-6">
        <p className="text-white text-md">&copy; {new Date().getFullYear()} Lunar Portal</p>
      </div>
    </div>
  );
};

export default AuthSideBar;
