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
import CompanyCard from "../../components/helpers/CompanyCard"
import PostedJobCard from "../../components/helpers/PostedJobCard"
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
      location: { isRemote: false, city: "Lalitpur, Nepal" },
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

      <section className="flex gap-5">
        <div className=" flex flex-col gap-4 my-4 py-6">
          <div className="flex flex-col gap-5 border-2 rounded-xl px-5 py-5 border-gray-200 bg-white cursor-pointer">
            {/* Header */}
            <div className="flex justify-between items-start gap-4">
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-xl text-white flex items-center justify-center font-bold text-lg bg-purple-700">
                  {jobInfo.company.initials}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-bold text-xl leading-tight text-gray-900">
                    {jobInfo.title}
                  </h3>
                  <span className="text-sm font-medium text-gray-500">
                    {jobInfo.company.name}
                  </span>
                </div>
              </div>
              <div className="shrink-0">
                <Badge
                  type={badgeType[jobInfo.jobType.toLowerCase()]}
                  text={jobInfo.jobType}
                />
              </div>
            </div>

            {/* info */}
            <div className="text-gray-500 flex flex-wrap text-sm gap-x-5 gap-y-2 pl-16 items-center">
              <div className="flex items-center gap-1">
                <MdOutlineLocationOn size={16} className="text-gray-400" />
                <span>{jobInfo.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <FiDollarSign size={16} className="text-gray-400" />
                <span>{jobInfo.salary}</span>
              </div>
              <div className="flex items-center gap-1">
                <CiClock2 size={16} className="text-gray-400" />
                <span>{`Apply before ${jobInfo.applyBefore}`}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-start gap-3 items-center">
              <div className="h-10">
                <Button type="button" text={"Apply now"} />
              </div>
              <button className="h-10 border border-gray-300 px-4 cursor-pointer rounded-xl text-gray-700 hover:bg-gray-50 transition-colors">
                <span className="flex gap-1.5 text-sm font-semibold justify-center items-center">
                  <FaRegBookmark size={16} /> Save Job
                </span>
              </button>
            </div>
          </div>
          
          {/* About  div*/}


          <div className="flex flex-col gap-7 border-gray-200 border-2 px-6 bg-white  py-6 rounded-xl">
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-lg text-gray-900">About the role</h2>
              <p className="text-sm leading-relaxed text-gray-600">
                {jobInfo.about}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-lg text-gray-900">What you will do</h2>
              <ul className="list-disc pl-5 flex flex-col gap-2.5 marker:text-gray-400">
                {jobInfo.responsibilities.map((task, i) => (
                  <li key={i} className="text-sm leading-relaxed text-gray-600 pl-1">
                    {task}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-3">
              <h2 className="font-bold text-lg text-gray-900">Required skills</h2>
              <div className="flex flex-wrap gap-2">
                {jobInfo.requiredSkills.map((skill, i) => (
                  <Badge key={i} type="search" text={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 my-4 py-6">
          {/* Job overview */}
          <div className="flex flex-col gap-5 border-2   border-gray-200 bg-white rounded-xl px-5 py-6">
            <h2 className="font-bold text-lg text-gray-900">Job Overview</h2>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
                <MdEventNote size={18} className="text-gray-400" /> Posted
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {jobInfo.postedAt}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
                <CiClock2 size={18} className="text-gray-400" /> Apply before
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {jobInfo.applyBefore}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
                <FiBriefcase size={18} className="text-gray-400" /> Job type
              </span>
              <Badge
                type={badgeType[jobInfo.jobType.toLowerCase()]}
                text={jobInfo.jobType}
              />
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
                <FiDollarSign size={18} className="text-gray-400" /> Salary
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {jobInfo.salary}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-500 flex items-center gap-1.5">
                <LuUsers size={18} className="text-gray-400" /> Applicants
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {jobInfo.applicants}
              </span>
            </div>
          </div>

          <CompanyCard
            isBrowse={true}
            accentColor={"purple"}
            name={jobInfo.company.name}
            initials={jobInfo.company.initials}
            location={jobInfo.company.location}
            description={jobInfo.company.description}
            website={jobInfo.company.website}
          />

          {/* More from this company */}
          <div className="flex flex-col gap-5 border-2   border-gray-200 bg-white rounded-xl px-5 py-6">
            <h2 className="font-bold text-lg text-gray-900">
              More from this company
            </h2>
            {jobInfo.moreFromCompany.map((moreJobs, i) => (
              <Link to={`/seeker/browse/${moreJobs.id}`}>
                <div key={i} className="flex gap-3 justify-between items-center hover:scale-105 transition-all duration-200">
                  <div className="flex gap-3 items-center min-w-0">
                    <div
                      className={`h-12 w-12 shrink-0 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-linear-to-b ${gradients[moreJobs.accentColor]}`}
                    >
                      {moreJobs.initials}
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <h3 className="font-semibold text-base text-gray-900 truncate">
                        {moreJobs.title}
                      </h3>
                      <span className="text-xs font-medium text-gray-500">
                        {moreJobs.company}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Badge
                      type={badgeType[moreJobs.jobType.toLowerCase()]}
                      text={moreJobs.jobType}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeekerJobPage;
