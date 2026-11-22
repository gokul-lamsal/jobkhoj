import React from 'react'
import { FiBriefcase, FiGrid, FiUser } from 'react-icons/fi'
import { LuBuilding } from 'react-icons/lu'
import AdminCompanyLayout from '../AdminCompanyShared/AdminCompanyLayout'

const navGroups = [
    {
        label: 'Administration',
        links: [
            { title: 'Dashboard', to: '/admin', icon: FiGrid, end: true },
            { title: 'Pending companies', to: '/admin/pending-companies', icon: LuBuilding },
            { title: 'Users', to: '/admin/users', icon: FiUser },
            { title: 'Jobs', to: '/admin/jobs', icon: FiBriefcase },
        ],
    },
]

const profile = {
    initials: 'PA',
    name: 'Platform Admin',
    subtitle: 'Admin',
}

const AdminLayout = () => {
    return (
        <AdminCompanyLayout
            logoTo='/admin'
            navGroups={navGroups}
            profile={profile}
        />
    )
}

export default AdminLayout
