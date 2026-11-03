import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import Button from '../../components/global/Button'
import SearchBar from '../../components/helpers/SearchBar'
import { VscSettingsCompact } from 'react-icons/vsc'
import { FiDollarSign, FiMapPin } from 'react-icons/fi'
import { TbCurrencyRupeeNepalese } from 'react-icons/tb'

const Browsepage = () => {
  const [filter, setFilter] = useState({
    jobType: null,
    location:"",
    salary:"",
  })
  const filterChange = (e)=>{
    setFilter(prev=>({...prev,[e.target.name]:e.target.value}))
    console.log(filter);
    
  }
  return (
    <main>
      {/* search bar */}
      <section className='bg-white mb-5 py-4 h-30 border-b-2 flex items-center justify-center gap-3 border-slate-200/70   text-center'>
        <SearchBar />
      </section>
      {/* Result section */}
      <section className='flex gap-8 my-5 '>
        <div className="h-[30rem] w-[20rem] rounded-2xl border border-slate-300/90 bg-white px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-blue-100">
                <VscSettingsCompact className="text-lg" />
              </div>
              <div className="leading-tight">
                <h2 className="text-base font-semibold text-gray-900">Filters</h2>
                <p className="text-xs text-gray-500">Refine your results</p>
              </div>
            </div>

            <button
              type="button"
              className="rounded-full px-3 py-1 text-sm font-medium text-blue-700
               transition-colors duration-150 cursor-pointer
               hover:bg-blue-50 hover:text-blue-800
               
               active:scale-95"
            >
              Clear all
            </button>
          </div>
          {/* JOb Type filter */}
          <div className='mt-4 border-b pb-5 border-gray-200'>
            <h2
              className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500"
            >
              Job type
            </h2>
            <ul className='mt-3 flex flex-col gap-2 ml-2'>
              {
                ["internship", "full_time", "part_time", "contract"].map((job) => {
                  return (
                    <li className='flex  items-center gap-2 text-[15px] font-semibold text-gray-600' key={job}>
                      <input
                        type="checkbox"
                        className="appearance-none w-4 h-4 cursor-pointer rounded border border-gray-300 
  checked:bg-primary checked:border-primary 
  checked:after:content-['✓'] checked:after:text-white 
  checked:after:flex checked:after:items-center checked:after:justify-center
  checked:after:text-xs"
                        name={job}
                        id={job}
                        checked={filter.jobType === job}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFilter(prev => ({ ...prev, jobType: job }))
                          }
                        }}
                      />
                      <label htmlFor={job} className='capitalize'>{job.replace("_", " ")}</label>
                    </li>
                  )
                })
              }


            </ul>
          </div>
          {/* extra filters */}
          <div className="mt-4 flex flex-col gap-5">
            {/* Location */}
            <div>
              <h2
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
                Location
              </h2>
              <div className="relative">
                <FiMapPin className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  onChange={filterChange}
                  value={filter.location}

                  type="text"
                  name="location"
                  placeholder="e.g. Kathmandu"
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900
                   placeholder:text-gray-400 shadow-sm transition
                   hover:border-gray-400
                   focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* Salary */}
            <div>
              <h2
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gray-500"
              >
            Salary
              </h2>
              <div className="relative">
                <TbCurrencyRupeeNepalese className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  onChange={filterChange}
                  value={filter.salary}
                  type="text"
                  inputMode="numeric"
                  name="salary"
                  placeholder="e.g. 50,000"
                  className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900
                   placeholder:text-gray-400 shadow-sm transition
                   hover:border-gray-400
                   focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className='border border-red-400 h-30 grow'>

        </div>
      </section>
    </main>
  )
}

export default Browsepage