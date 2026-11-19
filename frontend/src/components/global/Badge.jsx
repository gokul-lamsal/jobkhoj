
const Badge = ({ type = "neutral",text }) => {
  return <span className={`badge flex items-center text-[14px]  badge-${type}`}>{text}</span>;
};

export default Badge;
