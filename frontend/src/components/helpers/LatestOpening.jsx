import React from 'react'
import PostedJobCard from './PostedJobCard'
import { postedJobs } from '../../pages/public/HomePage'

const LatestOpening = () => {
  return (
   <section className="flex flex-col gap-4   pt-8 mb-8">
        <div >
          <h2 className="text-xl font-bold">Latest openings</h2>
          <p className="text-gray-400 text-sm">Fresh roles from approved companies.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {
            postedJobs.map((job, i) => {
              return (
                <PostedJobCard id={job.id} title={job.title} company={job.company} companyInitials={job.companyInitials} logoColor={job.logoColor} location={job.location} salary={job.salary} type={job.type} skills={job.skills} postedAgo={job.postedAgo} bookmarked={job.bookmarked} />
              )
            })
          }
        </div>
      </section>
  )
}

export default LatestOpening