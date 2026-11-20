import React from 'react'
import { FiBell, FiBriefcase, FiGrid, FiPlus } from 'react-icons/fi'
import { LuBuilding } from 'react-icons/lu'
import AdminCompanyLayout from '../AdminCompanyShared/AdminCompanyLayout'

const navGroups = [
    {
        label: 'Employer',
        links: [
            { title: 'Dashboard', to: '/employer', icon: FiGrid, end: true },
            { title: 'My jobs', to: '/employer/jobs', icon: FiBriefcase },
            { title: 'Post a job', to: '/employer/post-job', icon: FiPlus },
            { title: 'Company profile', to: '/employer/profile', icon: LuBuilding },
        ],
    },
    {
        label: 'Account',
        links: [
            { title: 'Notifications', to: '/employer/notifications', icon: FiBell, },
        ],
    },
]

const profile = {
    initials: 'RS',
    name: 'Jhon doe',
    subtitle: 'TechCorp Pvt Ltd',
}

const CompanyLayout = () => {
    return (
        <AdminCompanyLayout
            logoTo='/employer'
            navGroups={navGroups}
            profile={profile}
        />
    )
}

export default CompanyLayout
