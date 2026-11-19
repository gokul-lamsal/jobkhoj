const Button = ({ text, type = "submit", btnType = "primary",classname }) => {
  return (
    <button
      type={type}
      className={`btn-${btnType}  gap-1  flex justify-center items-center w-full h-full  transition-all duration-200  rounded-xl px-3 py-2   hover:cursor-pointer ${classname}`}

    >
      {text}
    </button>
  );
};

export default Button;
