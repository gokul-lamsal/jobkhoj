import React from "react";
import { Outlet } from "react-router-dom";
import AuthSideBar from "../../pages/auth/AuthSideBar";

const AuthLayout = () => {
  return (
    <div className="flex gap-10 justify-center items-center min-h-screen">
      <AuthSideBar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
