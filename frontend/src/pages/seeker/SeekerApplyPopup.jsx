import React, { useState } from "react";
import { FiSend, FiUpload } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Button from "../../components/global/Button";
import { FaExclamationCircle } from "react-icons/fa";

function SeekerApplyPopup({ setSeekerPopup }) {
  return (
    <form className="fixed inset-0 w-full flex items-center justify-center backdrop-blur-2xl ">
      <div className="  flex flex-col px-4 py-6 gap-4 border rounded-2xl w-[35rem] shadow-sm border-gray-300">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="font-bold text-xl ">Apply to Frontend Developer</h1>
          </div>
          <div>
            <button>
              <RxCross2
                size={25}
                className="cursor-pointer"
                onClick={() => setSeekerPopup(false)}
              />{" "}
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div
            className={`h-13 w-13 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-linear-to-b bg-purple-700`}
          >
            TC
          </div>
          <div className="flex gap-1 items-center ">
            <div className="flex gap-2">
              <h3 className="font-bold -mt-0.5 text-sm text-gray-400">
                TechCorp Pvt Ltd •{" "}
              </h3>
            </div>
            <div className="text-gray-400 flex text-sm gap-4 items-center">
              <div className="flex items-center gap-0.5">
                <span>
                  <MdOutlineLocationOn size={17} />
                </span>
                <span className="text-sm text-gray-400">Laltipur, Nepal</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[14px] text-gray-600 font-semibold ">
            Cover message
          </p>
          <textarea
            type="text"
            className="border shadow-sm border-gray-300 p-2 rounded-xl outline-none"
          />
          <p className="text-[14px] text-gray-400 ">
            Optional. Tell the company why you are a good fit.
          </p>
        </div>
        <div className="flex flex-col gap-1.5">
          <div>
            <p className="text-[14px] text-gray-600 font-semibold ">Resume </p>
          </div>
          <div className="border shadow-sm border-gray-300 p-2 rounded-2xl group hover:border-blue-600 cursor-pointer hover:scale-102 transition-all duration-200 ">
            <div className="flex gap-2.5 items-center group-hover:text-blue-800 transition-colors duration-200 ">
              <div>
                <input type="radio" className="w-4 h-4" />
              </div>
              <div>
                <span>
                  <IoDocumentTextOutline size={20} />
                </span>
              </div>
              <div className="flex flex-col gap-0">
                <p className="text-sm font-bold ">Use my profile resume </p>
                <p className="text-[12px] text-gray-600 ">file name</p>
              </div>
            </div>
          </div>
          <div className="border shadow-sm border-gray-300 p-2 rounded-2xl group hover:border-blue-600 cursor-pointer hover:scale-102 transition-all duration-200 ">
            <div className="flex gap-2.5 items-center  group-hover:text-blue-800 transition-colors duration-200 group-hover:border-blue-600">
              <div>
                <input type="radio" className="w-4 h-4" />
              </div>
              <div>
                <span>
                  <FiUpload size={20} />
                </span>
              </div>
                <div className="flex flex-col gap-0">
                  <p className="text-sm font-bold ">Upload a different file </p>
                  <p className="text-[12px] text-gray-600 ">
                    file name in PDF or Doc
                  </p>
                </div>
            </div>
          </div>
        </div>
        <div className="p-2 bg-orange-200 rounded-xl">
          <div className="flex gap-2">
            <span>
              <FaExclamationCircle size={20} color="orange" />
            </span>
            <p className="text-sm text-orange-600">
              You can apply to each job only once. After you submit, the company
              will be notified.
            </p>
          </div>
        </div>
        <div className="ml-auto  flex gap-2">
          <div>
            <Button
              type="Reset"
              btnType="secondary"
              text={<>Cancel</>}
              onClick={() => setSeekerPopup(false)}
            />
          </div>
          <div>
            <Button
              type="Reset"
              text={
                <>
                  {" "}
                  <FiSend size={20} className="mr-2" /> Submit application
                </>
              }
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SeekerApplyPopup;
