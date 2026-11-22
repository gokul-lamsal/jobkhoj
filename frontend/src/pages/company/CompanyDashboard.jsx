import React from 'react'
import { Link } from 'react-router-dom'
import Button from "../../components/global/Button"
import { FiCheck, FiPlus, FiX } from 'react-icons/fi'
import Badge from '../../components/global/Badge'
import { gradients, statusBadge } from '../../components/helpers/ColorAndBadge'


const RecentApplication = () => {
  const applicationList = [
    { "id": 101, "name": "John Doe", "initials": "JD", "jobTitle": "Frontend Developer", "timeAgo": "2 hours ago", "status": "PENDING" },
    { "id": 90, "name": "Rohan Karki", "initials": "RK", "jobTitle": "Backend Intern", "timeAgo": "5 days ago", "status": "REJECTED" },
    { "id": 102, "name": "Jane Smith", "initials": "JS", "jobTitle": "Backend Intern", "timeAgo": "5 hours ago", "status": "PENDING" },
    { "id": 103, "name": "Suman Shrestha", "initials": "SS", "jobTitle": "Frontend Developer", "timeAgo": "Yesterday", "status": "PENDING" },
    { "id": 98, "name": "Alice Wong", "initials": "AW", "jobTitle": "QA Engineer", "timeAgo": "2 days ago", "status": "ACCEPTED" },
    { "id": 93, "name": "Priya Gurung", "initials": "PG", "jobTitle": "UI/UX Designer", "timeAgo": "4 days ago", "status": "ACCEPTED" },
    
  ]
  return (
    <div className="flex my-8  flex-col gap-4 py-4 px-5 border border-gray-300 bg-white rounded-2xl">
      <div className='flex justify-between border-b pb-4 border-gray-200'>
        <div >
          <h2 className="font-bold text-xl">Recent applications</h2>
          <p className="text-sm text-gray-400">
            Newest first, Accept or reject wihout leaving the dashboard.
          </p>
        </div>
        <Link to={"jobs"} className='h-10'>
          <Button type='button' text={"View All >"} btnType='secondary' />
        </Link>
      </div>
      <div className='flex flex-col gap-6  [&>div]:not-last:pb-4 divide-y-2 divide-gray-200 '>
        {
          applicationList.map((list) => {
            return (
              <div key={list.id} className='flex  justify-between items-center '>
                <div className='flex gap-3 items-center'>
                  <div className={`h-11 w-11 rounded-full flex items-center justify-center text-white font-bold text-sm bg-linear-to-b ${gradients["blue"]}`} >
                    {list.initials}
                  </div>
                  <div className='flex flex-col '>
                    <h3 className='font-bold -mt-0.5 '>{list.name}</h3>
                    <span className=' text-[13px]  -mt-0.5 font-semibold text-gray-400'>Applied for {list.jobTitle}. ({list.timeAgo})</span>
                  </div>
                </div>
                <div className='flex w-[20rem] gap-2  justify-between items-center'>
                  <div>
                    <Badge type={statusBadge[list.status.toLowerCase()]} text={"● " + list.status.toLowerCase()} />
                  </div>
                  {
                    list.status === "PENDING" ? (
                      <>
                        <div className="h-9 w-24">
                          <Button
                            type="button"
                            text={
                              <>
                                <FiCheck size={16} />
                                Accept
                              </>
                            }
                            classname={"inline-flex items-center justify-center gap-1.5 border border-emerald-200 bg-emerald-50! text-sm font-medium text-emerald-700! hover:border-emerald-300 hover:bg-emerald-100!"}
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
                            classname={"inline-flex items-center justify-center gap-1.5 border border-rose-200 bg-rose-50! text-sm font-medium text-rose-700! hover:border-rose-300 hover:bg-rose-100!"}
                          />
                        </div>
                      </>
                    ):(
                      <div className='h-9 w-24'>
                      <Button  text={"View"} btnType='secondary'/>
                      </div>
                    )
                  }


                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}
const CompanyDashboard = () => {
  const companyDetails = {
    name: "Jhon",
    applications: 64,
    applicationStatus: [
      {
        title: "Pending",
        per: 33,
      },
      {
        title: "Accepted",
        per: 20,
      },
      {
        title: "Rejected",
        per: 47,
      }
    ],
    jobs: [
      {
        title: "Frontend developer",
        amt: 24,
      },
      {
        title: "UI/UX designer",
        amt: 17,
      },
      {
        title: "Backend developer",
        amt: 12,
      },
      {
        title: "QA Engineer",
        amt: 20,
      },
    ],
    totalJobs: 73
  }
  const barGraphColor = {
    pending: "#ef4444",
    accepted: "#3b82f6",
    rejected: "#22c55e"
  }
  const BarGraph = () => {
    return (
      <div>
        <div className="w-45 h-45 rounded-full relative"
          style={{
            background: `conic-gradient(
          ${barGraphColor.pending} 0% 30%,
          ${barGraphColor.accepted} 30% 65%,
          ${barGraphColor.rejected} 65% 100%
        )`
          }}
        >
          <div className="absolute inset-5 bg-white rounded-full flex flex-col items-center justify-center">
            <p className='text-2xl font-semibold'>{companyDetails.applications}</p>
            <p className='text-gray-400'>total</p>
          </div>
        </div>

      </div>

    )
  }

  return (
    <>
      <div className="flex justify-between">
        <div>

          <h1 className="font-bold text-2xl">Good morning, {companyDetails.name}</h1>
          <p className="text-sm text-gray-400">
            Heere is what is happening with your hiring today
          </p>
        </div>
        <div className="h-10 flex gap-4 items-center">
          <div className='h-3 flex items-center'>
            <Badge text={"Verified company"} type='success' />
          </div>
          <Link to={`post-job`}>
            <Button type="button" btnType="primary" text=<><FiPlus className="mr-1" /> Post a job</> classname={"font-medium bg-white"} />
          </Link>
        </div>
      </div>
      <div className='mt-8 grid  grid-cols-2 gap-6 '>
        <div className="flex h-[20rem] flex-col gap-4 py-4 px-5 border border-gray-300 bg-white cursor-pointer rounded-2xl">
          <div>

            <h2 className="font-bold text-xl">Application status</h2>
            <p className="text-sm text-gray-400">
              All time , {companyDetails.applications} applications
            </p>
          </div>
          <div className='flex gap-5'>
            <BarGraph />
            <div className='flex flex-col grow gap-2'>
              {
                companyDetails.applicationStatus.map((app) => {
                  return (
                    <div className='flex flex-col gap-1.5'>
                      <div className='flex justify-between '>
                        <div className='flex items-center gap-2'>
                          <div style={{ backgroundColor: barGraphColor[app.title.toLowerCase()] }} className={`w-2.5 h-2.5 rounded-full`}></div>
                          <span className='capitalize font-semibold'>{app.title}</span>
                        </div>
                        <div className='flex gap-2 font-semibold items-center'>
                          <span className=''>{Math.floor(companyDetails.applications * (app.per / 100))}</span>
                          <span className='text-[12px] text-gray-500'>({app.per}%)</span>
                        </div>
                      </div>
                      <div className='grow h-2 rounded-2xl bg-gray-300/80'>
                        <div style={{ width: app.per + "%", backgroundColor: barGraphColor[app.title.toLowerCase()] }} className='rounded-2xl h-full'>

                        </div>
                      </div>
                    </div>
                  )
                })
              }
              <div className='mt-6'>
                <Button type='button' text={'Review 21 pending applicants'} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[20rem] flex-col gap-4 py-4 px-5 border border-gray-300 bg-white cursor-pointer rounded-2xl">
          <div className='flex justify-between'>
            <div>
              <h2 className="font-bold text-xl">Applicants by job</h2>
              <p className="text-sm text-gray-400">
                All time , {companyDetails.totalJobs} jobs
              </p>
            </div>
            <Link to={"jobs"} className='w-30 h-10'>
              <Button type='button' text={'All jobs'} btnType='secondary' />
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            {
              companyDetails.jobs.map((j, i) => {
                return (
                  <div className='flex flex-col gap-2 '>
                    <div className='flex  justify-between items-center'>
                      <span>{j.title}</span>
                      <div>
                        <span>{j.amt}</span>
                        <span className='text-[12px] ml-2 text-gray-500'>applicants</span>
                      </div>
                    </div>
                    <div className='grow h-2 rounded-2xl bg-gray-300/80'>
                      <div style={{ width: (j.amt / companyDetails.totalJobs) * 100 + "%" }} className='rounded-2xl h-full bg-purple-700 w-[20%]'>

                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <RecentApplication />
    </>
  )
}

export default CompanyDashboard