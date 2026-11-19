import React from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({page, totalPages, onChange}) => {

    const pages = [1, 2, 3, "...", totalPages];

  return (
    <div className="flex items-center gap-2">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="h-9 w-9 flex items-center justify-center rounded-lg border-gray-300 text-gray-500 border bg-white hover:cursor-pointer disabled:opacity-40"
      >
        <FiChevronLeft />
      </button>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2 text-gray-400">...</span>
        ) : (
          <button
            key={i}
            onClick={() => onChange(p)}
            className={`h-9 w-9 rounded-lg text-sm ${
              p === page
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-300"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-300 text-gray-500 bg-white hover:cursor-pointer disabled:opacity-40"
      >
        <FiChevronRight />
      </button>
    </div>
  )
}

export default Pagination