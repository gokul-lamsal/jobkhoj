import React, { useRef, useState } from "react";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../../components/global/Button";

const ConfirmPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInput = useRef([]);
  const handleChange = (otpBox, index) => {

    setOtp((prev) =>
      prev.map((e, i) => {
        if (i === index) return otpBox.target.value;
        return e;
      }),
    );
    if (otp[index].length > 0) {
      otpInput.current[index - 1]?.focus();
    } else {
      otpInput.current[index + 1]?.focus();
    }

  };
  const checkOtp = (e) => {
    e.preventDefault();
    console.log(parseInt(otp.join("")));
  };
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
        <form className="flex flex-col  gap-2 mb-3 mt-2" onSubmit={checkOtp}>
          <div className="flex justify-center items-center gap-2 mb-3 mt-2">
            {otp.map((item, index) => {
              return (
                <input
                  type="text"
                  maxLength={1}
                  name="otp"
                  id={"otp" + index}
                  key={index}
                  ref={(e) => (otpInput.current[index] = e)}
                  value={item}
                  onChange={(e) => handleChange(e, index)}
                  className="border-2 rounded-xl border-gray-400 w-12 h-15 text-center px-3 py-2 text-2xl"
                />
              );
            })}
          </div>
          <Button text={"Verify Email"} />
        </form>
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
        <Link to={"/register"} className="hover:cursor-pointer ">
          <span className="text-gray-400 hover:text-blue-600 hover:underline">
            &#60; Back to sign up
          </span>
        </Link>
      </div>
    </>
  );
};

export default ConfirmPage;
