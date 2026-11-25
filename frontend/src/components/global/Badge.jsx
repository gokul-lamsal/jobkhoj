const sliceBadge = (text) => {
  if (!(typeof text === "string"))  return text
  return text.toLowerCase().replace("_", " ");
};
const Badge = ({ type = "close", text }) => {
  return (
    <span
      className={`badge capitalize flex items-center text-[14px]  badge-${type}`}
    >
      {sliceBadge(text)}
    </span>
  );
};

export default Badge;
