import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../components/global/Button";

const RegisterPage = () => {
  const formInit = {
    role: "seeker",
    email: "",
    password: "",
  };
  const [form, setForm] = useState(formInit);
  const chooseRole = [
    {
      title: "Job Seeker",
      description: "Find and apply to jobs",
      role: "seeker",
      icon: FiUser,
    },
    {
      title: "Company",
      description: "Post jobs and hire",
      role: "company",
      icon: LuBuilding,
    },
  ];
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-gray-600 text-[12px]">
          Choose how you want to use Lunar Portal.
        </p>
      </div>
      <div className="flex justify-center items-center gap-3 ">
        {chooseRole.map((e, i) => {
          return (
            <div
              key={e.role}
              onClick={() =>
                setForm((prev) => ({
                  ...prev,
                  role: e.role,
                }))
              }
              className={`border-2 transition-all duration-500 ease-out  ${form.role === e.role ? "border-indigo-600 ring-indigo-100 ring-4 bg-indigo-400/10" : "border-gray-200"} p-2 rounded-xl flex gap-4 items-center cursor-pointer`}
            >
              <div>
                <h1
                  className={`w-13 h-13 rounded-2xl text-white flex justify-center items-center ${form.role === e.role ? "bg-indigo-600" : "bg-indigo-100/70"} `}
                >
                  <e.icon
                    color={form.role === e.role ? "white" : "grey"}
                    size={30}
                  />
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold ">{e.title}</h1>
                <p className="text-sm text-gray-700">{e.description}</p>
              </div>
              <div>
                <input
                  type="radio"
                  name="role"
                  value={e.role}
                  className="cursor-pointer size-5 outline-none accent-indigo-700 "
                  onChange={handleChange}
                  checked={form.role === e.role}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="border border-gray-400 rounded-lg p-2.5 cursor-pointer">
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
            onChange={handleChange}
            value={form.email}
            placeholder="john@example.com"
            className="text-sm outline-none grow"
          />
        </div>
        <label htmlFor="Email" className="text-[12px] font-bold">
          {" "}
          Password
        </label>
        <div className="border border-purple-600 flex gap-2 p-2 rounded-md items-center ">
          <p className="flex items-center ">
            <IoLockClosedOutline color="gray" />
          </p>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            id="password"
            placeholder="●●●●●●●●"
            className="text-sm outline-none grow"
          />
          <span className=" text-gray-400 cursor-pointer">
            <FaRegEye color="gray" />
          </span>
        </div>
        <p className="text-[12px] text-gray-500 mt-1 ">At least 8 characters</p>
        <Button text={"Register"} />
      </form>
      <div className="flex flex-col justify-center items-center gap-6">
        <p className=" text-gray-500">
          We will email you a 6 digit code to verify your address.
        </p>
        <p className=" text-gray-500">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-purple-800 hover:underline font-bold cursor-pointer"
          >
            Log in
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
