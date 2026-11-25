import React, { useEffect, useRef, useState } from "react";
import { CiMail } from "react-icons/ci";
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/global/Button";
import { toast } from "react-toastify";
import api from "../../components/api/api";

const ConfirmPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)


  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInput = useRef([]);

  const email = searchParams.get("email");
  const allowed = location.state?.fromRegister && email;
  {/* Dont allow in this page if it isnt send from register, or if no email is on url */ }
  useEffect(() => {
    if (allowed) {
      toast.success("Please check your email for otp.", { toastId: "otp-sent" });
    }
  }, [allowed]);
  if (!allowed) return <Navigate to="/register" replace />;


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

  const checkOtp = async (e) => {
    e.preventDefault();

    const otpValue = otp.join("");

    if (otpValue.length !== 6) {
      toast.warn("Please enter all 6 digits of the OTP.");
      return;
    }

    const toastId = toast.loading("Verifying OTP...");

    try {
      setIsLoading(true);

      await api.post("/api/auth/verify-otp", {
        email,
        otp: otpValue,
      });

      toast.update(toastId, {
        render: "Account verified! Redirecting to login...",
        type: "success",
        isLoading: true,
        autoClose: 3000,
        closeOnClick: true,
      });

      setTimeout(() => {
        setIsLoading(false);

        navigate("/login", { replace: true })
        toast.update(toastId, {

          isLoading: false,
          autoClose: 4000,
          closeOnClick: true,
        })

      }, 3000);
    } catch (err) {
      const errMessage =
        err?.response?.data?.message || "Invalid or expired OTP.";

      toast.update(toastId, {
        render: errMessage,
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
      });
      setIsLoading(false);

    }
  };
  const resendOtp = async () => {
    try {
      setIsLoading(true)
      await api.post("/api/auth/resend-otp", { email })
      toast.success("A new OTP has been sent to your email.");
    } catch (err) {
      const errMessage = err?.response?.data?.message || "Couldn't resend OTP. Please try again."

      toast.error(errMessage);
    } finally {
      setIsLoading(false)
    }


  }
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
        <p className="font-bold">{email || "JHondoes@gmail.com"}</p>
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
          <Button text={"Verify Email"} isLoading={isLoading} />
        </form>
      </div>

      <div className="flex justify-center items-center">
        <p className="text-gray-400">
          Didn't get the code?{" "}
          <button disabled={isLoading} className={`text-primary font-bold hover:underline disabled:text-gray-400 cursor-pointer`} onClick={resendOtp} >
            Resend code
          </button>
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
