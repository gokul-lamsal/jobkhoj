import React, { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import Badge from "../../components/global/Badge";
import {
  badgeType,
  gradients,
  roleType,
  statusBadge,
} from "../../components/helpers/ColorAndBadge";
import Pagination from "../../components/global/Pagination";

const AdminUserList = () => {
  const applicationList = [
    {
      id: 101,
      name: "TechCorp Pvt Ltd",
      initials: "TP",
      accentColor: "purple",
      role: "company",
      status: "Active",
      companyStatus: "pending",
      joined: "30 Nov 2026",
      email: "HrTech@example.com",
    },
    {
      id: 90,
      name: "Rohan Karki",
      initials: "RK",
      accentColor: "green",
      role: "seeker",
      status: "Active",
      joined: "30 Nov 2026",
      email: "Rohan@example.com",
    },
    {
      id: 102,
      name: "StartUp Hub",
      initials: "SH",
      accentColor: "green",
      role: "company",
      companyStatus: "accepted",
      status: "Inactive",
      joined: "30 Nov 2026",
      email: "Founder@example.com",
    },
    {
      id: 103,
      name: "Suman Shrestha",
      initials: "SS",
      accentColor: "indigo",
      role: "seeker",
      status: "Active",
      joined: "30 Aug 2026",
      email: "Suman@example.com",
    },
    {
      id: 98,
      name: "Alice Wong",
      initials: "AW",
      accentColor: "pink",
      role: "Admin",
      status: "Inactive",
      joined: "15 Nov 2026",
      email: "Alice@example.com",
    },
    {
      id: 93,
      name: "Fake IT Ltd",
      initials: "FI",
      accentColor: "emerald",
      role: "company",
      companyStatus: "rejected",
      status: "Active",
      joined: "03 Oct 2026",
      email: "Spam@example.com",
    },
  ];
  const [currentStatus, setCurrentStatus] = useState("All");
  const stats = [
    {
      label: "Active userss",
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
        <h1 className="font-bold text-2xl">Users</h1>
        <p className="text-sm text-gray-400">
          Everyone registered on the platform. Name comes from the profile or
          company.
        </p>
      </div>

      {/* Last sections begins */}
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
                placeholder="Search by name or email"
              />
            </div>
          </div>

          <div>
            {["All", "Seekers", "Companies", "Admins"].map((e) => {
              return (
                <button
                  onClick={() => setCurrentStatus(e)}
                  key={e}
                  className={`px-5 text-[14px] mx-1.5 font-semibold py-2 transition-all duration-200 ease-in-out cursor-pointer border  ${e === currentStatus ? "bg-primary  border-primary text-white" : "bg-white text-gray-600   border-gray-300"} rounded-full`}
                >
                  {e}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Table head part */}
      <div className="w-full overflow-hidden  border border-t-0 border-gray-300 ">
        <table className="border w-full text-left">
          <thead className="border-b  border-gray-300">
            <tr className="text-[14px] uppercase tracking-wider  text-gray-500">
              <th className=" py-4.5 px-5 font-semibold">USERS</th>
              <th className=" py-4.5 px-5 font-semibold">ROLE</th>
              <th className=" py-4.5 px-5 font-semibold">COMAPANY STATUS</th>
              <th className=" py-4.5 px-5 font-semibold">JOINED</th>
              <th className=" py-4.5 px-5 font-semibold"></th>

            </tr>
          </thead>
          <tbody className="bg-white">
            {applicationList.map((users) => {
              return (
                <tr key={users.id}>
                  <td className=" py-4.5 px-5 font-semibold">
                    <div className="flex gap-3 items-center">
                      <div
                        className={`h-11 w-11 rounded-full flex items-center justify-center text-white font-bold text-sm bg-linear-to-b ${gradients[users.accentColor]}`}
                      >
                        {users.initials}
                      </div>
                      <div className="flex flex-col ">
                        <h3 className="font-bold -mt-0.5 ">{users.name}</h3>
                        <span className=" text-[13px]  -mt-0.5 font-semibold text-gray-400">
                          {users.email}
                        </span>
                      </div>
                    </div>
                  </td>
             
                  <td className=" py-4.5 px-5  text-gray-500">
                    <Badge
                      text={users.role}
                      type={roleType[users.role.toLowerCase()]}
                    />
                  </td>
                  <td>
                    {users?.role?.toLowerCase() === "company" ? (
                      <Badge
                        text={"●  " + users.companyStatus}
                        type={statusBadge[users.companyStatus.toLowerCase()]}
                      />
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                  <td className=" py-4.5 px-5 ">{users.joined}</td>

                  <td className="flex justify-center items-center  gap-2 py-4.5 px-5 font-semibold">
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
      {/* Pagination part */}
      <div className="border justify-between   flex gap-3 border-gray-300  py-4.5 px-5 bg-white rounded-b-2xl">
        <div className="text-gray-400">Showing 1 to 7 of 1,789 userss</div>
        <div>
          <Pagination totalPages={22} />
        </div>
      </div>
    </div>
  );
};

export default AdminUserList;
