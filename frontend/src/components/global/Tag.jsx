import React from 'react'

const Tag = ({ tag }) => {
    return (
        <div key={tag} className="text-gray-600 text-nowrap text-[14px] rounded-lg px-3 py-0.5 cursor-pointer bg-blue-200/30">
            {tag}
        </div>
    )
}

export default Tag