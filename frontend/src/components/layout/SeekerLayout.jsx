import React from 'react'
import { Outlet } from 'react-router-dom'
import SeekerNavBar from '../../pages/seeker/SeekerNavBar'

const SeekerLayout = () => {
    return (
        <div>
            <SeekerNavBar navLinks={[

                {
                    title: "Browse Jobs",
                    location: "/seeker/browse",
                },
                {
                    title: "Companies",
                    location: "/seeker/company",
                },
                {
                    title: "My application",
                    location: "/seeker/application",
                },
                {
                    title: "Saved job",
                    location: "/seeker/saved",
                },
            ]} />
            <Outlet />
        </div>
    )
}

export default SeekerLayout