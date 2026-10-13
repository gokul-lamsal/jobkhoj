import React, { useState } from "react";
import { CiMail } from "react-icons/ci";

const ConfirmPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  return (
    <>
      <div className="flex justify-center items-center">
        <span className="p-4 text-4xl text-purple-600 bg-purple-200/50 rounded-xl">
          <CiMail size={50} strokeWidth={1} />
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-5xl font-bold">Check your email</p>
        <p className="text-gray-400 mt-2">we sent a 6 digit code to </p>
        <p className="font-bold">john@student.com</p>
      </div>
      <div>
        <form
          action=""
          className="flex justify-center items-center gap-2 mb-3 mt-2"
        >
          {otp.map((item, index) => {
            return (
              <input
                type="text"
                maxLength={1}
                name="otp"
                id={"otp" + index}
                key={index}
                className="border-2 rounded-xl border-gray-400 w-12 h-15 text-center px-3 py-2 text-2xl"
              />
            );
          })}
        </form>
      </div>
      <div className="flex justify-center items-center mb-2">
        <button className="bg-primary hover:bg-primary-hover rounded-xl w-[30rem] py-3 shadow-xl hover:cursor-pointer">
          <span className="text-xl text-white">Verify Email</span>
        </button>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-400">
          Didn't get the code?{" "}
          <span className="text-primary font-bold hover:underline    cursor-pointer">
            Resend code
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center mb-4">
        <button className="hover:cursor-pointer">
          <span className="text-gray-400">&#60; Back to sign up</span>
        </button>
      </div>
    </>
  );
};

export default ConfirmPage;
