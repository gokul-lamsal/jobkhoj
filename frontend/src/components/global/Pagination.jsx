import React from "react";
import { FiChevronDown, FiLoader, FiCheck } from "react-icons/fi";

const Pagination = ({ pagination, shown, loading, onLoadMore }) => {
  if (!pagination) return null;

  const { page, limit, total, totalPages } = pagination;
  const hasMore = page < totalPages;
  const nextCount = Math.min(limit, total - shown);
  const percent = total ? Math.round((shown / total) * 100) : 0;

  if (!hasMore) {
    return (
      <div className="flex flex-col justify-center w-full items-center gap-2">
        <p className="text-[15px] font-medium text-gray-900">Nothing more to load</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3.5 py-7 bg-linear-to-b from-white to-gray-50/60">
      <button
        onClick={onLoadMore}
        disabled={loading}
        className="group flex items-center gap-2.5 h-[46px] px-5.5 rounded-xl border border-gray-200 bg-white text-[15px] font-medium text-gray-800 shadow-sm transition-colors hover:cursor-pointer hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-600 disabled:border-gray-200"
      >
        {loading ? (
          <>
            <FiLoader className="h-4 w-4 animate-spin" />
            Loading…
          </>
        ) : (
          <>
            Load more
            <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs font-semibold text-blue-700 group-hover:bg-blue-100">
              +{nextCount}
            </span>
            <FiChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </>
        )}
      </button>

      <div className="flex items-center gap-3">
        <div className="h-1.5 w-36 overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-linear-to-r from-blue-600 to-blue-900 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-sm text-gray-500">
          Showing <b className="font-semibold text-gray-900">{shown}</b> of{" "}
          <b className="font-semibold text-gray-900">{total}</b>
        </span>
      </div>
    </div>
  );
};

export default Pagination;