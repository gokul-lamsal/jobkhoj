import React, { useState } from 'react'
import Badge from '../global/Badge';
import { badgeType, statusBadge } from './ColorAndBadge';
import { MdOutlineEmail } from "react-icons/md";
import { FiCheck, FiPhone, FiX } from "react-icons/fi";
import Button from '../global/Button';
import { LuDownload } from "react-icons/lu";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Tag from '../global/Tag';



const ApplicantsCard = ({
  id,
  name,
  initials,
  email,
  phone,
  skills = [],
  coverletter = "",
  appliedDate,
  status,
}) => {
  const [expanded, setExpanded] = useState(false);

  const isPending = status.toLowerCase() === "pending";
  const isLong = coverletter.length > 90;

  return (
    <div className="flex min-h-[20rem] cursor-pointer flex-col gap-4 rounded-2xl border border-gray-300 bg-white p-5 transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-bl from-violet-500 to-fuchsia-500 text-xl font-bold text-white">
            {initials}
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-xl font-bold">{name}</div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[14px]">
              <p className="flex items-center gap-1 text-gray-500">
                <MdOutlineEmail />
                {email}
              </p>
              <p className="flex items-center gap-1 text-gray-500">
                <FiPhone />
                {phone}
              </p>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <Badge
            type={statusBadge[status.toLowerCase()]}
            text={"● " + status}
          />
          <p className="text-[14px] text-gray-500">Applied {appliedDate}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {skills.map((skill) => (
          <Tag key={skill} tag={skill} />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex h-5 items-center justify-between">
          <p className="text-sm font-medium text-gray-500">Cover letter</p>

          {isLong && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpanded((prev) => !prev);
              }}
              className="cursor-pointer text-sm font-medium text-violet-600 hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className="min-h-18 w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3">
          <p
            className={`whitespace-pre-line wrap-break-word leading-6 text-gray-600 ${
              expanded ? "" : "line-clamp-2"
            }`}
          >
            {coverletter}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto flex items-center justify-between gap-4">
        <div className="h-10">
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

        {isPending ? (
          <div className="flex gap-3">
            <div className="h-9 w-24">
              <Button
                type="button"
                text={
                  <>
                    <FiCheck size={16} />
                    Accept
                  </>
                }
                classname="inline-flex items-center justify-center gap-1.5 border border-emerald-200 bg-emerald-50! text-sm font-medium text-emerald-700! hover:border-emerald-300 hover:bg-emerald-100!"
              />
            </div>
            <div className="h-9 w-24">
              <Button
                type="button"
                text={
                  <>
                    <FiX size={16} />
                    Reject
                  </>
                }
                classname="inline-flex items-center justify-center gap-1.5 border border-rose-200 bg-rose-50! text-sm font-medium text-rose-700! hover:border-rose-300 hover:bg-rose-100!"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-[14px] text-gray-500">
              Decision made. Candidate was notified.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicantsCard;