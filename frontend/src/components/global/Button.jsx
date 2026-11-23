import { CgSpinner } from "react-icons/cg";

const Button = ({ text,isLoading=false, type = "submit", btnType = "primary",classname,onClick }) => {
  return (
    <button
      type={type}
      disabled={isLoading}
      onClick={onClick}
      className={`btn-${btnType} disabled:bg-gray-200!    flex justify-center items-center w-full h-full  transition-all duration-200  rounded-xl px-3 py-2   hover:cursor-pointer ${classname}`}

    >
      {
        isLoading?
        <span><CgSpinner className="animate-spin text-primary text-2xl" />
          </span>:text
        
      }
    </button>
  );
};

export default Button;
