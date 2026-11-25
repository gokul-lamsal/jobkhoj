import React from 'react'
import { MdErrorOutline } from 'react-icons/md'

const ErrorLoader = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center">
            <MdErrorOutline className="text-5xl text-red-500" />
            <p className="text-sm font-medium text-gray-500">Something went wrong. Please try again later.</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-2 rounded-md bg-primary px-4 py-2 text-sm text-white hover:opacity-90"
            >
                Try again
            </button>
        </div>
    )
}

export default ErrorLoader