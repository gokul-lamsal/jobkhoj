import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import Button from "../../components/global/Button";
import Badge from "../../components/global/Badge";
import { PiBag } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { TbBrandDatabricks } from "react-icons/tb";
import { FiSend } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LuUser } from "react-icons/lu";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 py-8 bg-indigo-100">
        <div>
          <span className="text-[12px] text-indigo-500 shadow-sm shadow-gray-300 font-bold px-4 py-1 rounded-2xl flex justify-center items-center gap-1">
            {" "}
            <AiOutlineThunderbolt color="blue" size={12} /> New roles added
            every day
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl font-extrabold">
              Find the internship or job
            </p>
            <p className="text-5xl font-extrabold">
              that <span className="text-primary">fits you</span>.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[15px] text-gray-500">
              Browse opening from verified companies, apply in one click and
              follow
            </p>
            <p className="text-[15px] text-gray-500">
              every appication from one place.
            </p>
          </div>
        </div>

        {/* Search Bar section below */}
        <div className="border border-gray-400 shadow shadow-gray-500 bg-white p-4 rounded-xl flex gap-30 items-center">
          <div className="flex justify-center items-center gap-1 ">
            <CiSearch color="gray" size={18} />
            <input
              type="text"
              placeholder="job title,skill or keyword"
              className="outline-none text-sm text-gray-500 pr-2"
            />
          </div>

          <div className="flex justify-center items-center gap-1">
            <span className="h-10 w-0 border text-gray-500"></span>
            <CiLocationOn color="gray" size={18} />
            <input
              type="text"
              placeholder="Location"
              className="outline-none text-sm text-gray-500 pr-2"
            />
          </div>

          <div className="flex gap-1">
            <span className="h-10 w-0 border text-gray-500"></span>
            <select
              name="jobType"
              id=""
              className="text-sm outline-none flex items-center pr-8"
            >
              <option value="All types">All types</option>
              <option value="type1"> type1</option>
              <option value="type2">type2</option>
              <option value="type3">type3</option>
              <option value="type4">type4</option>
            </select>
          </div>

          <div>
            <Button text={"Search"} />
          </div>
        </div>

        <div className="flex gap-4 text-sm">
          <span className=" text-gray-700">Popular:</span>
          <span className=" text-gray-400 cursor-pointer">internship</span>
          <span className=" text-gray-400 cursor-pointer">remote</span>
          <span className=" text-gray-400 cursor-pointer">react</span>
          <span className=" text-gray-400 cursor-pointer">python</span>
          <span className=" text-gray-400 cursor-pointer">design</span>
        </div>

      </div>

        <div className="flex justify-center items-center gap-6 pt-8 px-9">
          <div className="flex gap-3 justify-center items-center border border-gray-500 shadow shadow-gray-500 p-4 pr-30 rounded-xl">
            <h1 className="text-2xl font-bold text-primary">500+</h1>
            <p className="text-sm text-gray-500">Open roles right now.</p>
          </div>
          <div className="flex gap-3 justify-center items-center border border-gray-500 shadow shadow-gray-500 p-4 pr-30 rounded-xl">
            <h1 className="text-2xl font-bold text-primary">120+</h1>
            <p className="text-sm text-gray-500">approved companies.</p>
          </div>
          <div className="flex gap-3 justify-center items-center border border-gray-500 shadow shadow-gray-500 p-4 pr-30 rounded-xl">
            <h1 className="text-2xl font-bold text-primary">1 click</h1>
            <p className="text-sm text-gray-500">to apply with your profile</p>
          </div>
        </div>

      <div className="flex flex-col gap-2 pl-10 pt-8 mb-8">
        <div>
          <h1 className="text-xl font-bold">Browse by job type</h1>
        </div>
        <div className="flex gap-8">
          <div className=" flex gap-2 border-2 border-gray-400 shadow-md shadow-gray-500 w-[20rem] p-6 rounded-xl">
            <div>
              <AiOutlineThunderbolt
                size={40}
                color="purple"
                className="border p-2 rounded-xl bg-purple-300 font-bold"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-md font-bold">Internship</p>
              <p className="text-gray-500 text-[12px]">Start your Career</p>
            </div>
          </div>
           <div className=" flex gap-2 w-[20rem] p-6 rounded-xl border-2 border-gray-400 shadow-md shadow-gray-500">
            <div>
              <PiBag 
                size={40}
                color="blue"
                className="border p-2 rounded-xl bg-blue-300 font-bold"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-md font-bold">Full time</p>
              <p className="text-gray-500 text-[12px]">Stable, long term roles</p>
            </div>
          </div>
          <div className=" flex gap-2 border-2 border-gray-400 shadow-md shadow-gray-500 w-[20rem] p-6 rounded-xl ">
            <div>
              <IoMdTime 
                size={40}
                color="orange"
                className="border p-2 rounded-xl bg-orange-100 font-bold"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-md font-bold">Part time</p>
              <p className="text-gray-500 text-[12px]">Flexible hours</p>
            </div>
          </div>
          <div className=" flex gap-2 border-2 border-gray-400 shadow-md shadow-gray-500 w-[20rem] p-6 rounded-xl">
            <div>
             <TbBrandDatabricks 
                size={40}
                color="green"
                className="border p-2 rounded-xl bg-green-300 font-bold"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-md font-bold">Contract</p>
              <p className="text-gray-500 text-[12px]">Project based work</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-12 mb-10 border-gray-400 shadow shadow-gray-500">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl font-extrabold">How it works</h1>
          <p className="text-sm text-gray-500">Three simple steps to your next role.</p>
        </div>
        <div className="grid grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-1 justify-center items-center p-6">
            <div>
              <LuUser size={40} color="purple"  className="p-2 bg-purple-300 rounded-lg" />
            </div>
            <div>
              <p className=" font-bold text-md">1. Create your profile</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[12px] text-gray-500">Sign up as a job seeker, add your skills and</p>
              <p className="text-[12px] text-gray-500">upload your resume.</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 justify-center items-center p-6">
            <div>
              <MdOutlineMail size={40} color="purple" className="p-2 bg-purple-300 rounded-lg " />
            </div>
            <div>
              <p className="font-bold text-md">2. Verify your email</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[12px] text-gray-500">Confirm your account with a 6 digit code</p>
              <p className="text-[12px] text-gray-500">sent to your inbox.</p>
            </div>
          </div>

          <div className="flex flex-col gap-1 justify-center items-center p-6">
            <div>
              <FiSend size={40} color="purple"  className="p-2 bg-purple-300 rounded-lg" />
            </div>
            <div>
              <p className="font-bold text-md">3. Apply in one click</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[12px] text-gray-500">Send your appication and track its status in </p>
              <p className="text-[12px] text-gray-500">real time.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-10">
        <div className="flex justify-between items-center w-[80%] border-2 border-primary shadow rounded-lg bg-primary p-8">
          <div>
            <h1 className="text-xl font-extrabold text-white">Hiring? Post your first job.</h1>
            <p className="text-[12px] text-gray-300 ">Create a company account. Our team reviews every company before it</p>
            <p className="text-[12px] text-gray-300 ">can post, so job seekers can trust what they see.</p>
          </div>
          <div>
            <button className="px-2 py-1 text-sm border-2 font-bold text-purple-700 bg-white rounded-lg">Register your company</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
