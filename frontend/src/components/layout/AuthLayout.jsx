import React from "react";
import { Outlet } from "react-router-dom";
import AuthSideBar from "../../pages/auth/AuthSideBar";

const AuthLayout = () => {
  return (
    <div className="grid gap-10 grid-cols-2 min-h-screen ">
      <AuthSideBar />
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-2xl pl-6 pt-10 pb-6 pr-6  flex flex-col  w-full max-w-[600px]  gap-4 border-2 border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
