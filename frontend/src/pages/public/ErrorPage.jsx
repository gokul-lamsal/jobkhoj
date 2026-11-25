import React, { useContext } from "react";
import Button from "../../components/global/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RoleDashBoard } from "../../components/auth/RoleProtectedRoute";
import { AuthContext } from "../../context/AuthContext";

const ErrorPage = () => {
  const { pathname } = useLocation();
    const { user } = useContext(AuthContext)
  
  const navigate = useNavigate();
  const currentPath = pathname.split("/")[1]

  const selectError = {
    "not-found": {
      errorType: "404",
      errorMessage: "Page not found.",
      errorDescription:
        "The page you are looking for doesn't exist. It may have been removed by the company or admin.",
      errorColor: "blue",
      goBack: false
    },
    "unauthorized": {
      errorType: "403",
      errorMessage: "You don't have access.",
      errorDescription:
        "Your account role can't open this page. For example, a job seeker trying to open the admin area.",
      errorColor: "red",
      goBack: true
    }
  }
  const error = selectError[currentPath] ?? selectError["not-found"];
  const { errorType, errorDescription, errorMessage, errorColor, goBack } = error;
  const handleBack = () => {
    if (errorType === "403" && user) {
      navigate(RoleDashBoard[user.role], { replace: true })
    } else {
      navigate("/", { replace: true })
    }
  };

  return (
    <div className=" flex justify-center items-center min-h-screen ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center gap-2">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl " style={{ color: errorColor }}>{errorType}</h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">{errorMessage}.</p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">{errorDescription}</p>
          <div className="w-30">

            <Button text="Back" type="button" onClick={handleBack} />
          </div>


        </div>
      </div>

    </div>
  );
};

export default ErrorPage;
