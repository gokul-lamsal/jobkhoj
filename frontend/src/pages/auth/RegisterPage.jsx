import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiUser } from "react-icons/fi";
import { IoLockClosedOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/global/Button";
import api from "../../components/api/api";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({
    role: "SEEKER",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const validationInit = {
    isError: false,
    email: "",
    password: "",
  };
  const [validationMsg, setValidationMsg] = useState(validationInit);
  const chooseRole = [
    {
      title: "Job Seeker",
      description: "Find and apply to jobs",
      role: "SEEKER",
      icon: FiUser,
    },
    {
      title: "Company",
      description: "Post jobs and hire",
      role: "COMPANY",
      icon: LuBuilding,
    },
  ];
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setValidationMsg(validationInit);
      const res = await api.post("/api/auth/register", form);
      if (res.data.success == true) {
        navigate(`/confirm?email=${encodeURIComponent(form.email)}`, {
          state: { fromRegister: true },
          replace: true,
        });
      }
    } catch (err) {
      const errMsg = err.response?.data;
      if (!err.response) {
        toast.error("server error");
      } else if (!errMsg.success && errMsg.message === "Validation failed.") {
        const fieldErrors = {};

        errMsg.errors.forEach((e) => {
          fieldErrors[e.path] = "*" + e.msg;
        });
        setValidationMsg({ ...fieldErrors, isError: true });
      } else if (errMsg.message === "Email already registered.") {
        setValidationMsg({
          ...validationInit,
          isError: true,
          email: "Email already registered.",
        });
      } else {
        toast.error("Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
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
        {chooseRole.map((e) => {
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

      <form onSubmit={handleSubmit} className="flex flex-col gap-1">
        <label
          htmlFor="Email"
          className="text-[12px] font-bold flex items-center gap-1.5"
        >
          {" "}
          Email address
          <div>
            <p
              className={`text-[12px] ${validationMsg.isError ? "text-red-500 " : "text-gray-500"} `}
            >
              {validationMsg.email}
            </p>
          </div>
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

        <label
          htmlFor="Email"
          className="text-[12px] font-bold flex items-center gap-1.5"
        >
          {" "}
          Password
          <div>
            <p
              className={`text-[12px] ${validationMsg.isError ? "text-red-500 " : "text-gray-500"} `}
            >
              {validationMsg.password}
            </p>
          </div>
        </label>
        <div className="border border-purple-600 flex gap-2 p-2 rounded-md items-center mb-4">
          <p className="flex items-center ">
            <IoLockClosedOutline color="gray" />
          </p>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            onChange={handleChange}
            value={form.password}
            id="password"
            placeholder="●●●●●●●●"
            className="text-sm outline-none grow"
          />
          <span
            className=" text-gray-400 cursor-pointer"
            onClick={() => {
              setShowPass((prev) => !prev);
            }}
          >
            {showPass ? (
              <FaRegEyeSlash color="gray" />
            ) : (
              <FaRegEye color="gray" />
            )}
          </span>
        </div>

        <Button text={"Register"} isLoading={isLoading} />
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
