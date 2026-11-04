import React, { useState } from 'react'

const SeekerJobPage = () => {
{/* use this info to build dummy aaile ko lagi paxi yo json change huna sakxa , for now build ui yei use garera
  yo page only seeker lai ho so Auth context ma userToken kei hunu parxa , so null bata hatayera string rakheko
  if u remove the string u cant accesss this page so tyo rakha 

  job page : /seeker/job/{id}

  gg ngga banau majale ani buje paxi yo cmt hatau
  
  */}


  const [jobInfo, setJobInfo] = useState({
    id: 1,
    title: "Frontend Developer",
    jobType: "Full time",
    location: "Lalitpur, Nepal",
    salary: "NPR 50k-70k",
    postedAt: "2 days ago",
    applyBefore: "30 Nov 2026",
    applicants: 24,

    about:
      "We are looking for a Frontend Developer to build fast, accessible interfaces for our SaaS products. You will work closely with designers and backend engineers to ship features every week.",

    responsibilities: [
      "Build responsive pages with React and Tailwind CSS",
      "Connect screens to REST APIs and handle loading and error states",
      "Review code and improve performance across the app",
    ],

    requiredSkills: ["React", "Tailwind CSS", "REST APIs", "Git", "JavaScript"],

    company: {
      name: "TechCorp Pvt Ltd",
      initials: "TC",
      location: "Lalitpur, Nepal",
      description:
        "TechCorp is a leading industry player focusing on innovative solutions.",
      website: "techcorp.com",
    },

    moreFromCompany: [
      {
        id: 2,
        title: "Full Stack Engineer",
        company: "InnoLabs",
        initials: "IL",
        jobType: "Full time",
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "InnoLabs",
        initials: "IL",
        jobType: "Contract",
      },
      {
        id: 4,
        title: "DevOps Intern",
        company: "Global Solutions",
        initials: "GS",
        jobType: "Internship",
      },
    ],
  })
  return (
    <div>SeekerJobPage</div>
  )
}

export default SeekerJobPage