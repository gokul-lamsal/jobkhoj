import React from 'react'
import {
    FiBriefcase,
    FiClock,
    FiGrid,
    FiSend,
    FiUser,
    FiUsers,
} from 'react-icons/fi'
import Button from '../../components/global/Button'
import { StatsCard } from '../seeker/SeekerDashBoard'
import { Link } from 'react-router-dom';

//   <StatsCard
//             key={label}
//             label={label}
//             Icon={Icon}
//             bg={bg}
//             color={color}
//             value={value}
//             textColor={textColor}
//           />
const stats = [
    { label: "Total users", value: "1,284", Icon: FiUsers, bg: "bg-indigo-100", textColor: "text-indigo-700" },
    { label: "Job seekers", value: "1,102", Icon: FiUser, bg: "bg-sky-100", textColor: "text-sky-700" },
    { label: "Companies", value: "181", Icon: FiGrid, bg: "bg-violet-100", textColor: "text-violet-700" },
    { label: "Pending approval", value: "4", Icon: FiClock, bg: "bg-amber-100", textColor: "text-amber-700" },
    { label: "Total jobs", value: "536", Icon: FiBriefcase, bg: "bg-emerald-100", textColor: "text-emerald-700" },
    { label: "Applications", value: "3,906", Icon: FiSend, bg: "bg-rose-100", textColor: "text-rose-700" },
];


const breakdowns = [
    {
        label: 'Users',
        note: '1102 seekers · 181 companies',
        segments: [
            { width: '86%', color: 'bg-sky-600' },
            { width: '14%', color: 'bg-sky-200' },
        ],
    },
    {
        label: 'Companies',
        note: '120 approved · 61 other',
        segments: [
            { width: '66%', color: 'bg-emerald-500' },
            { width: '34%', color: 'bg-emerald-200' },
        ],
    },
    {
        label: 'Jobs',
        note: '412 active · 124 inactive',
        segments: [
            { width: '77%', color: 'bg-orange-600' },
            { width: '23%', color: 'bg-orange-200' },
        ],
    },
]

const pendingCompanies = [
    {
        name: 'StartUp Hub',
        email: 'founder@startuphub.com',
        location: 'Pokhara, Nepal',
        initials: 'SH',
        gradient: 'from-orange-400 to-amber-500',
    },
    {
        name: 'CloudNine Tech',
        email: 'hr@cloudnine.io',
        location: 'Pokhara, Nepal',
        initials: 'CN',
        gradient: 'from-pink-500 to-rose-500',
    },
    {
        name: 'Pixel Studio',
        email: 'team@pixelstudio.co',
        location: 'Bhaktapur, Nepal',
        initials: 'PS',
        gradient: 'from-fuchsia-500 to-pink-600',
    },
]

const AdminDashboard = () => {
    return (
        <div className='flex flex-col gap-6'>
            <div>
                <h1 className='text-2xl font-bold text-gray-900'>Platform overview</h1>
                <p className='text-sm text-gray-500'>
                    A quick look at how the portal is doing.
                </p>
            </div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
                {stats.map(({ label, value, bg, Icon,color="text-slate-700" }) => (
                    <StatsCard
                        key={label}
                        label={label}
                        Icon={Icon}
                        bg={bg}
                        value={value}
                        color={color}
                    />
                ))}
            </div>

            <div className='rounded-2xl border border-gray-200 bg-white py-6 px-5 shadow-xs'>
                <h2 className='text-lg font-bold text-gray-900'>Platform breakdown</h2>
                <div className='mt-5 grid grid-cols-1 gap-6 md:grid-cols-3'>
                    {breakdowns.map(({ label, note, segments }) => (
                        <div key={label} className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between gap-3'>
                                <p className='text-sm font-semibold text-gray-900'>{label}</p>
                                <p className='text-right text-xs text-gray-500'>{note}</p>
                            </div>
                            <div className='flex h-2 w-full overflow-hidden rounded-full bg-gray-100'>
                                {segments.map((segment, index) => (
                                    <span
                                        key={index}
                                        className={`h-full ${segment.color}`}
                                        style={{ width: segment.width }}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='rounded-2xl py-4 px-5 border border-gray-300 bg-white '>
                <div className='flex items-start justify-between gap-4'>
                    <div>
                        <h2 className='text-lg font-bold text-gray-900'>
                            Companies waiting for approval
                        </h2>
                        <p className='text-sm text-gray-500'>
                            Review and approve before they can post jobs.
                        </p>
                    </div>
                    <Link to={"pending-companies"} className='h-10 w-32 shrink-0'>
                        <Button type='button' text='View all 4 >' btnType='secondary' />
                    </Link>
                </div>

                <div className='mt-5 flex flex-col [&>div]:not-last:pb-4 divide-y-2 divide-gray-200 '>
                    {pendingCompanies.map(({ name, email, location, initials, gradient }) => (
                        <></>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
