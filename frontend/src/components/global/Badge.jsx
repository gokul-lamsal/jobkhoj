
const Badge = ({ type = "neutral",text }) => {
  return <span className={`badge badge-${type}`}>{text}</span>;
};

export default Badge;
