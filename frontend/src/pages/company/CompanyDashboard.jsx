import React from 'react'
import { Link } from 'react-router-dom'
import Button from "../../components/global/Button"
import { FiPlus } from 'react-icons/fi'
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
    jobs:[
      {
        title:"Frontend developer",
        amt:24,
      },
      {
        title:"UI/UX designer",
        amt:17,
      },
      {
        title:"Backend developer",
        amt:12,
      },
      {
        title:"QA Engineer",
        amt:20,
      },
    ],
    totalJobs:73
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
        <div className="h-10">
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
              companyDetails.jobs.map((j,i)=>{
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
                        <div style={{ width: (j.amt/companyDetails.totalJobs) * 100 + "%" }} className='rounded-2xl h-full bg-purple-700 w-[20%]'>

                        </div>
                      </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CompanyDashboard