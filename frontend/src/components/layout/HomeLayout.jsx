import { Outlet } from "react-router-dom";
import Footer from "../global/Footer";
import SeekerNavBar from "../../pages/seeker/SeekerNavBar";

const HomeLayout = () => {
  return (
    <>
      <SeekerNavBar navLinks={
        [
          {
            title: "Home",
            location: "/",
          },
          {
            title: "Browse Jobs",
            location: "/browse",
          },
          {
            title: "Companies",
            location: "/company",
          },
        ]
      } />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
