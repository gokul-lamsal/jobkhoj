import React, { useState } from 'react'
import { CiLocationOn, CiSearch } from 'react-icons/ci'
import Button from '../global/Button'
import { FaChevronDown } from 'react-icons/fa';


const SearchDropDown = ({ selectedType, setSelectedType }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button
                onClick={() => setIsOpen(prev => !prev)}
                type="button"
                className={`flex justify-between items-center py-2  w-full  h-full cursor-pointer  gap-2 rounded-lg ${selectedType ? "text-black":"text-gray-400"}  px-4`}
            >
                {selectedType ?? "Work mode"}
                <FaChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            <div
                className={`absolute left-0 z-10 mt-2 w-full  rounded-lg border border-gray-200 bg-white p-2 shadow-lg transition-all duration-300 ease-out ${isOpen
                    ? " translate-y-0 scale-100 opacity-100"
                    : " -translate-y-2 scale-95 opacity-0"
                    }`}
            >
                <ul className="space-y-1 text-sm font-medium text-gray-700">
                    {["Remote", "On-site","All"].map((item) => (
                        <li key={item} >
                            <button
                                onClick={() => {
                                    setSelectedType(item)
                                    setIsOpen(false)
                                }}
                                className="cursor-pointer  w-full rounded-md px-3 py-2 hover:bg-gray-100 hover:text-indigo-600"
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const SearchBar = () => {
    const [selectedType, setSelectedType] = useState(null)
    return (
        <div className=" max-w-280 bg-white border gap-4 border-gray-200 shadow-lg shadow-indigo-100 p-2 rounded-xl flex items-center ">
            <div className="flex w-[22rem]  items-center gap-2 px-4">
                <CiSearch color="gray" size={20} className="shrink-0" />
                <input
                    type="text"
                    placeholder="Job title, skill or keyword"
                    className="w-full min-w-0 py-2 outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
            </div>

            {/* Location */}
            <div className="flex w-[15rem] min-w-0 items-center gap-2 pl-4 pr-2 border-l border-gray-200">
                <CiLocationOn color="gray" size={20} className="shrink-0" />
                <input
                    type="text"
                    placeholder="Location"
                    className="w-full min-w-0 py-2 outline-none text-sm text-gray-700 placeholder:text-gray-400"
                />
            </div>

            <div className="w-[10rem] shrink-0 pl-2 pr-2 border-l border-gray-200">
                <div className="w-full relative   text-sm text-gray-700 outline-none bg-transparent cursor-pointer">

                    <SearchDropDown selectedType={selectedType} setSelectedType={setSelectedType} />
                </div>
            </div>

            <div className="w-[8rem] ">
                <Button text={"Search"} />
            </div>
        </div>
    )
}

export default SearchBar