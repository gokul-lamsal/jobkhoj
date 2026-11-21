import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaExclamationCircle,
  FaLink,
  FaRegClock,
} from "react-icons/fa";
import { FiBriefcase, FiSend } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import Button from "../../components/global/Button";
import { MdOutlineFileUpload } from "react-icons/md";
import Badge from "../../components/global/Badge";

const CompanyProfile = () => {
  const [file, setFile] = useState(null);
  useEffect(()=>{
   console.log(file);
   
  },[file])
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="font-bold text-2xl">Company profile</h1>
            <p className="text-sm text-gray-400">
              This is shown to job seekers on your company page.
            </p>
          </div>
          <div>
            <Badge type={"warning"} text={"● Pending"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-yellow-100 rounded-xl p-4 shadow-sm">
        <div className="flex gap-2">
          <span>
            <FaRegClock size={20} color="orange" />
          </span>
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-orange-600">
              Your company is waiting for admin approval.
            </p>
            <p className="text-sm text-orange-600">
              You can edit your profile now. You will be able to post jobs once
              an admin approves your company. We will notify you.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-2 gap-6">
        <div className="flex flex-col gap-4 w-[25rem]">
          <div className="flex flex-col gap-4 border py-10 bg-white border-gray-300 rounded-xl p-4 shadow-sm">
            <div className="flex flex-col justify-center items-center gap-4">
              <div
                className={`h-20 w-20 rounded-xl flex items-center justify-center text-white font-bold text-3xl bg-linear-to-b bg-purple-600`}
              >
                TC
              </div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <h3 className="text-md font-bold">Company logo</h3>
                  <p className="text-gray-400 text-sm ">
                    Square image, PNG or JPG.
                  </p>
                </div>
              </div>
              <label className="w-full" htmlFor="file">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  className="file:hidden hidden"
                  name=""
                  id="file"
                />
                <div
                  className={
                    "w-full cursor-pointer btn-secondary flex justify-center items-center  h-10  transition-all duration-200 rounded-xl px-3 py-2   hover:cursor-pointer"
                  }
                >
                  <MdOutlineFileUpload size={20} className="mr-2" />{" "}
                  <p className="text-sm font-medium text-slate-900 truncate">
                    {file ? file.name : "Upload file"}
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-[70%]">
          <div className="border bg-white border-gray-300 rounded-2xl shadow-sm">
            <div className="bg-white rounded-2xl px-5 py-6 flex flex-col justify-center gap-3">
              <h1 className="font-bold text-lg">Company details</h1>

              <form action="">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col w-full gap-2">
                      <label htmlFor="companyDetail">
                        Company name <span className="text-red-500">*</span>
                      </label>
                      <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                        <p>
                          <LuBuilding />
                        </p>

                        <input
                          type="text"
                          name="companyDetail"
                          id="companyDetail"
                          placeholder="TechCorp Pvt Ltd"
                          className="outline-none w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="salary">
                          Website <span className="text-red-500">*</span>
                        </label>
                        <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                          <p>
                            <FaLink />
                          </p>

                          <input
                            type="text"
                            name="webLink"
                            id="webLink"
                            placeholder="https://example.com"
                            className="outline-none w-full"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="location">
                          Location <span className="text-red-500">*</span>
                        </label>
                        <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                          <p>
                            <IoLocationOutline />
                          </p>

                          <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Lalitpur, Nepal"
                            className="outline-none w-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full ">
                      <label htmlFor="description">
                        Description <span className="text-red-500">*</span>
                      </label>
                      <div className="flex justify-center items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                        <textarea
                          name="description"
                          id="description"
                          className="outline-none w-full h-[8rem] resize-none"
                        />
                      </div>
                      <p className="text-sm text-gray-400">
                        Tell candidates what your company does.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="bg-white flex gap-4 p-2 ml-auto">
            <div>
              <Button btnType="secondary" text={"Cancel"} />
            </div>
            <div>
              <Button type="submit" text={"Save change"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
