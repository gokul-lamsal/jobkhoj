import React, { useState } from "react";
import { FaArrowRight, FaCheck, FaRegBookmark, FaRegCircleCheck } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

function SeekerDashBoard() {
  const stats = [
    {
      label: "Applications",
      value: 12,
      color: "text-blue-600",
      bg:"bg-blue-200",
      Icon: IoDocumentTextOutline,
    },
    { label: "Pending", value: 7, color: "text-orange-600",bg:"bg-orange-200", Icon: FiClock },
    { label: "Accepted", value: 3, color: "text-green-600",bg:"bg-green-200", Icon: FaRegCircleCheck },
    {
      label: "saved jobs",
      value: 8,
      color: "text-purple-600",
      bg:"bg-purple-200",
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
    <main className="my-8">
      <section className="flex flex-col gap-4">
        <div className="flex justify-between items-center border-2 border-purple-800 py-6 px-4 rounded-2xl bg-purple-800">
          <div className="flex flex-col gap-1">
            <p className="text-white text-sm">{formatted}</p>
            <h1 className="text-white text-3xl font-bold">
              Good morning, John
            </h1>
            <p className="text-white text-sm">
              You have 7 pending applications and 2 unread notifications.
            </p>
          </div>
          <div>
            <span className="p-2 rounded-3xl text-lg flex items-center gap-1 bg-white">
              Browse jobs{" "}
              <FaArrowRight
                size={30}
                color="white"
                className="border p-1 rounded-2xl bg-purple-800"
              />
            </span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 ">
          {stats.map(({ label, value, color, Icon, bg }) => (
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm px-5 py-6 flex items-center gap-3">
              <div className={`p-4 rounded-2xl ${bg} ${color}`}>
                <Icon size={20} />
              </div>
              <div key={label}>
                <h1 className="text-3xl font-extrabold text-gray-900">
                  {value}
                </h1>
                <p className={`text-sm font-medium text-gray-500`}>{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default SeekerDashBoard;
