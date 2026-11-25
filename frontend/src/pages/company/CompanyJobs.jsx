import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/global/Button";
import { FiPlus } from "react-icons/fi";
import { StatsCard } from "../seeker/SeekerDashBoard";
import {
  badgeType,
  formattedDate,
  gradients,
  statusBadge,
} from "../../components/helpers/ColorAndBadge";
import Badge from "../../components/global/Badge";
import { FaPlus } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FiUsers } from "react-icons/fi";
import { FiInbox } from "react-icons/fi";
import { PiSuitcaseBold } from "react-icons/pi";
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import Pagination from "../../components/global/Pagination";
import Loader from "../../components/helpers/Loader";
import ErrorLoader from "../../components/helpers/ErrorLoader";
import api from "../../components/api/api";

const CompanyJobs = () => {
  const [jobInfo, setJobInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const [currentStatus, setCurrentStatus] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/api/jobs/my");
        // console.log(res.data.data);
        setJobInfo(res.data.data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (!jobInfo) return <ErrorLoader />;
  const stats = [
    {
      label: "Active jobs",
      value: 4,
      textColor: "text-green-400",
      Icon: PiSuitcaseBold,
      color: "text-purple-600",
      bg: "bg-purple-200",
    },
    {
      label: "Total applicants",
      value: 64,
      textColor: "text-blue-400",
      Icon: FiUsers,
      color: "text-blue-600",
      bg: "bg-blue-200",
    },
    {
      label: "Waiting for review",
      value: 21,
      textColor: "text-orange-400",
      Icon: FiInbox,
      color: "text-orange-600",
      bg: "bg-orange-200",
    },
  ];
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">My jobs</h1>
          <p className="text-sm text-gray-400">
            Manage the openings you have posted.
          </p>
        </div>
        <div className="h-10">
          <Link to={`/seeker/browse`}>
            <Button
              type="button"
              btnType="primary"
              text=<>
                <FiPlus className="mr-1" /> Post a job
              </>
              classname={"font-medium bg-white"}
            />
          </Link>
        </div>
      </div>

      {/* status part */}


      {/* last part */}
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
                placeholder="Search your jobs"
              />
            </div>
          </div>

          <div>
            {["All", "Active", "Closed"].map((e) => {
              return (
                <button
                  onClick={() => setCurrentStatus(e)}
                  key={e}
                  className={`px-5 text-[14px] mx-1.5 font-semibold py-2 transition-all duration-200 ease-in-out cursor-pointer border  ${e === currentStatus ? "bg-primary  border-primary text-white" : "bg-white text-gray-600   border-gray-300"} rounded-full`}
                >
                  {e}
                  <span className="text-[12px] ml-3">
                    {Math.floor(Math.random() * 4) + 1}
                    {/* Aaile ko lagi random number , paxi backend bata aauxa , maybe lol */}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-hidden  border border-t-0 border-gray-300 ">
        <table className="border w-full text-left">
          <thead className="border-b  border-gray-300">
            <tr className="text-[14px] uppercase tracking-wider  text-gray-500">
              <th className=" py-4.5 px-5 font-semibold">Job</th>
              <th className=" py-4.5 px-5 font-semibold">Location</th>
              <th className=" py-4.5 px-5 font-semibold">DEADLINE</th>
              <th className=" py-4.5 px-5 font-semibold">applicants</th>
              <th className=" py-4.5 px-5 font-semibold">Status</th>
              <th className=" py-4.5 px-5 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {jobInfo.map((job) => {
              return (
                <tr key={job.id}>
                  <td className=" py-4.5 px-5 font-semibold">
                    <div className="flex gap-3 ">
                      <div className="flex flex-col ">
                        <h3 className="font-bold -mt-0.5 ">{job.title}</h3>
                        <div className=" font-semibold">
                          {
                            <Badge
                              type={badgeType[job.type]}
                              text={job.type}
                            />
                          }
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" py-4.5 px-5  text-gray-500">
                    {job.location}
                  </td>
                  <td className=" py-4.5 px-5 ">{formattedDate(job.deadline)}</td>
                  <td className=" py-4.5 px-5 ">{job._count.applications}</td>
                  <td className=" py-4.5 px-5 font-semibold">
                    {
                      <Badge
                        type={statusBadge[job.isActive ? "active":"closed"]}
                        text={"● " + job.isActive ? "Active":"Closed"}
                      />
                    }
                  </td>
                  <td className="flex justify-center items-center  gap-2 py-4.5 px-5 font-semibold">
                    <Link to={`${job.id}`}>
                      <Button
                        type="button"
                        text={
                          <>
                            <FiUsers className="mr-1" />
                            Applicants
                          </>
                        }
                        btnType="secondary"
                        classname="text-gray-600!"
                      />
                    </Link>
                    <div className="h-10 w-14">
                      <Button
                        type="button"
                        text={
                          <>
                            <FiEdit3 />
                          </>
                        }
                        btnType="secondary"
                        className="text-gray-600"
                      />
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
        <div className="text-gray-400">Showing 1 to 5 of 5 jobs</div>
        <div>
          <Pagination totalPages={22} />
        </div>
      </div>
    </div>
  );
};

export default CompanyJobs;
