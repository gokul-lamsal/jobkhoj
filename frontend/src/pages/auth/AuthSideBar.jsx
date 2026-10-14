import React, { useEffect, useRef, useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Badge from "../../components/global/Badge";

const AuthSideBar = () => {
  const [demoCompany, setDemoCompany] = useState([
    {
      title: "Frontend Developer",
      company: "Himalayan Tech",
      location: "Lalitpur",
      logo: "HT",
      tags: ["Full time", "NPR 60k-90k"],
      isActive: true,
    },
    {
      title: "UI/UX Designer",
      company: "PixelNepal",
      location: "Kathmandu",
      logo: "PN",
      tags: ["Contract", "NPR 50k-75k"],
      isActive: false,
    },
    {
      title: "Backend Engineer",
      company: "CodeMandu",
      location: "Bhaktapur",
      logo: "CM",
      tags: ["Part time", "NPR 40k-65k"],
      isActive: false,
    },
  ]);
  useEffect(() => {
    const handleSlide = () => {
      setDemoCompany((prev) => {
        const activeIndex = prev.findIndex((e) => e.isActive);
        const nextIndex = (activeIndex + 1) % prev.length;
        return prev.map((e, index) => ({
          ...e,
          isActive: index === nextIndex,
        }));
      });
    };

    const id = setInterval(handleSlide, 1800);
    return () => clearInterval(id); 
  }, []);
  return (
    <div className="bg-indigo-700 flex flex-col justify-between pl-[4rem] pt-[2rem] ">
      <div className="flex items-center gap-2">
        <div className="font-bold flex items-center justify-center rounded-lg text-xl w-8 h-8 text-center bg-amber-50">
          <span>L</span>
        </div>
        <h1 className="text-xl font-bold text-white">Lunar portal</h1>
      </div>
      <div className="flex  flex-col gap-3">
        <div>
          <h1 className="text-3xl  text-white font-extrabold">
            Your next opportunity
          </h1>
          <h1 className="text-3xl text-white font-extrabold">starts here.</h1>
        </div>
        <div className=" relative  h-[8rem] flex flex-col">
          {demoCompany.map((item, index) => {
            return (
              <div
                className=" rounded-2xl transition-all duration-700 ease-out absolute w-[30rem] h-[8rem]  p-4 bg-white/20 border-white/20 backdrop-blur-xl"
                key={item.title}
                style={{
                  opacity: item.isActive ? 1 : 0,
                  filter: item.isActive ? "blur(0px)" : "blur(6px)",
                }}
              >
                <div className="flex gap-2 ">
                  <div>
                    <h1 className="font-bold text-xl  w-13 h-13 rounded-2xl text-white flex justify-center items-center bg-[#1687E8]">
                      {item.logo}
                    </h1>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-xl font-bold text-white">
                      {item.title}
                    </h1>
                    <h1 className="text-sm text-gray-400 font-bold">
                      {item.company} • {item.location}
                    </h1>
                  </div>
                </div>
                <div className="flex p-2 gap-2">
                  {item?.tags.map((tag) => {
                    return <Badge text={tag} />;
                  })}
                </div>
                <div className="z-10  flex flex-col gap-2 absolute right-0 -translate-y-1/2 top-1/2 p-5">
                  {demoCompany.map((e, i) => {
                    return (
                      <div
                        className={`h-2 w-2 ${e.isActive ? "bg-white" : "bg-gray-400"} rounded-3xl`}
                        key={e.title}
                      ></div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <p className="text-white text-lg flex gap-2 items-center">
            <IoMdCheckmarkCircleOutline />
            One profile, unlimited applications
          </p>
          <p className="text-white text-lg flex gap-2 items-center">
            <IoMdCheckmarkCircleOutline />
            Track every application status
          </p>
          <p className="text-white text-lg flex gap-2 items-center">
            <IoMdCheckmarkCircleOutline />
            Instant notification
          </p>
        </div>
      </div>
      <div className="pb-6">
        <p className="text-white text-md">
          &copy; {new Date().getFullYear()} Lunar Portal
        </p>
      </div>
    </div>
  );
};

export default AuthSideBar;
