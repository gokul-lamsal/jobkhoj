import React from "react";
import { FaArrowRight, FaRegBookmark, FaRegCircleCheck } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import React, { useState } from "react";
import {
  FaAngleRight,
  FaArrowRight,
  FaBookmark,
  FaCheck,
  FaLink,
  FaLocationArrow,
  FaRegBookmark,
  FaRegCircleCheck,
} from "react-icons/fa6";
import { FiClock, FiDollarSign } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import PostedJobCard from "../../components/helpers/PostedJobCard";
import { badgeType, gradients } from "../../components/helpers/ColorAndBadge";
import { MdOutlineAddLocationAlt, MdOutlineLocationOn } from "react-icons/md";
import Badge from "../../components/global/Badge";
import Tag from "../../components/global/Tag";
import { LuBuilding, LuUserRound } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { CiLocationArrow1 } from "react-icons/ci";

function SeekerDashBoard() {
  const onlyUrl = (url) => {
    const splitUrl = url.split("https://");
    if (splitUrl.length < 2) return url;
    return splitUrl[splitUrl.length - 1];
  };

  const [jobInfo, setJobInfo] = useState({
    jobs: [
      {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp Pvt Ltd",
        initials: "TC",
        jobType: "Full time",
        location: "Lalitpur, Nepal",
        accentColor: "purple",
        salary: "NPR 50k-70k",
        postedAgo: "posted 2 days ago",
        applydue: "apply before 30 Nov 2026",
        status: "pending",
      },
      {
        id: 2,
        title: "Full Stack Engineer",
        company: "InnoLabs",
        location: "Lalitpur, Nepal",
        initials: "IL",
        accentColor: "blue",
        jobType: "Internship",
        salary: "NPR 50k-70k",
        postedAgo: "posted 3 days ago",
        applydue: "applly before 05 Sep 2026",
        status: "Accepted",
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "InnoLabs",
        location: "Kathmandu, Nepal",
        initials: "IL",
        accentColor: "blue",
        salary: "NPR 50k-70k",
        jobType: "Contract",
        postedAgo: "posted 5 days ago",
        applydue: "apply before 08 Oct 2026",
        status: "Pending",
      },
    ],
    companies: [
      {
        id: "comp_01",
        name: "TechCorp Pvt Ltd",
        initials: "TC",
        slug: "techcorp-pvt-ltd",
        accentColor: "indigo",
        location: { city: "Lalitpur", country: "Nepal", isRemote: false },
        description:
          "TechCorp Pvt Ltd is a leading industry player focusing on innovative solutions.",
        website: "https://techcorp.com",
      },
      {
        id: "comp_02",
        name: "InnoLabs",
        initials: "IL",
        slug: "innolabs",
        accentColor: "blue",
        location: { city: "Kathmandu", country: "Nepal", isRemote: false },
        description:
          "InnoLabs is a leading industry player focusing on innovative solutions.",
        website: "https://innolabs.com",
      },
      {
        id: "comp_03",
        name: "Global Solutions",
        initials: "GS",
        slug: "global-solutions",
        accentColor: "green",
        location: { city: null, country: null, isRemote: true },
        description:
          "Global Solutions is a leading industry player focusing on innovative solutions.",
        website: "https://globalsolutions.com",
      },
    ],
    notification: [
      {
        id: "notification-1",
        title: "Application Status Updated",
        message: "Your application for Frontend Developer has been accepted",
        type: "APPLICATION_UPDATE",
        isRead: false,
        createdAt: "2026-11-17",
      },
      {
        id: "notification-2",
        title: "Application Status Updated",
        message: "Your application for UI/UX Designer has been rejected",
        type: "APPLICATION_UPDATE",
        isRead: false,
        createdAt: "2026-11-16",
      },
      {
        id: "notification-3",
        title: "Application Status Updated",
        message: "Your application for DevOps Intern has been accepted",
        type: "APPLICATION_UPDATE",
        isRead: true,
        createdAt: "2026-11-10",
      },
    ],
  });

  const stats = [
    {
      label: "Applications",
      value: 12,
      color: "text-blue-600",
      bg: "bg-blue-200",
      Icon: IoDocumentTextOutline,
    },
    {
      label: "Pending",
      value: 7,
      color: "text-orange-600",
      bg: "bg-orange-200",
      Icon: FiClock,
    },
    {
      label: "Accepted",
      value: 3,
      color: "text-green-600",
      bg: "bg-green-200",
      Icon: FaRegCircleCheck,
    },
    {
      label: "saved jobs",
      value: 8,
      color: "text-purple-600",
      bg: "bg-purple-200",
      Icon: FaRegBookmark,
    },
  ];

  const date = new Date();
  const formatted = date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return (
    <main className="my-8 flex flex-col justify-center">
      <section className="flex flex-col gap-6">
        <div className="flex justify-between items-center py-10 px-8 rounded-2xl bg-primary">
          <div className="flex flex-col gap-1">
            <p className="text-white text-md font-bold">{formatted}</p>
            <h1 className="text-white text-3xl font-bold">
              Good morning, John
            </h1>
            <p className="text-white text-md">
              You have 7 pending applications and 2 unread notifications.
            </p>
          </div>
          <div>
            <Link to={"/browse"}>
              <span className="px-2 py-2 rounded-4xl font-semibold text-lg flex items-center cursor-pointer gap-2 bg-white">
                Browse jobs{" "}
                <FaArrowRight
                  size={45}
                  color="white"
                  className="border p-2 rounded-4xl bg-primary"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          {stats.map(({ label, value, color, Icon, bg }) => (
            <div key={label} className="bg-white border border-gray-300 rounded-2xl shadow-sm px-5 py-6 flex items-center gap-3">
              <div className={`p-4 rounded-2xl ${bg} ${color}`}>
                <Icon size={20} />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900">
                  {value}
                </h1>
                <p className={`text-sm font-medium text-gray-500`}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-8 flex gap-6 min-w-full">
        <div className="flex flex-col gap-8 w-[75%]">

          {/* start of latest jop section */}
          <div className="flex flex-col gap-4 py-4 px-5 border-2 border-gray-300 bg-white cursor-pointer rounded-2xl">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold">Latest jobs</h1>
                <p className="text-sm text-gray-500">
                  Newest openings from approved companies
                </p>
              </div>
              <div>
                <Link to={"/browse"}>
                  <span className="text-purple-700 cursor-pointer">
                    Browse all jobs
                  </span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 ">
              {jobInfo.jobs.map((job, i) => {
                return (
                  <Link to={"/seeker/browse/1"} key={i}  className=" py-4 group px-5 flex flex-col gap-4 bg-white cursor-pointer rounded-2xl hover:scale-102 transition-all duration-200 ">
                    <div className="flex justify-between ">
                      <div className="flex gap-4 items-center">
                        <div
                          className={`h-13 w-13 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-linear-to-b ${gradients[job.accentColor]}`}
                        >
                          {job.initials}
                        </div>
                        <div className="flex flex-col gap-1 ">
                          <div className="flex gap-2">
                            <h3 className="font-bold -mt-0.5 text-lg">
                              {job.title}
                            </h3>
                            <div className="shrink-0">
                              <Badge
                                type={badgeType[job.jobType.toLowerCase()]}
                                text={job.jobType}
                              />
                            </div>
                          </div>
                          <div className="text-gray-400 flex text-sm gap-4 items-center">
                            <div>
                              <span className=" text-sm  -mt-0.5 font-semibold text-gray-400">
                                {job.company}
                              </span>
                            </div>
                            <div className="flex items-center gap-0.5">
                              <span>
                                <MdOutlineLocationOn size={17} />
                              </span>
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-0.5">
                              <span>
                                <FiDollarSign size={17} />
                              </span>
                              <span>{job.salary}</span>
                            </div>
                          </div>
                          <div className="text-gray-400 flex text-sm gap-4 items-center">
                            <span className=" text-sm  -mt-0.5 font-semibold text-gray-400">
                              {job.postedAgo}
                            </span>
                            <span className=" text-sm  -mt-0.5 font-semibold text-gray-400">
                              {job.applydue}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="inline-flex group-hover:text-blue-800 transition-colors duration-200 group-hover:border-blue-600 items-center justify-center border-2 border-gray-300 rounded-lg p-2">
                          <FaLocationArrow size={25} />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* start of the  comapanies card section  */}
          <div className="flex flex-col gap-4 py-4 px-5 border-2 border-gray-300 bg-white cursor-pointer rounded-2xl">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-xl font-bold">Companies</h1>
                <p className="text-sm text-gray-500">
                  Approved employers on Lunar Portal
                </p>
              </div>
              <div>
                <Link to={"/company"}>
                  <span className="text-purple-700 cursor-pointer font-semibold">
                    Browse companies
                  </span>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {jobInfo.companies.map((companyInfo, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-6 border-2 border-gray-300 rounded-2xl px-4 py-8"
                >
                  <div className="flex gap-3">
                    <div
                      className={`h-13 w-13 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-linear-to-b ${gradients[companyInfo.accentColor]}`}
                    >
                      {companyInfo.initials}
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-bold -mt-0.5 ml-0.5 text-lg">
                        {companyInfo.name}
                      </h3>
                      <div className="flex gap-1 items-center -mt-0.5 text-sm text-gray-500">
                        <MdOutlineAddLocationAlt size={16} />
                        <div>
                          {companyInfo.location.isRemote ? (
                            <span>Remote</span>
                          ) : (
                            <span>
                              {companyInfo.location.city},{" "}
                              {companyInfo.location.country}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[0.92rem] text-gray-600">
                    {companyInfo.description.length > 120
                      ? companyInfo.description.slice(0, 120) + "..."
                      : companyInfo.description}
                  </div>
                  <div>
                    <a
                      href={companyInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="text-purple-500 hover:underline flex items-center gap-1.5 text-[15px] font-semibold">
                        <FaLink />
                        {onlyUrl(companyInfo.website)}
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
         
         {/* start of the left side (Quick actions section)  */}

        <div className=" flex flex-col gap-6 w-[25%]">
          <div className="flex flex-col gap-4 border-2 border-gray-300 rounded-2xl px-4 py-6">
            <h1 className="text-xl font-bold">Quick actions</h1>
            <Link to={"/seeker/saved"}>
              <div className="flex items-center border border-gray-300 cursor-pointer rounded-xl px-3 py-4 gap-4">
                <span className="inline-flex p-2 rounded-lg bg-purple-300">
                  <FaRegBookmark size={20} color="purple" />
                </span>

                <div className="flex flex-1 items-center justify-between">
                  <p className="font-semibold">View saved jobs</p>
                  <FaAngleRight size={20} />
                </div>
              </div>
            </Link>

            <Link to={"/"}>
              <div className="flex items-center border border-gray-300 cursor-pointer rounded-xl px-3 py-4 gap-4">
                <span className="inline-flex p-2 rounded-lg bg-green-200">
                  <LuUserRound size={20} color="green" />
                </span>

                <div className="flex flex-1 items-center justify-between">
                  <p className="font-semibold">Edit my profile</p>
                  <FaAngleRight size={20} />
                </div>
              </div>
            </Link>

            <Link to={"/company"}>
              <div className="flex items-center border cursor-pointer border-gray-300 rounded-xl px-3 py-4 gap-4">
                <span className="inline-flex p-2 rounded-lg bg-orange-200">
                  <LuBuilding size={20} color="orange" />
                </span>

                <div className="flex flex-1 items-center justify-between">
                  <p className="font-semibold">Browse companies</p>
                  <FaAngleRight size={20} />
                </div>
              </div>
            </Link>
          </div>

          {/* start of the notification section  */}

          <div className="flex flex-col gap-1 border-2 border-gray-300 rounded-2xl px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <h1 className="text-xl font-bold">Notification</h1>
                <span>
                  <Badge text={"Live"} type={"success"} />
                </span>
              </div>
              <div>
                <span className="text-purple-600 text-lg cursor-pointer">
                  View all
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              {jobInfo.notification.map((info, i) => (
                <div className="flex gap-4 px-2 py-4">
                  <div>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      size={15}
                      className="cursor-pointer"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-md font-semibold">{info.title}</h1>
                    <p className="text-gray-400 text-sm">{info.message}</p>
                    <span className="text-gray-400 text-sm">
                      {info.createdAt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SeekerDashBoard;
