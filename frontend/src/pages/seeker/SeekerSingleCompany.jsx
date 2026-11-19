import React from "react";
import Badge from "../../components/global/Badge";
import { MdOutlineLocationOn } from "react-icons/md";
import Button from "../../components/global/Button";
import { VscLinkExternal } from "react-icons/vsc";
import { FiBriefcase } from "react-icons/fi";
import { LuClock } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { badgeType } from "../../components/helpers/ColorAndBadge";

const SeekerSingleCompany = () => {
  const companyDetails = {
    company: {
      name: "TechCorp Pvt Ltd",
      initials: "TC",
      verified: true,
      location: "Lalitpur, Nepal",
      website: "techcorp.com",
      about:
        "TechCorp is a leading industry player focusing on innovative solutions. We build web and mobile products for clients across Nepal and abroad, and we hire interns every semester.",
      hiringInterns: "Every semester",
    },
    stats: {
      openPositions: 3,
      internships: 1,
    },
    positions: [
      {
        id: 1,
        title: "Frontend Developer",
        type: "Full time",
        location: "Lalitpur, Nepal",
        posted: "2d ago",
      },
      {
        id: 2,
        title: "Backend Intern",
        type: "Internship",
        location: "Lalitpur, Nepal",
        posted: "3d ago",
      },
      {
        id: 3,
        title: "QA Engineer",
        type: "Part time",
        location: "Lalitpur, Nepal",
        posted: "2w ago",
      },
    ],
  };
  const iconMap = {
    "full time": { bg: "bg-green-100", color: "text-green-600" },
    internship: { bg: "bg-red-100", color: "text-red-600" },
    "part time": { bg: "bg-indigo-100", color: "text-indigo-600" },
  };
  const hiringTypes = Object.entries(
    companyDetails.positions.reduce((acc, position) => {
      acc[position.type] = (acc[position.type] ?? 0) + 1;
      return acc;
    }, {}),
  );
  return (
    <main>
      <section className="mt-5">
        <div className="h-[18rem] overflow-hidden bg-white border border-gray-300 rounded-2xl shadow-sm grid grid-rows-2">
          <div className="bg-linear-to-b  from-purple-700 to-purple-900"></div>

          <div className="relative  px-10">
            <div className="absolute  top-[-20px] ">
              <div className="font-bold text-2xl  w-14 h-14 shadow-2xl shadow-gray-400 rounded-xl text-white flex justify-center items-center bg-purple-700 ring-gray-200 ring-2 ring-offset-3">
                {companyDetails.company.initials}
              </div>
            </div>
            <div className="ml-20  flex h  justify-between mt-3">
              <div className="flex flex-col">
                <div className="flex gap-4">
                  <h2 className="text-2xl font-bold">
                    {companyDetails.company.name}
                  </h2>
                  <Badge
                    type="primary"
                    text={
                      <>
                        <span className="mr-0.75">✓</span>
                        Verified compay
                      </>
                    }
                  />
                </div>
                <div className=" mt-1 text-[15px] flex gap-8">
                  <div className="flex items-center  gap-0.5 text-gray-400  ">
                    <span>
                      <MdOutlineLocationOn size={17} />
                    </span>
                    <span>{companyDetails.company.location}</span>
                  </div>
                </div>
              </div>
              <div className="w-40 h-10">
                <Button
                  type="button"
                  btnType="secondary"
                  text={
                    <>
                      Visit website
                      <VscLinkExternal className="ml-3" />
                    </>
                  }
                />
              </div>
            </div>
            <div className="bg-gray-200/80 h-[1px] mt-3 w-full"></div>
          </div>
        </div>
      </section>
      <section className="py-5 flex gap-4 items-stretch">
        <div className="grow p-4 bg-white border border-gray-300 rounded-2xl shadow-sm">
          <div>
            <div className="flex justify-between border-b-2 border-gray-300/90 pb-6 ">
              <h2 className="text-xl font-semibold">Open positions</h2>
              <Badge
                type="info"
                text={companyDetails.stats.openPositions + " active"}
              />
            </div>
            <div className="mt-3">
              {companyDetails.positions.map((c) => {
                const { bg, color } = iconMap[c.type.toLowerCase()];
                return (
                  <div
                    key={c.id}
                    className={`flex items-center border-b border-gray-100 gap-4 px-5 py-4 transition-colors hover:bg-slate-50/70`}
                  >
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${bg}`}
                    >
                      <FiBriefcase className={`w-5 h-5 ${color}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900">
                        {c.title}
                      </p>
                      <div className="text-sm flex gap-2 text-gray-500 truncate">
                        <span className="text-xs flex gap-1 items-center text-gray-500 whitespace-nowrap">
                          <MdOutlineLocationOn size={17} /> {c.location}
                        </span>
                        <span className="text-xs flex gap-1 items-center text-gray-500 whitespace-nowrap">
                          {" "}
                          <LuClock size={14} /> Posted {c.posted}
                        </span>
                      </div>
                    </div>

                    <div className="ml-auto flex shrink-0 items-center gap-4">
                      <Badge
                        type={badgeType[c.type.toLowerCase()] ?? "info"}
                        text={c.type}
                      />
                      <div className="h-10 w-28">
                        <Link to={`/seeker/browse/${c.id}`}>
                          <Button
                            type="button"
                            btnType="secondary"
                            text={
                              <>
                                View job
                                <FaArrowRight className="ml-2" size={12} />
                              </>
                            }
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[25rem] shrink-0">
          <div className="shrink-0 overflow-hidden rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
            <h3 className="text-lg font-semibold">About us</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              {companyDetails.company.about}
            </p>
          </div>
          <div className="flex-1 min-h-fit rounded-2xl border border-gray-300 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold">Details</h3>
            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3">
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  Location
                </p>
                <p className="truncate text-sm font-semibold text-gray-700">
                  {companyDetails.company.location}
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  Website
                </p>
                <a
                  href={`https://${companyDetails.company.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="block truncate text-sm font-semibold text-primary hover:underline"
                >
                  {companyDetails.company.website}
                </a>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  Open positions
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  {companyDetails.stats.openPositions}
                </p>
              </div>
              <div className="col-span-2 min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
                  Hiring
                </p>
                <p className="mt-1 text-sm font-semibold text-gray-700">
                  {hiringTypes
                    .map(([type, count]) => `${type} (${count})`)
                    .join(" · ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeekerSingleCompany;
