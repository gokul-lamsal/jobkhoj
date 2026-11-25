import React, { useEffect, useState } from 'react'
import {
    FiBriefcase,
    FiCheck,
    FiClock,
    FiGrid,
    FiSend,
    FiUser,
    FiUsers,
    FiX,
} from 'react-icons/fi'
import Button from '../../components/global/Button'
import { StatsCard } from '../seeker/SeekerDashBoard'
import { Link } from 'react-router-dom';
import { gradients } from '../../components/helpers/ColorAndBadge';
import Loader from '../../components/helpers/Loader';
import ErrorLoader from '../../components/helpers/ErrorLoader';
import api from '../../components/api/api';






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
const PendingCompaniesList = ({ name, email, location, initials, gradient }) => {
    return (
        <div key={email} className='flex  justify-between items-center '>
            <div className='flex gap-3 items-center'>
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center text-white font-bold text-sm bg-linear-to-l ${gradient}`} >
                    {initials}
                </div>
                <div className='flex flex-col '>
                    <h3 className='font-bold -mt-0.5 '>{name}</h3>
                    <span className=' text-[13px]  -mt-0.5 font-semibold text-gray-400'>{email} •  {location} </span>
                </div>

            </div>
            <div className='flex gap-2'>
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
            </div>
        </div>
    )
}
const getSegmentWidth = (part, total) => {
    if (!total) return "0%";
    console.log(Math.round((part / total) * 100) + "%");

    return Math.round((part / total) * 100) + "%";
}
const AdminDashboard = () => {
    const [adminStats, setAdminStats] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {

                const res = await api.get("/api/admin/stats")
                setAdminStats(res.data.data);
            } catch (err) {

            } finally {
                setLoading(false)
            }

        }
        fetchData()
    }, [])
    if (loading) return <Loader />
    if (!adminStats) return <ErrorLoader />
    const stats = [
        { label: "Total users", value: adminStats.users.total, Icon: FiUsers, bg: "bg-indigo-100", textColor: "text-indigo-700" },
        { label: "Job seekers", value: adminStats.users.seekers, Icon: FiUser, bg: "bg-sky-100", textColor: "text-sky-700" },
        { label: "Companies", value: adminStats.users.companies, Icon: FiGrid, bg: "bg-violet-100", textColor: "text-violet-700" },
        { label: "Pending approval", value: adminStats.companies.pending, Icon: FiClock, bg: "bg-amber-100", textColor: "text-amber-700" },
        { label: "Total jobs", value: adminStats.jobs.total, Icon: FiBriefcase, bg: "bg-emerald-100", textColor: "text-emerald-700" },
        { label: "Applications", value: adminStats.applications.total, Icon: FiSend, bg: "bg-rose-100", textColor: "text-rose-700" },
    ];

    const totalUser = adminStats.users.seekers + adminStats.users.companies
    const totalCompany = adminStats.companies.approved + adminStats.companies.pending
    const totalJobs = adminStats.jobs.total
    const breakdowns = [
        {
            label: 'Users',
            note: `${adminStats.users.seekers} seekers · ${adminStats.users.companies} companies`,
            segments: [
                { width: getSegmentWidth(adminStats.users.seekers, totalUser), color: 'bg-sky-600' },
                { width: getSegmentWidth(adminStats.users.companies, totalUser), color: 'bg-sky-200' },
            ],
        },
        {
            label: 'Companies',
            note: `${adminStats.companies.approved} approved · ${adminStats.companies.pending} pending`,
            segments: [
                { width: getSegmentWidth(adminStats.companies.approved, totalCompany), color: 'bg-emerald-500' },
                { width: getSegmentWidth(adminStats.companies.pending, totalCompany), color: 'bg-emerald-200' },
            ],
        },
        {
            label: 'Jobs',
            note: `${adminStats.jobs.active} active · ${totalJobs - adminStats.jobs.active} inactive`,
            segments: [
                { width: getSegmentWidth(adminStats.jobs.total, totalCompany), color: 'bg-orange-600' },
                { width: getSegmentWidth(adminStats.jobs.total, totalJobs - adminStats.jobs.active), color: 'bg-orange-200' },
            ],
        },
    ]
    return (
        <div className='flex flex-col gap-6'>
            <div>
                <h1 className='text-2xl font-bold text-gray-900'>Platform overview</h1>
                <p className='text-sm text-gray-500'>
                    A quick look at how the portal is doing.
                </p>
            </div>

            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
                {stats.map(({ label, value, bg, Icon, color = "text-slate-700" }) => (
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
                        <Button type='button' text='View all >' btnType='secondary' />
                    </Link>
                </div>

                <div className='mt-5 flex flex-col gap-6 [&>div]:not-last:pb-4 divide-y-2 divide-gray-200 '>
                    {pendingCompanies.map(({ name, email, location, initials, gradient }) => (
                        <PendingCompaniesList name={name} email={email} location={location} initials={initials} gradient={gradient} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
