import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import HomePage from "./pages/public/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import AuthLayout from "./components/layout/AuthLayout";
import ConfirmPage from "./pages/auth/ConfirmPage";
import ErrorPage from "./pages/public/ErrorPage";
import RoleProtectedRoute from "./components/auth/RoleProtectedRoute";
import SeekerLayout from "./components/layout/SeekerLayout";
import SeekerNavBar from "./pages/seeker/SeekerNavBar";
import SeekerDashBoard from "./pages/seeker/SeekerDashBoard";
import Browsepage from "./pages/public/Browsepage";
import CompaniesPage from "./pages/public/CompaniesPage";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/browse",
          element: <Browsepage />,
        },
        {
          path: "/company",
          element: <CompaniesPage />,
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,

        },
        {
          path: "/confirm",
          element: <ConfirmPage />
        }
      ],
    },
    {
      path: "/seeker",
      element: <RoleProtectedRoute allowedRoles={"seeker"} />,
      children: [
        {
          element: <SeekerLayout />,
          children: [
            {
              path: "dashboard",
              element: <SeekerDashBoard />
            }
          ]
        }

      ]
    },
    {
      path: "/unauthorized",
      element: <ErrorPage />
    },
    {
      path: "/not-found",
      element: <ErrorPage />
    },
    {
      path: "*",
      element: <Navigate to={"/not-found"} replace />
    }
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
