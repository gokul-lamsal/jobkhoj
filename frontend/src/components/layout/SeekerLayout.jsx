import React from 'react'
import { Outlet } from 'react-router-dom'
import SeekerNavBar from '../../pages/seeker/SeekerNavBar'
import Footer from '../global/Footer'

const SeekerLayout = () => {
    return (
        <>
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
            <Footer />

        </>
    )
}

export default SeekerLayout