import React from "react";
import { CgSpinner } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { IoCheckmark } from "react-icons/io5";
import Button from "../../components/global/Button";
import { Link } from "react-router-dom";
import { RiErrorWarningLine } from "react-icons/ri";

const SettingUp = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-6">
      <div className="flex flex-col justify-center gap-1 items-center">
        <span className="bg-gray-200 p-2 rounded-full">
          <FcGoogle size={30} />
        </span>
        <h1 className="text-lg font-bold">Signing you in....</h1>
        <p className="text-gray-400 text-md">
          Please wati while we finish setting up your session.
        </p>
      </div>
      <div>
        <span>
          <CgSpinner size={40} className="animate-spin text-primary" />
        </span>
      </div>
    </div>
  );
};

const ReDirect = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-6">
      <div className="flex flex-col justify-center gap-1 items-center">
        <span className="bg-green-200 p-2 rounded-full">
          <IoCheckmark size={30} color="green" />
        </span>
        <h1 className="text-lg font-bold">You are signed in</h1>
        <p className="text-gray-400 text-md">
          Welcome back,
          <span className="text-black font-semibold"> Username </span> Taking
          you to your dashboard.
        </p>
      </div>
      <div className="w-full">
        <Button text={"Go now"} btnType="secondary" />
      </div>
    </div>
  );
};
const LoginFailure = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center py-6">
      <div className="flex flex-col justify-center gap-1 items-center">
        <span className="bg-red-200 p-2 rounded-full">
          <RiErrorWarningLine  size={30} color="red" />
        </span>
        <h1 className="text-lg font-bold">We could not sign you in </h1>
        <p className="text-gray-400 text-md">
          The sign-in-link is invalid or has expired.
        </p>
        <span className="text-gray-400 text-md">Please try again.</span>
      </div>
      <div className="w-full">
        <Link to={"/login"}>
        <Button text={"Back to login"} btnType="primary" />
        </Link>
      </div>
    </div>
  );
};
function Callback() {
  const condition = 1;
  switch (condition) {
    case 1:
      return <SettingUp />;
    case 2:
      return <ReDirect/>;
    default:
      return <LoginFailure/>;
  }
}

export default Callback;
