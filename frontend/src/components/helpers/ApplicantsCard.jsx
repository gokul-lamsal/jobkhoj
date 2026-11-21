import React from 'react'
import Badge from '../global/Badge';
import { badgeType, statusBadge } from './ColorAndBadge';
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import Button from '../global/Button';
import { LuDownload } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";






const ApplicantsCard = ({
  name,
  initials,
  email,
  phone,
  skills=[],
  coverletter,
  appliedDate,
  status
   
}) => {
 
  return (
    <div className=" py-4 px-5 flex flex-col gap-4 border-2 border-gray-300 bg-white cursor-pointer hover:scale-105 hover:shadow shrink transition-all duration-200 ease-out min-h-fit h-55 rounded-2xl">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="w-[3rem] h-[3rem] text-white bg-linear-to-bl from-violet-500 to-fuchsia-500 flex justify-center items-center text-xl font-bold rounded-full">
            {initials}
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">{name}</div>
            <div className="flex gap-2 text-[14px]">
              <p className="flex gap-1 text-gray-500 justify-centet items-center">
                <MdOutlineEmail />
                {email}
              </p>
              <p className="flex gap-1 text-gray-500 justify-centet items-center">
                <FiPhone />
                {phone}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Badge
            type={statusBadge[status.toLowerCase()]}
            text={"● " + status}
          />
          <p className="text-gray-500 text-[14px]">Applied {appliedDate}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 pb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="w-full bg-gray-100 border rounded-xl h-[5rem] border-gray-200">
        <p className="px-4 py-3">"{coverletter}"</p>
      </div>

      <div className="flex justify-between mb-4">
        <div className="h-[2.5rem]">
          <Button
            type="button"
            text={
              <>
              <LuDownload className="mr-1" />
                <p className="font-bold">Download resume</p>
              </>
            }
            btnType="secondary"
            classname="text-gray-600!"
          />
        </div>
        {
          status==="pending"?(
         <div className="flex gap-2">
          
          <div>
            <Button
            type="button"
            text={
              <>
              <MdDone className="mr-2" />
                <p>Accept</p>
              </>
            }
            btnType="secondary"
            classname="bg-green-700! text-white! px-5 font-semibold"
          />
          </div>
          <div>
            <Button
            type="button"
            text={
              <>
              <RxCross2 className="mr-2" />
                <p >Reject</p>
              </>
            }
            btnType="secondary"
            classname="text-red-600! bg-rose-200! px-5 font-semibold"
          />
          </div>
        </div>
          ):(<div className="flex justify-center items-center">
            <p className="text-gray-500 text-[14px]">Decision made. Candidate was notified.</p>
          </div>)
        }
        
      </div>
    </div>
  );
}

export default ApplicantsCard