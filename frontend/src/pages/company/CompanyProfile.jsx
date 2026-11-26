import React, { useEffect, useState } from "react";
import { FaLink, FaRegClock } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuBuilding } from "react-icons/lu";
import Button from "../../components/global/Button";
import { MdOutlineFileUpload } from "react-icons/md";
import Badge from "../../components/global/Badge";
import Loader from "../../components/helpers/Loader";
import ErrorLoader from "../../components/helpers/ErrorLoader";
import api from "../../components/api/api";
import { toast } from "react-toastify";

const CompanyProfile = () => {
  const [newProfile,setNewProfile] = useState(false);
  const noProfileInit = { name: "", website: "", location: "", description: "" };
  const [file, setFile] = useState(null);
  const [img, setImg] = useState(null);
  const [companyProfileInfo, setCompanyProfileInfo] = useState(null);
  useEffect(() => {
    console.log(file);
    if (file) {
      const getUrl = URL.createObjectURL(file);
      setImg(getUrl);
      console.log(getUrl);
    }
  }, [file]);

  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  const fetchData = async () => {
    try {
      const res = await api.get("/api/companies/my");

      setCompanyProfileInfo(res.data.data);
      setNewProfile(false)
    } catch (err) {
      if (err.response.status === 404) {
      setCompanyProfileInfo(noProfileInit);
      setNewProfile(true);

      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <Loader />;
  if (!companyProfileInfo) return <ErrorLoader />;
  const handleChange = (e) => {
    setCompanyProfileInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, website, location, description } = companyProfileInfo;
    try {
      setBtnLoading(true);
      const res = await api.put("/api/companies", {
        name,
        website,
        location,
        description,
      });
      setCompanyProfileInfo(res.data.data);
      toast.success("Company profile updated successfully.");
    } catch {
      toast.warning("Please try again later");
    } finally {
      setBtnLoading(false);
    }
  };
  const createProfile = async(e)=>{
    e.preventDefault();
    try{

      await api.post("/api/companies",companyProfileInfo);
      toast.success("Company Profile created successfully.")
      fetchData()
    }
    catch(err){
      toast.warning("Please try again later.");
    }
  
  

  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex justify-between items-center w-full">
          <div>
            <h1 className="font-bold text-2xl">Company profile</h1>
            <p className="text-sm text-gray-400">
              This is shown to job seekers on your company page.
            </p>
          </div>
          {
            !(newProfile) && (
                       <div>
            <Badge
              type={companyProfileInfo.status}
              text={companyProfileInfo.status}
            />
          </div>
            )
          }

        </div>
      </div>
      {(companyProfileInfo.status === "PENDING" || newProfile) && (
        <div className="flex flex-col gap-4 bg-yellow-100 rounded-xl p-4 shadow-sm">
          <div className="flex gap-2">
            <span>
              <FaRegClock size={20} color="orange" />
            </span>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-orange-600"> 
                {
                  newProfile? ("Please fill up your company information."):("Your company is waiting for admin approval.")
                }
              </p>
              <p className="text-sm text-orange-600">
                {
                  newProfile?("You can create your profile here. You will be notified once an admin approves your company"):
                  ("You can edit your profile now. You will be able to post jobs once an admin approves your company. We will notify you.")
                }
                
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex  mt-2 gap-6">
        <div className="flex flex-col gap-6 w-full">
          <div className="border bg-white border-gray-300 rounded-2xl shadow-sm ">
            <div className="bg-white rounded-2xl px-5 py-6 flex flex-col justify-center gap-3">
              <h1 className="font-bold text-lg">Company details</h1>

              <form onSubmit={!newProfile?handleSubmit:createProfile}>
                <div className="flex gap-5">
                  <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col w-full gap-2">
                      <label htmlFor="companyDetail">
                        Company name <span className="text-red-500">*</span>
                      </label>
                      <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                        <p>
                          <LuBuilding />
                        </p>

                        <input
                          type="text"
                          name="name"
                          id="companyDetail"
                          placeholder="Company Name"
                          className="outline-none w-full"
                          value={companyProfileInfo.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="salary">
                          Website <span className="text-red-500">*</span>
                        </label>
                        <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                          <p>
                            <FaLink />
                          </p>

                          <input
                            type="text"
                            name="website"
                            id="webLink"
                            placeholder="https://example.com"
                            className="outline-none w-full"
                            value={companyProfileInfo.website}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="location">
                          Location <span className="text-red-500">*</span>
                        </label>
                        <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                          <p>
                            <IoLocationOutline />
                          </p>

                          <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Lalitpur, Nepal"
                            className="outline-none w-full"
                            value={companyProfileInfo.location}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full ">
                      <label htmlFor="description">
                        Description <span className="text-red-500">*</span>
                      </label>
                      <div className="flex justify-center items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                        <textarea
                          name="description"
                          id="description"
                          className="outline-none w-full h-[8rem] resize-none"
                          value={companyProfileInfo.description}
                          onChange={handleChange}
                        />
                      </div>
                      <p className="text-sm text-gray-400">
                        Tell candidates what your company does.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white flex justify-end gap-4 p-2 ml-auto">
                  <div>
                    <Button btnType="secondary" text={"Cancel"} />
                  </div>
                  <div>
                    <Button
                      type="submit"
                      text={!newProfile?"Save change":"Submit profile"}
                      isLoading={btnLoading}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
