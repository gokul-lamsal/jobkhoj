import React from 'react'

const ProfileBlock = ({ initials, name, subtitle }) => {
    return (
        <div className='flex items-center gap-3'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-sky-500 to-indigo-600 text-sm font-bold text-white'>
                {initials}
            </div>
            <div className='hidden leading-tight sm:block'>
                <p className='text-sm font-semibold text-gray-900'>{name}</p>
                {subtitle && <p className='text-xs text-gray-400'>{subtitle}</p>}
            </div>
        </div>
    )
}

const AdminCompanyTopBar = ({ profile }) => {
    return (
        <header className='sticky top-0 z-10 flex h-19 shrink-0 items-center justify-end border-b-2 border-slate-200/70 bg-white px-8'>
            {profile && (
                <div className='flex items-center gap-5'>
                    <ProfileBlock {...profile} />
                </div>
            )}
        </header>
    )
}

export default AdminCompanyTopBar
