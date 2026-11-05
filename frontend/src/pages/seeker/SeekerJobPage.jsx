import React, { useState } from "react";
import { badgeType, gradients } from "../../components/helpers/ColorAndBadge";
import { FaBookmark, FaLink, FaRegBookmark } from "react-icons/fa";
import Badge from "../../components/global/Badge";
import { MdEventNote, MdOutlineLocationOn } from "react-icons/md";
import { FiBriefcase, FiDollarSign } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import Button from "../../components/global/Button";
import { LuUsers } from "react-icons/lu";
import Footer from "../../components/global/Footer";

const SeekerJobPage = () => {
  {
    /* use this info to build dummy aaile ko lagi paxi yo json change huna sakxa , for now build ui yei use garera
  yo page only seeker lai ho so Auth context ma userToken kei hunu parxa , so null bata hatayera string rakheko
  if u remove the string u cant accesss this page so tyo rakha 

  job page : /seeker/job/{id}

  gg ngga banau majale ani buje paxi yo cmt hatau

  "maile bujina banai deko xu aafai k garnu parne banau" - SHital Rai to Gokte
  
  */
  }

  const onlyUrl = (url) => {
    const splitUrl = url.split("https://");
    if (splitUrl.length < 2) return url;
    return splitUrl[splitUrl.length - 1];
  };

  const [jobInfo, setJobInfo] = useState({
    id: 1,
    title: "Frontend Developer",
    jobType: "Full time",
    location: "Lalitpur, Nepal",
    salary: "NPR 50k-70k",
    postedAt: "2 days ago",
    applyBefore: "30 Nov 2026",
    applicants: "24 so far",

    about:
      "We are looking for a Frontend Developer to build fast, accessible interfaces for our SaaS products. You will work closely with designers and backend engineers to ship features every week.",

    responsibilities: [
      "Build responsive pages with React and Tailwind CSS",
      "Connect screens to REST APIs and handle loading and error states",
      "Review code and improve performance across the app",
    ],

    requiredSkills: ["React", "Tailwind CSS", "REST APIs", "Git", "JavaScript"],

    company: {
      name: "TechCorp Pvt Ltd",
      initials: "TC",
      location: "Lalitpur, Nepal",
      description:
        "TechCorp is a leading industry player focusing on innovative solutions.",
      website: "https://techcorp.com",
    },

    moreFromCompany: [
      {
        id: 2,
        title: "Full Stack Engineer",
        company: "InnoLabs",
        initials: "IL",
        accentColor: "blue",
        jobType: "Full time",
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "InnoLabs",
        initials: "IL",
        accentColor: "blue",
        jobType: "Contract",
      },
      {
        id: 4,
        title: "DevOps Intern",
        company: "Global Solutions",
        initials: "GS",
        accentColor: "green",
        jobType: "Internship",
      },
    ],
  });
  return (
    <main >
      <section className="pt-4 flex gap-3 items-center">
        <Link to="/browse">
        <p className="text-gray-400 text-md cursor-pointer">Job</p>
        </Link>
        <span className="text-gray-400 text-md">{">"}</span>
        <p className="text-gray-400 text-md cursor-pointer">{jobInfo.company.name}</p>
        <span className="text-gray-400 text-md">{">"}</span>
        <p className="text-md font-bold cursor-pointer">{jobInfo.title}</p>
      </section>
      <section className="flex">
        <section className=" flex flex-col gap-4 my-4 py-6">
          <div className="flex flex-col gap-4 border-2 rounded-xl px-4 py-6 border-gray-300 bg-white cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="flex gap-4 ">
                <div
                  className={`h-13 w-13 rounded-xl text-white flex items-center justify-center font-bold text-lg bg-purple-700`}
                >
                  {jobInfo.company.initials}
                </div>
                <div className="flex flex-col ">
                  <h3 className="font-extrabold -mt-0.5 text-3xl">
                    {jobInfo.title}
                  </h3>
                  <span className=" text-sm  -mt-0.5 font-semibold text-gray-400">
                    {jobInfo.company.name}
                  </span>
                </div>
              </div>
              <div>
                <Badge
                  type={badgeType[jobInfo.jobType.toLowerCase()]}
                  text={jobInfo.jobType}
                />
              </div>
            </div>
            <div className="text-gray-400 flex text-sm gap-4 pl-16 items-center">
              <div className="flex items-center gap-0.5">
                <span>
                  <MdOutlineLocationOn size={17} />
                </span>
                <span>{jobInfo.location}</span>
              </div>
              <div className="flex items-center gap-0.5">
                <span>
                  <FiDollarSign size={17} />
                </span>
                <span>{jobInfo.salary}</span>
              </div>
              <div className="flex items-center gap-0.5">
                <span>
                  <CiClock2 size={17} />
                </span>
                <span>{`Apply before ${jobInfo.applyBefore}`}</span>
              </div>
            </div>
            <div className="flex justify-start gap-4 items-center">
              <Link to={``}>
                <div className="h-10.5 text-center">
                  <Button type="button" text={"Apply now"} />
                </div>
              </Link>
              <button
                className={`self-start border border-gray-400 px-4 font-bold cursor-pointer py-1.5 rounded-xl`}
              >
                <span className="flex gap-1 text-lg font-semibold justify-center items-center">
                  <FaRegBookmark size={20} /> Save Job
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 border-gray-300 border-2 bg-white p-4 rounded-xl">
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold -mt-0.5 text-lg">About the role</h1>
              <p className=" text-sm  -mt-0.5 font-semibold text-gray-400">
                {jobInfo.about}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold -mt-0.5 text-lg">
                What you will do
              </h1>
              <ul className="list-disc pl-4 flex flex-col gap-4">
                {jobInfo.responsibilities.map((task, i) => (
                  <li
                    key={i}
                    className="text-sm -mt-0.5 font-semibold text-gray-400"
                  >
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold -mt-0.5 text-lg">
                Required skills
              </h1>
              <div className="flex gap-4">
                {jobInfo.requiredSkills.map((skill, i) => (
                  <p className=" text-sm  -mt-0.5 font-bold text-purple-600 bg-purple-200 p-1 rounded-sm ">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className=" flex flex-col gap-4 my-4 py-6">
          <div className="flex flex-col gap-4 border-2 w-[23rem] border-gray-400 rounded-xl px-4 py-8">
            <h1 className="font-extrabold -mt-0.5 text-lg">Job Overview</h1>
            <div className="flex justify-between items-center">
              <span className=" text-sm -mt-0.5 font-bold text-gray-400 flex items-center gap-0.5">
                <MdEventNote size={18} /> posted
              </span>
              <span className="text-sm -mt-0.5 font-bold">
                {jobInfo.postedAt}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-sm -mt-0.5 font-bold text-gray-400 flex items-center gap-0.5">
                <CiClock2 size={18} /> posted
              </span>
              <span className="text-sm -mt-0.5 font-bold">
                {jobInfo.applyBefore}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-sm -mt-0.5 font-bold text-gray-400 flex items-center gap-0.5">
                <FiBriefcase size={18} /> Job type
              </span>
              <span className="text-sm -mt-0.5 font-bold">
                <Badge
                  type={badgeType[jobInfo.jobType.toLowerCase()]}
                  text={jobInfo.jobType}
                />
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-sm -mt-0.5 font-bold text-gray-400 flex items-center gap-0.5">
                <FiDollarSign size={18} /> Salary
              </span>
              <span className="text-sm -mt-0.5 font-bold">
                {jobInfo.salary}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className=" text-sm -mt-0.5 font-bold text-gray-400 flex items-center gap-0.5">
                <LuUsers size={18} /> Applicants
              </span>
              <span className="text-sm -mt-0.5 font-bold">
                {jobInfo.applicants}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-2 w-[23rem] border-gray-400 rounded-xl px-4 py-8">
            <div className="flex gap-4 ">
              <div
                className={`h-13 w-13 rounded-xl text-white flex items-center justify-center font-bold text-lg bg-purple-700`}
              >
                {jobInfo.company.initials}
              </div>
              <div className="flex flex-col ">
                <h3 className="font-bold -mt-0.5 text-lg">
                  {jobInfo.company.name}
                </h3>
                <span className=" text-sm  -mt-0.5 font-semibold text-gray-400">
                  {jobInfo.company.location}
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold -mr-0.5 text-gray-400">
                {jobInfo.company.description}
              </p>
            </div>
            <div>
              <a
                href={jobInfo.company.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-purple-500 hover:underline flex items-center gap-1.5 text-[15px] font-semibold">
                  <FaLink />
                  {onlyUrl(jobInfo.company.website)}
                </div>
              </a>
            </div>
            <div>
              <Button
                // extraCss={{ backgroundColor: "white", color: "black" }}
                text={"View company"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 border-2 w-[23rem] border-gray-400 rounded-xl px-4 py-8">
            <h1 className="font-extrabold -mt-0.5 text-lg">
              More from this company
            </h1>
            {jobInfo.moreFromCompany.map((moreJobs, i) => (
              <div className="flex gap-2 justify-between">
                <div className="flex gap-4 ">
                  <div
                    className={`h-13 w-13 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-linear-to-b ${gradients[moreJobs.accentColor]}`}
                  >
                    {moreJobs.initials}
                  </div>
                  <div className="flex flex-col ">
                    <h3 className="font-bold -mt-0.5 text-md">
                      {moreJobs.title}
                    </h3>
                    <span className=" text-[12px] -mt-0.5 font-semibold text-gray-400">
                      {moreJobs.company}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-sm -mt-0.5 font-bold">
                    <Badge
                      type={badgeType[moreJobs.jobType.toLowerCase()]}
                      text={moreJobs.jobType}
                    />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default SeekerJobPage;
