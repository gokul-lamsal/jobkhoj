import React from "react";
import { FiSend } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Button from "../../components/global/Button";
import { FaExclamationCircle } from "react-icons/fa";

function SeekerApplyPopup({setSeekerPopup}) {

  return (
    <form className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">
      <div className="flex max-h-[90vh] w-[35rem] flex-col gap-4 overflow-y-auto rounded-2xl border-2 border-gray-300 bg-white px-4 py-6 shadow-2xl">
        <div className="flex justify-between items-center ">
          <div>
            <h1 className="font-bold text-xl ">Apply to Frontend Developer</h1>
          </div>
          <div>
            <button type="button">
              <RxCross2
                size={25}
                className="cursor-pointer"
                onClick={()=>setSeekerPopup(false)}
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
            className="w-full min-h-32 resize-none rounded-xl border-2 border-gray-300 p-3 text-sm text-gray-700 outline-none transition-colors duration-200 focus:border-primary"
          />
          <p className="text-[14px] text-gray-400 font-semibold ">
            Optional. Tell the company why you are a good fit.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-semibold text-gray-600">Resume</p>

          <div className="flex items-center gap-3 rounded-xl border-2 border-gray-300 p-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-rose-500">
              <IoDocumentTextOutline size={20} />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate text-sm font-semibold text-gray-900">
                jhon-doe-resume.pdf
              </span>
              <span className="text-[12px] text-gray-500">
                Updated 2 days ago · PDF
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <FaExclamationCircle size={18} className="mt-0.5 shrink-0 text-amber-600" />
          <p className="text-sm leading-relaxed text-amber-800">
            <span className="font-semibold">One application per job.</span> Once
            you submit, it&apos;s final — no edits or resends, and the company
            is notified immediately.
          </p>
        </div>
        <div className="ml-auto  flex gap-2">
          <div>
            <Button type="button" btnType="secondary" text={<>Cancel</>} onClick={()=>setSeekerPopup(false)} />
          </div>
          <div>
            <Button
              type="button"
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