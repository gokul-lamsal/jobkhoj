const Button = ({ text, type = "submit",extraCss }) => {
  return (
    <button
      type={type}
      className="bg-primary flex justify-center items-center w-full h-full  hover:bg-primary-hover rounded-xl px-3 py-2 shadow-2xl  hover:cursor-pointer"
      style={extraCss}

    >
      <span className="text-lg text-white">{text}</span>
    </button>
  );
};

export default Button;
