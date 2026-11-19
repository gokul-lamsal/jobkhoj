import React from "react";
import Badge from "../../components/global/Badge";
import { FiUser, FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import Button from "../../components/global/Button";
import { LuEye } from "react-icons/lu";
import { FiUpload } from "react-icons/fi";


export const SeekerResume =()=>{
  return(
    <div className="bg-white border border-gray-300 rounded-2xl shadow-sm px-5 py-6 flex flex-col justify-center gap-3 w-[25rem]">
      <div>

        <h1 className="font-bold text-2xl">Resume</h1>  
      </div>

      <div className="flex bg-gray-100 border-gray-400 boder rounded-xl w-full h-[5rem] items-center">
        <div className="bg-rose-200 h-[3rem] w-[3rem]  rounded-xl mx-4 flex justify-center items-center text-rose-600">
          <FaRegFile size={22}  />
        </div>
        <div className="text-[12px]">
          <input type="file" name="file" />
          <p className="text-[12px] text-gray-400">240 KB. Uploaded 2 days ago</p>
        </div>
      </div>

      <div className="flex w-full gap-2">
         <Button type="button" btnType="secondary" text={<><LuEye />
            View</>} classname={"font-medium bg-white"} />
         <Button type="button" btnType="secondary" text={<><FiUpload />
            Replace</>} classname={"font-medium bg-white"} />
      </div>

      <div>
        <p className="text-[12px] text-gray-400">PDF or DOC, Max 5 MB.</p>
      </div>

    </div>
  )
}


const SeekerProfile = () => {
  const profileDetails = {
    name: "John doe",
    email: "john@student.com",
    phone: "9812345678",
    bio: "Professional John Doe looking for growth opportunities. Final year computer science student who enjoys building web apps.",
    location: "Kathmandu, Nepal",
    skills: ["React", "Node js", "MySql", "Tailwind CSS"],
  };

  return (
    <main>
      <section>
        <div className="py-10">
          <h1 className="font-bold text-2xl">My profile</h1>
          <p className="text-sm text-gray-400">
            companies see this when you apply.
          </p>
        </div>
        <div className="flex gap-5 pb-5">
          <div className="flex flex-col gap-3">
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm px-5 py-6 flex flex-col items-center justify-center gap-3 w-[25rem]">
              <div className="p-2 w-30 h-30 text-white font-bold bg-linear-to-r  from-fuchsia-600 to-purple-600 rounded-full flex justify-center items-center tracking-wider text-3xl">
                JD
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl">{profileDetails.name}</p>
                <p className="text-[14px] text-gray-400">
                  {profileDetails.email}
                </p>
              </div>
              <div>
                <Badge type="success" text="● Email verified" />
              </div>

              <div className="flex justify-between w-full">
                <p className="text-[16px] text-gray-400">
                  profile completeness
                </p>
                <p className="font-bold text-[16px]">80%</p>
              </div>

              <div className="w-full rounded-xl h-2 bg-gray-200">
                <div className="bg-primary w-[80%] h-full rounded-xl"></div>
              </div>
            </div>

             <div>
              <SeekerResume />
             </div>

          </div>

          <div className="grow flex flex-col gap-3">
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm px-5 py-6 flex flex-col justify-center gap-3">
              <h1 className="font-bold text-2xl">Personal information</h1> 
              <form action="">
                <div className="w-full flex gap-5">
                <div className="flex flex-col gap-2 w-[50%]">
                <label htmlFor="name">Full name</label>
                <div className=" w-full flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                  <p><FiUser /></p>

                <input type="text" name="name" id="name" placeholder={profileDetails.name} className="outline-none w-full"  />
                </div>
                </div>

                <div className="flex flex-col gap-2 w-[50%]">
                <label htmlFor="phone">phone</label>
                <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                  <p><FiPhone /></p>

                <input type="text" name="phone" id="phone" placeholder={profileDetails.phone} className="outline-none w-full"  />
                </div>
                </div>

                </div>

                 <div className="flex flex-col gap-2 w-full mt-4">
                <label htmlFor="location">Location</label>
                <div className="flex  items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">
                  <p><IoLocationOutline /></p>

                <input type="text" name="location" id="location" placeholder={profileDetails.location} className="outline-none w-full"  />
                </div>
                </div>

                <div className="flex flex-col gap-2 w-full mt-4">
                <label htmlFor="bio">Bio</label>
                <div className="flex justify-center items-center gap-2 border border-purple-600 rounded-md p-2 focus-within:ring-4 focus-within:ring-purple-100 ">

                <textarea name="bio" id="bio" placeholder={profileDetails.bio} className="outline-none w-full h-[8rem] resize-none"  />
                </div>
                </div>
                <p className="text-[14px] text-gray-400 py-2">A short introduction shown to companies.</p>

              </form>
            </div>
            <div className="bg-white border border-gray-300 rounded-2xl shadow-sm px-5 py-6 flex flex-col justify-center gap-3 w-full">
              <div>
                <h1 className="font-bold text-2xl">Skills</h1> 
              </div>
              
              <div>
              <p className="text-[12px] text-gray-400">used for job matching and shown in your applications.</p>
              </div>

            </div>
          </div>
        </div>
        <div className="flex justify-end items-center py-5">
          <div className="flex gap-2 h-[3rem] w-[18%]">
             <Button type="button" btnType="secondary" text={"Cancel"} classname={"font-medium bg-white"} />
           <Button type='button' text={"Save Profile"} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeekerProfile;
