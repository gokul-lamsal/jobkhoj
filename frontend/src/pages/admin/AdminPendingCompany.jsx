import React, { useEffect, useState } from "react";
import Badge from "../../components/global/Badge";
import {
  badgeType,
  gradients,
  statusBadge,
} from "../../components/helpers/ColorAndBadge";
import { Link } from "react-router-dom";
import Button from "../../components/global/Button";
import { LuEye } from "react-icons/lu";
import { FiCheck, FiPhone, FiX } from "react-icons/fi";
import { onlyUrl } from "../../components/helpers/CompanyCard";
import { FaLink } from "react-icons/fa";
import Pagination from "../../components/global/Pagination";
import Modal from "../../components/helpers/Modal";
import Loader from "../../components/helpers/Loader";
import ErrorLoader from "../../components/helpers/ErrorLoader";
import api from "../../components/api/api";

const AdminPendingCompany = () => {
 
  const [pendingCompanies, setPendingCompanies] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await api.get("/api/admin/companies/pending?page=1&limit=5")
        setPendingCompanies(res.data.data);
      } catch (err) {

      } finally {
        setLoading(false)
      }

    }
    fetchData()
  }, [])
  if (loading) return <Loader />
  if (!pendingCompanies) return <ErrorLoader />

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-2xl">Pending Companies</h1>
          <p className="text-sm text-gray-400">
            New companies must be approved before they can post jobs.
          </p>
        </div>
        <div className="h-10 mt-2">
          <Badge text={`${pendingCompanies.length} waiting`} type={"warning"} />
        </div>
      </div>

      {/* Table */}
      <div className="w-full overflow-hidden rounded-t-2xl border border-t-0 border-gray-300 mt-4">
        <table className="border w-full   text-left">
          <thead className="border-b  border-gray-300">
            <tr className="text-[14px] uppercase tracking-wider  text-gray-500">
              <th className=" py-4.5 px-5 font-semibold">Company</th>
              <th className=" py-4.5 px-5 font-semibold">Location</th>
              <th className=" py-4.5 px-5 font-semibold">Website</th>
              <th className=" py-4.5 px-5 font-semibold">Registered</th>
              <th className=" py-4.5 px-5 font-semibold text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {pendingCompanies.map((company) => {
              return (
                <tr key={company.id}>
                  <td className=" py-4.5 px-5 font-semibold">
                    <div className="flex gap-3 ">
                      <div
                        className={`h-10 w-10 rounded-xl flex items-center justify-center text-white font-bold text-sm bg-linear-to-b ${gradients["blue"]}`}
                      >
                       SH
                      </div>
                      <div className="flex flex-col ">
                        <h3 className="font-bold -mt-0.5 ">
                          {company.name}
                        </h3>
                        <span className=" text-[13px]  -mt-0.5 font-semibold text-gray-400">
                          {company.user.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className=" py-4.5 px-5  text-gray-500">
                    {company.location}
                  </td>
                  <td className=" py-4.5 px-5 ">
                    <a href={company.website} target="_blank" rel="noopener noreferrer">
                      <div className='text-purple-500 hover:underline flex items-center gap-1.5 text-[15px] font-semibold'>
                        <FaLink />
                        {onlyUrl(company.website)}
                      </div>
                    </a>
                  </td>
                  <td className=" py-4.5 px-5 font-semibold">{company.createdAt}</td>
                  <td className=" py-4.5 px-5 font-semibold">
                    <div className="flex gap-3 justify-end">
                      
                      <div className="h-9 w-24">
                        <Button
                          type="button"
                          text={
                            <>
                              <FiCheck size={16} />
                              Accept
                            </>
                          }
                          classname="inline-flex items-center justify-center gap-1.5 border border-emerald-200 bg-emerald-50! text-sm font-medium text-emerald-700! hover:border-emerald-300 hover:bg-emerald-100!"
                        />
                      </div>
                      <div className="h-9 w-24">
                        <Button
                          type="button"
                          text={
                            <>
                              <FiX size={16} />
                              Reject
                            </>
                          }
                          classname="inline-flex items-center justify-center gap-1.5 border border-rose-200 bg-rose-50! text-sm font-medium text-rose-700! hover:border-rose-300 hover:bg-rose-100!"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="border border-t-0 justify-between   flex gap-3 border-gray-300  py-4.5 px-5 bg-white rounded-b-2xl">
        <div className="text-gray-400">
          Showing 1 to 4 of 4 companies
        </div>
        <div>
          <Pagination totalPages={22} />
        </div>

      </div>
      {/* <Modal title={"Reject startup job?"} message={"The company will not be able to post jobs. The owner will see the status as Rejected."}/> */}
    </div>
  );
};

export default AdminPendingCompany;
