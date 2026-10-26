import React from 'react'
import { Outlet } from 'react-router-dom'
import SeekerNavBar from '../../pages/seeker/SeekerNavBar'

const SeekerLayout = () => {
    return (
        <div>
            <SeekerNavBar />
            <Outlet />
        </div>
    )
}

export default SeekerLayout