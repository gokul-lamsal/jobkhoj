import React, { useState } from 'react'
import { CiBookmark } from 'react-icons/ci';
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';
import { FiDollarSign } from 'react-icons/fi';
import { MdOutlineHistory, MdOutlineLocationOn } from 'react-icons/md';
import Badge from '../../components/global/Badge';
import Tag from '../../components/global/Tag';
import Button from '../../components/global/Button';

const PostedJobCard = ({
    title,
    company,
    companyInitials,
    logoColor = "purple",
    location,
    salary,
    type,
    skills = [],
    postedAgo,
    bookmarked = false,
    onToggleBookmark,
}) => {
    const gradients = {
        indigo: "from-indigo-600 to-indigo-900",
        blue: "from-blue-600 to-blue-900",
        emerald: "from-emerald-600 to-emerald-900",
        purple: "from-purple-600 to-purple-900",
    };

    const badgeType = {
        "contract": "success",
        "part time": "warning",
        "internship": "primary",
        "full time": "info"
    }
    const [Isbookmarked, setIsBookMarked] = useState(false)
    const changeBookmarkState = () => {
        setIsBookMarked(prev => !prev)
    }

    return (
        <div className='py-4 px-5 flex flex-col gap-4 border-2 border-gray-300 bg-white cursor-pointer hover:scale-105 hover:shadow shrink transition-all duration-200 ease-out min-h-fit h-55 rounded-2xl'>
            <div className='flex gap-4 '>
                <div className={`h-13 w-13 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-linear-to-b ${gradients[logoColor]}`} >
                    {companyInitials}
                </div>
                <div className='flex flex-col '>
                    <h3 className='font-bold -mt-0.5 text-lg'>{title}</h3>
                    <span className=' text-sm  -mt-0.5 font-semibold text-gray-400'>{company}</span>
                </div>
                <button onClick={changeBookmarkState} className={`ml-auto self-start border font-bold ${Isbookmarked ? "border-yellow-400  text-yellow-400" : "border-gray-400 text-gray-600"} cursor-pointer p-2 rounded-xl`}>

                    {Isbookmarked ? (<FaBookmark size={22} />) : (<FaRegBookmark size={22} />)}

                </button>
            </div>
            {/* location */}
            <div className='text-gray-400 flex text-sm gap-4 items-center'>
                <div className='flex items-center gap-0.5'>
                    <span>
                        <MdOutlineLocationOn size={17} />
                    </span>
                    <span>
                        {location}
                    </span>
                </div>
                <div className='flex items-center gap-0.5'>
                    <span>
                        <FiDollarSign size={17} />
                    </span>
                    <span>
                        {salary}
                    </span>
                </div>
            </div>
            {/* tag */}
            <div className='flex items-center gap-2 border-b-2 pb-4 border-gray-300'>
                <Badge type={badgeType[type.toLowerCase()]} text={type} />
                {
                    skills?.map((skill, i) => {
                        return (
                            <Tag tag={skill} />
                        )
                    })
                }
            </div>
            {/* Time */}
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1 text-gray-500 text-sm'>
                  <MdOutlineHistory size={18}/>  
                  <span>{postedAgo}</span>
                </div>
                <div className='h-10  text-center'>
                    <Button type='button' text={"Apply now"} />
                </div>
            </div>
        </div >
    )
}

export default PostedJobCard