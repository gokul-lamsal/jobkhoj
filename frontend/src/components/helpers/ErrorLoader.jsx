import React from "react";
import { MdErrorOutline } from "react-icons/md";
import {  useNavigate } from "react-router-dom";

const ErrorLoader = ({
  message = "Something went wrong. Please try again later.",
  redirectTo="/",
  btnText = "Try again"
}) => {
    const navigate = useNavigate()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
      <MdErrorOutline className="text-5xl text-red-500" />
      <p className="text-sm font-medium text-gray-500">{message}</p>
      <button
        onClick={() => {
          redirectTo ? navigate(redirectTo) : window.location.reload();
        }}
        className="mt-2 rounded-md bg-primary px-4 py-2 text-sm text-white hover:opacity-90"
      >
       {btnText}
      </button>
    </div>
  );
};

export default ErrorLoader;
