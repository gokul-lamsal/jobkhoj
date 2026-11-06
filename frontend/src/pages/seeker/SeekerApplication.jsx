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
  return (
    <main>
      <section className=" flex flex-col gap-4 py-8">
        <div>
          <h1 className="font-bold text-2xl">My applications</h1>
          <p className="text-sm text-gray-400">
            Follow the status of every job you applied to.
          </p>
        </div>

        {/* status part */}

        <div className="grid grid-cols-4 gap-2 ">
          <div className="border-2 border-gray-400 rounded-lg py-6 px-2 flex flex-col justify-center">
            <p className="text-md text-gray-400">Total</p>
            <h1 className="text-2xl font-extrabold px-2">5</h1>
          </div>
          <div className="border-2 border-gray-400 rounded-lg py-6 px-2 flex flex-col justify-center">
            <span>
              <Badge type="warning" text={"Pending"} />
            </span>
            <h1 className="text-2xl font-extrabold px-4">3</h1>
          </div>
          <div className="border-2 border-gray-400 rounded-lg py-6 px-2 flex flex-col justify-center">
            <span>
              <Badge type="success" text={"Accepted"} />
            </span>
            <h1 className="text-2xl font-extrabold px-4">1</h1>
          </div>
          <div className="border-2 border-gray-400 rounded-lg py-6 px-2 flex flex-col justify-center">
            <span>
              <Badge type="danger" text={"Rejected"} />
            </span>
            <h1 className="text-2xl font-extrabold px-4">1</h1>
          </div>
        </div>

        {/* last part */}
        <div className="border border-gray-400 rounded-lg">
          <div>
            <div className="flex gap-4 shadow shadow-gray-400 p-2 rounded-lg">
              <div className="group flex justify-center items-center gap-1 p-1.5 rounded-2xl cursor-pointer hover:bg-primary-hover transition-colors duration-300">
                <p className="font-semibold text-gray-700 text-sm group-hover:text-white">
                  All
                </p>
                <p className="font-semibold text-gray-700 text-sm group-hover:text-white">
                  5
                </p>
              </div>
              <div className="group flex justify-center items-center gap-1 p-1.5 rounded-2xl cursor-pointer hover:bg-primary-hover transition-colors duration-300">
                <p className="font-semibold text-gray-700 text-sm group-hover:text-white">
                  Pending
                </p>
                <p className="font-semibold text-gray-700 text-sm group-hover:text-white">
                  3
                </p>
              </div>
              <div className="group flex justify-center items-center gap-1 p-1.5 rounded-2xl cursor-pointer hover:bg-primary-hover transition-colors duration-300">
                <p className="font-semibold text-gray-700 text-sm group-hover:text-white">
                  Accepted
                </p>
                <p className="font-semibold text-gray-700 text-sm group-hover:text-white">
                  1
                </p>
              </div>
              <div className="group flex justify-center items-center gap-1 p-1.5 rounded-2xl cursor-pointer hover:bg-primary-hover transition-colors duration-300">
                <p className="font-semibold text-gray-700 text-sm group-hover:text-white">
                  Rejected
                </p>
                <p className="font-semibold text-gray-700 text-sm group-hover:text-white">
                  1
                </p>
              </div>
            </div>

            <div className="p-4 grid grid-cols-6 gap-4 items-center justify-center">
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
                      <Badge type="success" text={JobDetails.status} />
                    </div>
                  </div>

                  <div className=" ring-slate-400 ring  hover:ring-slate-700 text-center  active:scale-95 transition-all duration-200 px-4 py-3 text-[15px] font-semibold text-gray-700 rounded-lg cursor-pointer">
                    View company
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

export default SeekerApplication;
