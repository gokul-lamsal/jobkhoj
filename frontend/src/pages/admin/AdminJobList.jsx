import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Badge from "../../components/global/Badge";
import {
  badgeType,
  gradients,
  statusBadge,
} from "../../components/helpers/ColorAndBadge";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from "../../components/global/Button";
import { FiEdit3, FiUsers } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import Pagination from "../../components/global/Pagination";

const AdminJobList = () => {
  const [jobInfo, setJobInfo] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Pvt Ltd",
      initials: "TC",
      jobType: "Full time",
      location: "Lalitpur, Nepal",
      postedAt: "2 days ago",
      accentColor: "purple",
      salary: "NPR 50k-70k",
      deadline: "30 Nov 2026",
      status: "Active",
      applicants: "24 applicants",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "InnoLabs",
      location: "Lalitpur, Nepal",
      initials: "IL",
      accentColor: "blue",
      jobType: "Internship",
      postedAt: "2 days ago",
      deadline: "05 Sep 2026",
      salary: "NPR 50k-70k",
      status: "Active",
      applicants: "12 applicants",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "InnoLabs",
      location: "Kathmandu, Nepal",
      initials: "IL",
      accentColor: "blue",
      postedAt: "2 days ago",
      salary: "NPR 50k-70k",
      jobType: "Contract",
      deadline: "08 Oct 2026",
      status: "closed",
      applicants: "8 applicants",
    },
    {
      id: 4,
      title: "DevOps Intern",
      company: "Global Solutions",
      location: "Remote",
      initials: "GS",
      accentColor: "green",
      jobType: "Internship",
      postedAt: "2 days ago",
      salary: "NPR 50k-70k",
      deadline: "29 Sep 2026",
      status: "active",
      applicants: "17 applicants",
    },
    {
      id: 5,
      title: "Python Developer",
      company: "Global Solutions",
      initials: "GS",
      accentColor: "green",
      location: "Remote",
      jobType: "Full time",
      postedAt: "2 days ago",
      deadline: "30 Nov 2026",
      status: "closed",
      salary: "NPR 50k-70k",
      applicants: "3 applicants",
    },
  ]);
  const [currentStatus, setCurrentStatus] = useState("All");
  const stats = [
    {
      label: "Active jobs",
      value: 4,
      textColor: "text-green-400",
      color: "text-purple-600",
      bg: "bg-purple-200",
    },
    {
      label: "Total applicants",
      value: 64,
      textColor: "text-blue-400",
      color: "text-blue-600",
      bg: "bg-blue-200",
    },
    {
      label: "Waiting for review",
      value: 21,
      textColor: "text-orange-400",
      color: "text-orange-600",
      bg: "bg-orange-200",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl">Jobs</h1>
        <p className="text-sm text-gray-400">
          Remove jobs that breaks the rules. Deleting also removes their
          applications.
        </p>
      </div>
      <div className="border  mt-4 flex gap-3 border-gray-300  py-4.5 px-5 bg-white rounded-t-2xl">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-2 w-[25rem] mt-4">
            <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
              <p className="text-gray-600">
                <HiMagnifyingGlass />
              </p>

              <input
                type="text"
                name="search"
                id="search"
                className="outline-none w-full text-gray-600"
                placeholder="Search jobs or companies"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Table parts begins */}
      <div className="w-full overflow-hidden  border border-t-0 border-gray-300 ">
        <table className="border w-full text-left">
          <thead className="border-b  border-gray-300">
            <tr className="text-[14px] uppercase tracking-wider  text-gray-500">
              <th className=" py-4.5 px-5 font-semibold">JOBS</th>
              <th className=" py-4.5 px-5 font-semibold">TYPE</th>
              <th className=" py-4.5 px-5 font-semibold">LOCATION</th>
              <th className=" py-4.5 px-5 font-semibold">SALARY</th>
              <th className=" py-4.5 px-5 font-semibold">STATUS</th>
              <th className=" py-4.5 px-5 font-semibold">POSTED</th>
              <th className=" py-4.5 px-5 font-semibold"></th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {jobInfo.map((job) => {
              return (
                <tr key={job.id}>
                  <td className=" py-4.5 px-5 font-semibold">
                    <div className="flex gap-3 items-center">
                      <div
                        className={`h-11 w-11 rounded-xl flex items-center justify-center text-white font-bold text-sm bg-linear-to-b ${gradients[job.accentColor]}`}
                      >
                        {job.initials}
                      </div>
                      <div className="flex flex-col ">
                        <h3 className="font-bold -mt-0.5 ">{job.title}</h3>
                        <span className=" text-[13px]  -mt-0.5 font-semibold text-gray-400">
                          {job.company}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Badge
                      type={badgeType[job.jobType.toLowerCase()]}
                      text={job.jobType}
                    />
                  </td>
                  <td className=" py-4.5 px-5  text-gray-500">
                    {job.location}
                  </td>
                  <td className=" py-4.5 px-5 ">{job.salary}</td>
                  <td className=" py-4.5 px-5 font-semibold">
                    {
                      <Badge
                        type={statusBadge[job.status.toLowerCase()]}
                        text={"● " + job.status}
                      />
                    }
                  </td>
                  <td className=" py-4.5 px-5 ">{job.postedAt}</td>

                  <td className="flex justify-center items-center  gap-2 py-4.5 px-5 font-semibold">
                    <div className="h-10 w-14">
                      <Link to={`/browse/${job.id}`}>
                        <Button
                          type="button"
                          text={
                            <>
                              <FaRegEye />
                            </>
                          }
                          btnType="secondary"
                          className="text-gray-600"
                        />
                      </Link>
                    </div>
                    <div className="h-10 w-14 rounded-xl hover:cursor-pointer flex justify-center items-center bg-red-100">
                      <button className="text-red-600 hover:cursor-pointer">
                        <RiDeleteBinLine size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="border justify-between   flex gap-3 border-gray-300  py-4.5 px-5 bg-white rounded-b-2xl">
        <div className="text-gray-400">Showing 1 to 5 of 536 jobs</div>
        <div>
          <Pagination totalPages={22} />
        </div>
      </div>
    </div>
  );
};

export default AdminJobList;
