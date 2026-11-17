import React from "react";
import PostedJobCard from "../../components/helpers/PostedJobCard";
import Button from "../../components/global/Button";
import { Link } from 'react-router-dom';
import { FaRegBookmark } from "react-icons/fa";


const SeekerSavedJobPage = () => {
  const postedJobs = [
    {
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
      bookmarked: true,
    },
    {
      id: 2,
      title: "Backend Intern",
      company: "TechCorp Pvt Ltd",
      companyInitials: "TC",
      logoColor: "purple",
      location: "Lalitpur, Nepal",
      salary: "NPR 15k-20k",
      type: "Internship",
      skills: ["Node.js", "MySQL", "Express"],
      postedAgo: "3d ago",
      bookmarked: true,
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "InnoLabs",
      companyInitials: "IL",
      logoColor: "blue",
      location: "Kathmandu, Nepal",
      salary: "NPR 80k-120k",
      type: "Full time",
      skills: ["React", "Node.js", "Prisma"],
      postedAgo: "4d ago",
      bookmarked: true,
    },
    {
      id: 3,
      title: "Full Stack Engineer",
      company: "InnoLabs",
      companyInitials: "IL",
      logoColor: "blue",
      location: "Kathmandu, Nepal",
      salary: "NPR 80k-120k",
      type: "Full time",
      skills: ["React", "Node.js", "Prisma"],
      postedAgo: "4d ago",
      bookmarked: true,
    },
  ];
  return (
    <main>

    <section className="py-8 ">
         <div className="flex justify-between">
            <div>

          <h1 className="font-bold text-2xl">Saved jobs</h1>
          <p className="text-sm text-gray-400">
            3 jobs you have bookmarked. click the bookmark again to remove.
          </p>
            </div>
          <div>
            <Link to={`/seeker/browse`}>
            <button className="border-2 border-gray-400 px-3 py-2 rounded-xl font-semibold hover:cursor-pointer ">Browse more jobs</button>
            </Link>
          </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5 mt-10 ">

        {postedJobs.map((job, i) => {
          return (
            <PostedJobCard
              id={job.id}
              title={job.title}
              company={job.company}
              companyInitials={job.companyInitials}
              logoColor={job.logoColor}
              location={job.location}
              salary={job.salary}
              type={job.type}
              skills={job.skills}
              postedAgo={job.postedAgo}
              bookmarked={job.bookmarked}
            />
          );
        })}
         <Link to={`/seeker/browse`}>
             <div className=' py-4 px-5 flex flex-col justify-center items-center gap-2 border-2 border-gray-300  cursor-pointer  min-h-fit h-60 rounded-2xl border-dashed'>
                <FaRegBookmark color="gray" size={30}/>
                <div className="text-gray-500 font-bold text-lg">
                Save more jobs
                </div>
                <div className="text-gray-400">
                Tap the bookmark on any job card.
                </div>
                     </div>
         </Link>
      </div>
    </section>
    </main>
  );
};

export default SeekerSavedJobPage;
