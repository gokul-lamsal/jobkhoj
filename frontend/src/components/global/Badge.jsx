
const Badge = ({ type = "close",text }) => {
  return <span className={`badge capitalize flex items-center text-[14px]  badge-${type}`}>{text}</span>;
};

export default Badge;
