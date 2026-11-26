import React, { useEffect, useState } from "react";
import PostedJobCard from "../../components/helpers/PostedJobCard";
import Badge from "../../components/global/Badge";
import { badgeType, formattedDate, getInitials } from "../../components/helpers/ColorAndBadge";
import Button from "../../components/global/Button";
import { FiEdit3 } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import ApplicantsCard from "../../components/helpers/ApplicantsCard";
import Loader from "../../components/helpers/Loader";
import ErrorLoader from "../../components/helpers/ErrorLoader";
import { useParams } from "react-router-dom";
import api from "../../components/api/api";

const CompanyApplicants = () => {
  const applicantsData = {
    breadcrumb: {
      parent: "My jobs",
      current: "Backend Intern",
    },
    decisionMessage: "Decision made. Candidate was notified.",
  };
  const [jobData, setJobData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [applicantData,setApplicantsData] = useState(null);
  const {id} = useParams();

  const [currentStatus, setCurrentStatus] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(`/api/jobs/${id}`);
        const response = await api.get(`/api/applications/jobs/${id}`)
        setJobData(res.data.data);
        setApplicantsData(response.data.data);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  if (loading) return <Loader />;
  if (!jobData || !applicantData) return <ErrorLoader />;
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
            {getInitials(jobData.title)}
          </div>
        </div>

        <div className="w-full flex justify-between">
          <div className="  flex  flex-col">
            <div className="text-3xl font-bold">
              {jobData.title}: Applicants
            </div>

            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Badge
                  type={badgeType[jobData.type]}
                  text={jobData.type}
                />
                <div>{jobData.location}</div>
                <div>{formattedDate(jobData.deadline)}</div>
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
        {applicantData.map((applicants) => {
          return (
            <ApplicantsCard
              key={applicants.id}
              name={applicants.user.profile.fullName}
              initials={getInitials(applicants.user.profile.fullName)}
              email={applicants.user.email}
              phone={applicants.user.profile.phone}
              skills={applicants.user.profile.skills.split(",")}
              id={applicants.id}
              coverletter={applicants.message}
              appliedDate={formattedDate(applicants.appliedAt)}
              status={applicants.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompanyApplicants;
