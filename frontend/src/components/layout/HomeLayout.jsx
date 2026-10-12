import { Outlet } from "react-router-dom";
import NavBar from "../global/NavBar";
import Footer from "../global/Footer";

const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
