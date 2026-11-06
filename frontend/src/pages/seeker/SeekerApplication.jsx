import React, { useState } from "react";
import Badge from "../../components/global/Badge";
import { badgeType, gradients } from "../../components/helpers/ColorAndBadge";
import Button from "../../components/global/Button";

function SeekerApplication() {
  const [jobInfo, setJobInfo] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp Pvt Ltd",
      initials: "TC",
      jobType: "Full time",
      location: "Lalitpur, Nepal",
      accentColor: "purple",
      salary: "NPR 50k-70k",
      appliedOn: "30 Nov 2026",
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
      appliedOn: "05 Sep 2026",
      status: "Accepted",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "InnoLabs",
      location: "Kathmandu, Nepal",
      initials: "IL",
      accentColor: "blue",
      jobType: "Contract",
      appliedOn: "08 Oct 2026",
      status: "Pending",
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
      appliedOn: "29 Sep 2026",
      status: "Rejected",
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
      appliedOn: "30 Nov 2026",
      status: "Pending",
    },
  ]);
  const [currentStatus, setCurrentStatus] = useState("All")

  const stats = [
    { label: "Total", value: 5, color: "text-gray-700" },
    { label: "Pending", value: 3, color: "text-amber-700" },
    { label: "Accepted", value: 1, color: "text-emerald-700" },
    { label: "Rejected", value: 1, color: "text-rose-700" },
  ];


  return (
    <main>
      <section className=" flex flex-col py-8">
        <div>
          <h1 className="font-bold text-2xl">My applications</h1>
          <p className="text-sm text-gray-400">
            Follow the status of every job you applied to.
          </p>
        </div>

        {/* status part */}

        <div className="grid grid-cols-4  gap-5 ">
          {stats.map(({ label, value, color }) => (
            <div
              key={label}
              className="bg-white border border-gray-300 rounded-2xl shadow-sm px-5 py-6 flex flex-col justify-center gap-3"
            >
              <p className={`text-sm font-medium ${color}`}>{label}</p>
              <h1 className="text-3xl font-extrabold text-gray-900">{value}</h1>
            </div>
          ))}
        </div>

        {/* last part */}
        <div className="border  mt-4 flex gap-3 border-gray-300  py-4.5 px-5 bg-white rounded-t-2xl">
          {
            ["All", "Pending", "Accepted", "Rejected"].map((e, i) => {
              return (
                <button onClick={() => setCurrentStatus(e)} key={e.type} className={`px-5 text-[14px] font-semibold py-2 transition-all duration-200 ease-in-out cursor-pointer border  ${(e === currentStatus) ? "bg-primary  border-primary text-white" : "bg-white text-gray-600   border-gray-300"} rounded-full`}>
                  {e}
                  <span className="text-[12px] ml-3">
                    {Math.floor(Math.random() * 4) + 1}
                    {/* Aaile ko lagi random number , paxi backend bata aauxa , maybe lol */}
                  </span>
                </button>
              )
            })
          }


          {/* <div className="p-4 grid grid-cols-6 gap-4 items-center justify-center">
              <div>
                <p className="font-bold text-gray-400">JOB</p>
              </div>
              <div>
                <p className="font-bold text-gray-400">TYPE</p>
              </div>
              <div>
                <p className="font-bold text-gray-400">LOCATION</p>
              </div>
              <div>
                <p className="font-bold text-gray-400">APPLIED ON</p>
              </div>
              <div>
                <p className="font-bold text-gray-400">STATUS</p>
              </div>
            </div>
            <div className="border border-gray-400">
              {jobInfo.map((JobDetails, i) => (
                <div className="p-2 grid grid-cols-6 gap-4 justify-center items-center">
                  <div className="flex flex-col gap-2">
                    <div>
                      <div className="flex gap-4">
                        <div
                          className={`h-12 w-12 shrink-0 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-linear-to-b ${gradients[JobDetails.accentColor]}`}
                        >
                          {JobDetails.initials}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <h3 className="font-bold text-md leading-tight text-gray-900">
                            {JobDetails.title}
                          </h3>
                          <span className="text-[12px] font-medium text-gray-500">
                            {JobDetails.company}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="shrink-0">
                      <Badge
                        type={badgeType[JobDetails.jobType.toLowerCase()]}
                        text={JobDetails.jobType}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-sm text-gray-400">
                        {JobDetails.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="text-sm ">{JobDetails.appliedOn}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="shrink-0">
                      <Badge type={statusBadge[JobDetails.status.toLowerCase()]} text={JobDetails.status} />
                    </div>
                  </div>

                  <div className=" ring-slate-400 ring  hover:ring-slate-700 text-center  active:scale-95 transition-all duration-200 px-4 py-3 text-[15px] font-semibold text-gray-700 rounded-lg cursor-pointer">
                    View job
                  </div>
                </div>
              ))}
            </div> */}
        </div>
        {/* Table */}
        <div className="w-full overflow-hidden rounded-b-2xl border border-t-0 border-gray-300 ">
          <table className="border w-full   text-left">
            <thead className="border-b  border-gray-300">
              <tr className="text-[14px] uppercase tracking-wider  text-gray-500">
                <th className=" py-4.5 px-5 font-semibold">Job</th>
                <th className=" py-4.5 px-5 font-semibold">Type</th>
                <th className=" py-4.5 px-5 font-semibold">Location</th>
                <th className=" py-4.5 px-5 font-semibold">Applied on</th>
                <th className=" py-4.5 px-5 font-semibold">Status</th>
                <th className=" py-4.5 px-5" />
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
              </tr>
              <tr>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
              </tr>
              <tr>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
              </tr>
              <tr>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
              </tr>
              <tr>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
                <td className=" py-4.5 px-5 font-semibold">Front end developer</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default SeekerApplication;
