import React from 'react'
import { CgSpinner } from 'react-icons/cg'

const Loader = () => {
    return (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3">
  <CgSpinner className="animate-spin text-5xl text-primary" />
  <p className="text-sm font-medium text-gray-500 animate-pulse">
    Please wait...
  </p>
</div>
 )
}

export default Loader