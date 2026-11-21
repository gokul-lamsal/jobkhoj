import React, { useState } from "react";
import PostedJobCard from "../../components/helpers/PostedJobCard";
import Badge from "../../components/global/Badge";
import { badgeType } from "../../components/helpers/ColorAndBadge";
import Button from "../../components/global/Button";
import { FiEdit3 } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import ApplicantsCard from "../../components/helpers/ApplicantsCard";

const CompanyApplicants = () => {
  const applicantsData = {
    breadcrumb: {
      parent: "My jobs",
      current: "Backend Intern",
    },
    job: {
      id: 1,
      title: "Backend Intern",
      initials: "TC",
      category: "Internship",
      location: "Lalitpur, Nepal",
      deadline: "15 Nov 2026",
      editButton: "Edit job",
    },

    applicants: [
      {
        id: 1,
        name: "John Doe",
        initials: "JD",
        email: "john@student.com",
        phone: "9812345678",
        skills: ["React", "Node", "MySQL"],
        coverLetter:
          "Hello, I am excited about this role. I have built two projects using the same stack.",
        appliedDate: "12 Oct",
        status: "pending",
      },
      {
        id: 2,
        name: "Jane Smith",
        initials: "JS",
        email: "jane@dev.com",
        phone: "9823456789",
        skills: ["Python", "Django", "AWS"],
        coverLetter:
          "I would like to join as a backend intern and learn from your team.",
        resume: "jane_smith_resume.pdf",
        appliedDate: "10 Oct",
        status: "accepted",
      },
      {
        id: 3,
        name: "Suman Shrestha",
        initials: "SS",
        email: "suman@nepal.com",
        phone: "9834567890",
        skills: ["PHP", "Laravel", "Vue"],
        coverLetter:
          "Please find my resume attached. Happy to share my GitHub.",
        resume: "suman_shrestha_resume.pdf",
        appliedDate: "09 Oct",
        status: "pending",
      },
      {
        id: 4,
        name: "Alice Wong",
        initials: "AW",
        email: "alice@intern.com",
        phone: "9845678901",
        skills: ["Java", "Spring Boot"],
        coverLetter:
          "I am particularly interested in this internship because of its strong focus on Node.js. g focus on Node.js.g focus on Node.js.g focus on Node.js.g focus on Node.js.g focus on Node.js.g focus on Node.js.",
        resume: "alice_wong_resume.pdf",
        appliedDate: "07 Oct",
        status: "rejected",
      },
    ],

    decisionMessage: "Decision made. Candidate was notified.",
  };

  const [currentStatus, setCurrentStatus] = useState("All");

  return (
    <div>
      <div className="flex gap-2">
        <p className="text-gray-400">{applicantsData.breadcrumb.parent}</p>

        <p className="text-gray-400">&gt;</p>

        <p className="font-bold">{applicantsData.breadcrumb.current}</p>
      </div>

      <div className="flex mt-4 gap-2 ">
        <div className="bg-linear-to-r from-blue-500 to-blue-700  w-[4rem] h-[4rem] flex justify-center items-center rounded-2xl">
          <div className="text-2xl font-bold text-white">
            {applicantsData.job.initials}
          </div>
        </div>

        <div className="w-full flex justify-between">

          <div className="  flex  flex-col">
            <div className="text-3xl font-bold">{applicantsData.job.title}: Applicants</div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Badge
                  type={badgeType[applicantsData.job.category.toLowerCase()]}
                  text={applicantsData.job.category}
                />
                <div>{applicantsData.job.location}</div>
                <div>{applicantsData.job.deadline}</div>
              </div>
            </div>
          </div>
          <div className="h-[3rem] ">
            <Button
              type="button"
              text={
                <>
                  <FiEdit3 className="mr-1" />
                  Edit Job
                </>
              }
              btnType="secondary"
              className="text-gray-600 "
            />
          </div>
        </div>

      </div>

      <div className="my-5 ">
        {["All", "pending", "Accepted", "Rejected"].map((e) => {
          return (
            <button
              onClick={() => setCurrentStatus(e)}
              key={e}
              className={`px-5 text-[14px] mx-1.5 font-semibold py-2 transition-all duration-200 ease-in-out cursor-pointer border  ${e === currentStatus ? "bg-primary  border-primary text-white" : "bg-white text-gray-600   border-gray-300"} rounded-full`}
            >
              {e}
              <span className="text-[12px] ml-3">
                {Math.floor(Math.random() * 4) + 1}
                {/* Aaile ko lagi random number , paxi backend bata aauxa , maybe lol */}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
        {
          applicantsData.applicants.map((applicants) => {
            return (
              <ApplicantsCard
                key={applicants.id}
                name={applicants.name}
                initials={applicants.initials}
                email={applicants.email}
                phone={applicants.phone}
                skills={applicants.skills}
                id={applicants.id}
                coverletter={applicants.coverLetter}
                appliedDate={applicants.appliedDate}
                status={applicants.status}
              />

            )
          })

        }
      </div>
    </div>
  );

};

export default CompanyApplicants;
