import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/global/Button';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa6';
import { FiBell } from 'react-icons/fi';







const LoginBtns = () => {
  return (
    <>
      <Link to={"/login"} >
        <button className='px-6 py-2 cursor-pointer border h-10  border-gray-300 rounded-3xl'>
          Log in
        </button>
      </Link>
      <Link to={"/register"} >
        <button className=" px-6 py-2 cursor-pointer border h-10 border-primary text-white shadow-lg bg-primary rounded-3xl">
          Sign up
        </button>
      </Link>
    </>
  )
}
const SeekerProfile = () => {
  return (
    <>
      <Link to={"/seeker/notification"}>
        <div className='text-gray-500 border h-10 w-10 flex justify-center items-center text-xl p-2 border-gray-300  rounded-full'>
          <span className='relative '>
            <FiBell />
            <span className='absolute  bg-red-500 h-1.75 w-1.75 top-0 right-[6%] rounded-4xl '>
            </span>
          </span>
        </div>
      </Link>
      <Link to={"/seeker/profile"}>
        <div className='flex items-center justify-between gap-2  pr-1.5 pl-1 py-1 border border-gray-300  rounded-4xl cursor-pointer'>
          <div className='p-2 w-10 h-full text-white font-bold bg-linear-to-r from-fuchsia-600 to-purple-600 rounded-full flex justify-center items-center tracking-wider'>JD</div>
          <div className='w-30 flex items-center text-center justify-center gap-4'>
            <span className='text-lg tracking-wide capitalize'>jhon Doe</span>
            <span ><FaChevronDown size={14}/></span>
          </div>
        </div>
      </Link>
    </>
  )
}
const SeekerNavBar = ({ navLinks = [] }) => {

  if (navLinks.length === 0) {
    return <div className='text-xl text-red-400 text-center p-2'>Error on NavBar.  Be sure to set navLinks props.</div>
  }

  const { token } = useContext(AuthContext)

  return (
    <nav className='seekerNav flex justify-between items-center h-19'>
      <div className='flex  items-center'>
        <h1 className='text-2xl  font-bold'>
          <span >Job </span>
          <span className="bg-linear-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Portal.
          </span>
        </h1>
        <ul className='flex items-center gap-5 ml-15 text-lg'>

          {
            navLinks.map((e) => {
              return (

                <li
                  key={e.title}
                >
                  <NavLink to={e.location} className={({ isActive }) =>
                    `px-4 py-2 rounded-4xl transition-colors duration-200 ${isActive ? "text-blue-700 bg-blue-200/50" : "text-gray-400"
                    }`
                  }>
                    {e.title}

                  </NavLink>
                </li>

              );
            })
          }

        </ul>
      </div>
      {/* login buttons or profile */}
      <div className='flex items-center gap-3 h-10'>
        <SeekerProfile />
      </div>
    </nav>
  )
}

export default SeekerNavBar