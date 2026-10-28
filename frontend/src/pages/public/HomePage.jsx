import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { PiBag } from "react-icons/pi";
import { IoMdTime } from "react-icons/io";
import { TbBrandDatabricks } from "react-icons/tb";
import { LuUser } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import Button from "../../components/global/Button";
// import Button from "../components/Button"; // <- keep your own import path

const popularTags = ["internship", "remote", "react", "python", "design"];

const stats = [
  { value: "500+", label: "open roles right now." },
  { value: "120+", label: "approved companies." },
  { value: "1 click", label: "to apply with your profile." },
];

const jobTypes = [
  {
    title: "Internship",
    desc: "Start your career",
    icon: AiOutlineThunderbolt,
    color: "purple",
       color: "bg-purple-100 text-purple-700",

  },
  {
    title: "Full time",
    desc: "Stable, long term roles",
    icon: PiBag,
       color: "bg-blue-100 text-blue-700",

  },
  {
    title: "Part time",
    desc: "Flexible hours",
    icon: IoMdTime,
    color: "bg-orange-100 text-orange-400",
  },
  {
    title: "Contract",
    desc: "Project based work",
    icon: TbBrandDatabricks,
    color: "bg-green-200 text-green-700",
  },
];

const steps = [
  {
    title: "1. Create your profile",
    desc: "Sign up as a job seeker, add your skills and upload your resume.",
    icon: LuUser,
  },
  {
    title: "2. Verify your email",
    desc: "Confirm your account with a 6 digit code sent to your inbox.",
    icon: MdOutlineMail,
  },
  {
    title: "3. Apply in one click",
    desc: "Send your application and track its status in real time.",
    icon: FiSend,
  },
];

const Home = () => {
  return (
    <main>
      <section className="flex flex-col justify-center items-center gap-3 px-10 py-8 bg-linear-to-b from-indigo-50 via-indigo-50/40 to-white">
        <span className="text-[12px] text-indigo-500 shadow-sm bg-indigo-300/10 font-bold px-4 py-1 rounded-2xl flex justify-center items-center gap-1 ">
          <AiOutlineThunderbolt color="blue" size={12} /> New roles added every
          day
        </span>

        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-5xl font-extrabold">
            Find the internship or job
            <br />
            that <span className="text-primary">fits you</span>.
          </h1>
          <p className="text-[18px] text-gray-500 max-w-xl">
            Browse openings from verified companies, apply in one click and
            follow every application from one place.
          </p>
        </div>
             {/* Search bar */}
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
            <select
              name="jobType"
              className="w-full py-2 text-sm text-gray-700 outline-none bg-transparent cursor-pointer"
              defaultValue="All types"
            >
              <option value="All types">All types</option>
              <option value="type1">type1</option>
              <option value="type2">type2</option>
              <option value="type3">type3</option>
              <option value="type4">type4</option>
            </select>
          </div>

          <div className="w-[8rem] ">
            <Button text={"Search"} />
          </div>
        </div>

        {/* Popular tags */}
        <div className="flex gap-2.5 mt-3 text-sm items-center">
          <span className="text-gray-700">Popular:</span>
          {popularTags.map((tag) => (
            <span key={tag} className="text-gray-600 rounded-lg px-3 py-0.5 cursor-pointer bg-blue-200/30">
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-10 pt-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((item) => (
            <div
              key={item.value}
              className="flex gap-3 items-center border-2 border-gray-300 bg-white p-4 rounded-xl"
            >
              <h2 className="text-2xl font-bold text-primary">{item.value}</h2>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by job type */}
      <section className="flex flex-col gap-4 px-10 pt-8 mb-8">
        <h2 className="text-xl font-bold">Browse by job type</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobTypes.map((job,i) => (
            <div
              key={i}
              className="flex group gap-3 items-center border-2 transition-all duration-200 cursor-pointer bg-white border-gray-300 hover:shadow-md shadow-gray-300 p-6 rounded-xl"
            >
              <job.icon
                size={40}
                className={` p-2 rounded-xl font-bold ${job.color}`}
              />
              <div className="flex flex-col">
                <p className="text-md font-bold">{job.title}</p>
                <p className="text-gray-500 text-[12px]">{job.desc}</p>
              </div>
              <span className="ml-auto text-xl  text-gray-400 group-hover:text-blue-400 transition-all duration-200">
                &gt;
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="flex flex-col gap-8 px-10 pt-12 pb-8 mb-10 border-b border-t border-gray-300 bg-white">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-extrabold">How it works</h2>
          <p className="text-lg text-gray-500">
            Three simple steps to your next role.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {steps.map((s,i) => (
            <div
              key={i}
              className="flex flex-col gap-2 items-center text-center p-6"
            >
              <s.icon
                size={45}
                className="p-2 bg-indigo-200 mb-1.5 text-indigo-400 rounded-xl"
              />
              <p className="font-bold text-lg">{s.title}</p>
              <p className="text-[16px] text-gray-500 max-w-[30ch]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-10  mx-10 mb-15">
        <div className="flex  justify-between items-center   rounded-3xl bg-linear-to-r from-indigo-600  to-indigo-900 px-8 py-12">
          <div>
            <h2 className="text-2xl font-extrabold text-white">
              Hiring? Post your first job.
            </h2>
            <p className="text-[15px] mt-2 text-gray-300 max-w-md">
              Create a company account. Our team reviews every company before it
              can post, so job seekers can trust what they see.
            </p>
          </div>
          <button className="px-4 py-2  text-[16px] border-2 font-bold text-indigo-700 bg-white rounded-xl">
            Register your company
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;