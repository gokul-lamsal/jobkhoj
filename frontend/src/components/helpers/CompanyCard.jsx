import React from 'react'
import { gradients } from './ColorAndBadge'
import { MdOutlineAddLocationAlt, MdOutlineLocationOn } from 'react-icons/md'
import { FaLink } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CompanyCard = ({ name, initials, accentColor, location, description, website }) => {
    const onlyUrl = (url) => {
        const splitUrl = url.split("https://")
        if (splitUrl.length < 2) return url
        return splitUrl[splitUrl.length - 1]
    }
    return (
        <div className='py-4 px-5 flex flex-col gap-4 border-2 border-gray-300 bg-white cursor-pointer hover:scale-105 hover:shadow shrink transition-all duration-200 ease-out min-h-fit h-50 rounded-2xl'>
            <div className='flex gap-3'>
                <div className={`h-13 w-13 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-linear-to-b ${gradients[accentColor]}`} >
                    {initials}
                </div>
                <div className='flex flex-col'>
                    <h3 className='font-bold -mt-0.5 ml-0.5 text-lg'>{name}</h3>
                    <div className='flex gap-1 items-center -mt-0.5 text-sm text-gray-500'>

                        <MdOutlineAddLocationAlt size={16} />
                        <div>
                            {location.isRemote ? <span>
                                Remote
                            </span> : <span>
                                {location.city}, {location.country}
                            </span>}
                        </div>
                    </div>
                </div>

            </div>
            <div className='text-[0.92rem] text-gray-600'>
                {description.length > 120
                    ? description.slice(0, 120) + "..."
                    : description}
            </div>
            <div className='flex justify-between items-center'>
                <a href={website} target="_blank" rel="noopener noreferrer">
                    <div className='text-purple-500 hover:underline flex items-center gap-1.5 text-[15px] font-semibold'>
                        <FaLink />
                        {onlyUrl(website)}
                    </div>
                </a>
                <Link to={"/company/2"}>
                    <div className='bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 active:scale-95 transition-all duration-200 px-4 py-1.5 text-[15px] font-semibold text-white rounded-lg shadow-sm cursor-pointer'>
                        View company
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CompanyCard