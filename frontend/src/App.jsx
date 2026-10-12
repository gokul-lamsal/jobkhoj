import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import HomePage from "./pages/public/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import AuthLayout from "./components/layout/AuthLayout";

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
          path: "/home",
          element: <HomePage />,
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
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
