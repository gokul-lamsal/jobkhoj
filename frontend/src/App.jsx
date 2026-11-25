import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import HomePage from "./pages/public/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import AuthLayout from "./components/layout/AuthLayout";
import PublicOnlyRoute from "./components/auth/PublicOnlyRoute";
import ConfirmPage from "./pages/auth/ConfirmPage";
import ErrorPage from "./pages/public/ErrorPage";
import RoleProtectedRoute from "./components/auth/RoleProtectedRoute";
import SeekerLayout from "./components/layout/SeekerLayout";
import SeekerDashBoard from "./pages/seeker/SeekerDashBoard";
import Browsepage from "./pages/public/Browsepage";
import CompaniesPage from "./pages/public/CompaniesPage";
import SeekerJobPage from "./pages/seeker/SeekerJobPage";
import SeekerApplication from "./pages/seeker/SeekerApplication";
import SeekerSavedJobPage from "./pages/seeker/SeekerSavedJobPage";
import SeekerNotification from "./pages/seeker/SeekerNotification";
import SeekerSingleCompany from "./pages/seeker/SeekerSingleCompany";
import CompanyLayout from "./components/layout/CompanyLayout";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CompanyDashboard from "./pages/company/CompanyDashboard";
import CompanyJobs from "./pages/company/CompanyJobs";
import SeekerProfile from "./pages/seeker/SeekerProfile";
import CompanyPostJob from "./pages/company/CompanyPostJob";
import CompanyApplicants from "./pages/company/CompanyApplicants";
import CompanyProfile from "./pages/company/CompanyProfile";
import AdminPendingCompany from "./pages/admin/AdminPendingCompany";
import AdminUserList from "./pages/admin/AdminUserList";
import AdminJobList from "./pages/admin/AdminJobList";
import Callback from "./pages/auth/Callback";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

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
          path: "browse/:id",
          element: <SeekerJobPage />,
        },
        {
          path: "/company",
          element: <CompaniesPage />,
        },
        {
          path: "/company/:id",
          element: <SeekerSingleCompany />,
        },
      ],
    },
    {
      element: <PublicOnlyRoute><AuthLayout /></PublicOnlyRoute>,
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
          element: <ConfirmPage />,
        },
        {
          path: "/callback",
          element: <Callback />,
        },
      ],
    },
    {
      path: "/seeker",
      element: <RoleProtectedRoute allowedRoles={"SEEKER"} />,
      children: [
        {
          element: <SeekerLayout />,
          children: [
            {
              path: "",
              element: <SeekerDashBoard />,
            },
            {
              path: "browse",
              element: <Browsepage />,
            },
            {
              path: "browse/:id",
              element: <SeekerJobPage />,
            },
            {
              path: "company/:id",
              element: <SeekerSingleCompany />,
            },
            {
              path: "application",
              element: <SeekerApplication />,
            },
            {
              path: "company",
              element: <CompaniesPage />,
            },
            {
              path: "saved",
              element: <SeekerSavedJobPage />,
            },
            {
              path: "notification",
              element: <SeekerNotification />,
            },
            {
              path: "profile",
              element: <SeekerProfile />,
            },
          ],
        },
      ],
    },
    {
      path: "/employer",
      element: <RoleProtectedRoute allowedRoles={"COMPANY"} />,
      children: [
        {
          element: <CompanyLayout />,
          children: [
            {
              path: "",
              element: <CompanyDashboard />,
            },
            {
              path: "jobs",
              element: <CompanyJobs />,
            },
            {
              path: "post-job",
              element: <CompanyPostJob />,
            },
            {
              path: "jobs/:id",
              element: <CompanyApplicants />,
            },
            {
              path: "profile",
              element: <CompanyProfile />,
            },
          ],
        },
      ],
    },
    {
      path: "/admin",
      element: <RoleProtectedRoute allowedRoles={"ADMIN"} />,
      children: [
        {
          element: <AdminLayout />,
          children: [
            {
              path: "",
              element: <AdminDashboard />,
            },
            {
              path: "pending-companies",
              element: <AdminPendingCompany />,
            },
            {
              path: "users",
              element: <AdminUserList />,
            },
            {
              path: "jobs",
              element: <AdminJobList />,
            },
          ],
        },
      ],
    },
    {
      path: "/unauthorized",
      element: <ErrorPage />,
    },
    {
      path: "/not-found",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <Navigate to={"/not-found"} replace />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
