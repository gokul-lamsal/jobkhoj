import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import AdminCompanyTopBar from './AdminCompanyTopBar'



const AdminCompanyLayout = ({
    title = 'Dashboard',
    logoTo = '/',
    navGroups = [],
    profile,
    onLogout,
}) => {
    return (
        <div className='flex min-h-screen bg-page'>
            <div className='sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r-2 border-slate-200/70 bg-white'>
                <Link to={logoTo} className='flex h-19 shrink-0 items-center border-b-2 border-slate-200/70 px-6'>
                    <h1 className='text-2xl font-bold'>
                        <span>Job </span>
                        <span className='bg-linear-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            Portal.
                        </span>
                    </h1>
                </Link>

                <nav className='flex flex-1 flex-col gap-7 overflow-y-auto px-4 py-6'>
                    {navGroups.map(({ label, links = [] }) => (
                        <div key={label} className='flex flex-col gap-1'>
                            <p className='px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-wider text-gray-400'>
                                {label}
                            </p>
                            {links.map(({ title, to, icon: Icon, end }) => (
                                <NavLink key={title} to={to} end={end} className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors duration-200 ${isActive
                                        ? "bg-indigo-50 text-indigo-700"
                                        : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"
                                    }`
                                }>
                                    <Icon size={18} className='shrink-0' />
                                    <span className='flex-1'>{title}</span>
                                    {title === "Notifications"  && (
                                        <span className='flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[11px] font-bold text-white'>
                                            3
                                        </span>
                                    )}
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </nav>

                <div className='shrink-0 border-t-2 border-slate-200/70 px-4 py-5'>
                    <button
                        type='button'
                        onClick={onLogout}
                        className='flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:bg-slate-50 hover:text-gray-900 cursor-pointer'
                    >
                        <FiLogOut size={18} className='shrink-0' />
                        Log out
                    </button>
                </div>
            </div>

            <div className='flex min-w-0 flex-1 flex-col'>
                <AdminCompanyTopBar title={title} profile={profile} />
                <main className='px-8 py-6'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default AdminCompanyLayout
