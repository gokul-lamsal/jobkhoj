const Button = ({ text, type = "submit",extraCss }) => {
  return (
    <button
      type={type}
      style={extraCss}
      className="bg-primary w-full h-full hover:bg-primary-hover rounded-xl px-3 py-2 shadow-xl hover:cursor-pointer"
    >
      <span className="text-lg text-white">{text}</span>
    </button>
  );
};

export default Button;
