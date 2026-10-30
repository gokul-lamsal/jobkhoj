import React from 'react'

const Tag = ({ tag }) => {
    return (
        <span key={tag} className="text-gray-600 text-[14px] rounded-lg px-3 py-0.5 cursor-pointer bg-blue-200/30">
            {tag}
        </span>
    )
}

export default Tag