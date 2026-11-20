import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FiBriefcase, FiPhone, FiPlus, FiSend, FiUser } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { SearchDropDown } from "../../components/helpers/SearchBar";
import Badge from "../../components/global/Badge";
import PostedJobCard from "../../components/helpers/PostedJobCard";
import { FaExclamationCircle } from "react-icons/fa";
import Button from "../../components/global/Button";

function CompanyPostJob() {
  const selectedJob = {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Pvt Ltd",
    companyInitials: "TC",
    logoColor: "indigo",
    location: "Lalitpur, Nepal",
    salary: "NPR 50k-70k",
    type: "Full time",
    skills: ["React", "Tailwind", "REST"],
    postedAgo: "2d ago",
    bookmarked: false,
  };
  const profileDetails = {
    name: "John doe",
    email: "john@student.com",
    phone: "9812345678",
    bio: "Professional John Doe looking for growth opportunities. Final year computer science student who enjoys building web apps.",
    location: "Kathmandu, Nepal",
    skills: ["React", "Node js", "MySql", "Tailwind CSS"],
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">Post a new job</h1>
          <p className="text-sm text-gray-400">
            Fill in the details. You can edit or close the job later.
          </p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6 w-[70%]">
          <div className="border bg-white border-gray-300 rounded-2xl shadow-sm">
            <div className="bg-white rounded-2xl px-5 py-6 flex flex-col justify-center gap-3">
              <h1 className="font-bold text-lg">Job details</h1>

              <form action="">
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col w-full gap-2">
                      <label htmlFor="jobDetail">
                        job title <span className="text-red-500">*</span>
                      </label>
                      <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                        <p>
                          <FiBriefcase />
                        </p>

                        <input
                          type="text"
                          name="jobDetail"
                          id="jobDetail"
                          placeholder="Frontend Developer"
                          className="outline-none w-full"
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex flex-col gap-2 w-[50%]">
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

                      <div className="flex flex-col gap-2 w-[50%]">
                        <label htmlFor="jobType">
                          Job type <span className="text-red-500">*</span>
                        </label>
                        <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                          <select
                            name="jobType"
                            className="outline-none w-full"
                          >
                            <option value="Full time">Full time</option>
                            <option value="Internship">Internship</option>
                            <option value="Part time">Part time</option>
                            <option value="Full time">Something</option>
                          </select>
                        </div>
                        <p className="text-sm text-gray-400">
                          Internship, Full time, Part time or Contract.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="flex flex-col gap-2 w-[50%]">
                        <label htmlFor="salary">
                          Salary <span className="text-red-500">*</span>
                        </label>
                        <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                          <p>
                            <BsCurrencyDollar />
                          </p>

                          <input
                            type="text"
                            name="salary"
                            id="salary"
                            placeholder="NPR 30k-70k"
                            className="outline-none w-full"
                          />
                        </div>
                        <p className="text-sm text-gray-400">
                          Optional. Text is fine.
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 w-[50%]">
                        <label htmlFor="jobType">Application deadline </label>
                        <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                          <input
                            type="date"
                            name="date"
                            id="date"
                            className="outline-none w-full"
                          />
                        </div>
                        <p className="text-sm text-gray-400">Optional.</p>
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
                        Describe the role, responsibilities and requirement.
                      </p>
                    </div>
                  </div>
                </div>
              </form>
              <div>
                <h1 className="font-semibold">Required skills</h1>
                <div className="flex gap-2.5">
                  {profileDetails.skills.map((s, i) => {
                    return <Badge text={s} key={i} type="primary" />;
                  })}
                  <button>
                    <Badge
                      text={
                        <>
                          <FiPlus size={16} />
                          Add skill
                        </>
                      }
                      type="add"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 shadow-sm"></div>
          </div>
          <div className="bg-white flex gap-4 p-2 ml-auto">
            <div>
              <Button btnType="secondary" text={"Save as draft"} />
            </div>
            <div>
              <Button text={<> <FiSend className="mr-2" /> Publish job</>} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[25rem]">
          <div className="flex flex-col gap-4 border border-gray-300 rounded-xl p-4 shadow-sm">
            <div>
              <h1 className="font-bold text-lg">Preview</h1>
              <p className="text-sm text-gray-400">
                How job seekers will see it.
              </p>
            </div>
            <div  >
              {selectedJob && (
                <PostedJobCard
                 
                  title={selectedJob.title}
                  company={selectedJob.company}
                  companyInitials={selectedJob.companyInitials}
                  logoColor={selectedJob.logoColor}
                  location={selectedJob.location}
                  salary={selectedJob.salary}
                  type={selectedJob.type}
                  skills={selectedJob.skills}
                  postedAgo={selectedJob.postedAgo}
                  bookmarked={selectedJob.bookmarked}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 border border-gray-300 bg-purple-200 rounded-xl p-4 shadow-sm">
            <div className="flex gap-2">
              <span>
                <FaExclamationCircle size={20} color="purple" />
              </span>
              <p className="text-sm text-purple-600">
                Only approved companies can publish jobs. Pending companies will
                see an error here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPostJob;
