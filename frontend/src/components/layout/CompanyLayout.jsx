import React from 'react'
import { FiBell, FiBriefcase, FiGrid, FiPlus } from 'react-icons/fi'
import { LuBuilding } from 'react-icons/lu'
import AdminCompanyLayout from '../AdminCompanyShared/AdminCompanyLayout'

const navGroups = [
    {
        label: 'Employer',
        links: [
            { title: 'Dashboard', to: '/company', icon: FiGrid, end: true },
            { title: 'My jobs', to: '/company/jobs', icon: FiBriefcase },
            { title: 'Post a job', to: '/company/post-job', icon: FiPlus },
            { title: 'Company profile', to: '/company/profile', icon: LuBuilding },
        ],
    },
    {
        label: 'Account',
        links: [
            { title: 'Notifications', to: '/company/notifications', icon: FiBell, },
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
            title='Dashboard'
            logoTo='/company'
            navGroups={navGroups}
            profile={profile}
        />
    )
}

export default CompanyLayout
