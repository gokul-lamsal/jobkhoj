export const gradients = {
  indigo: "from-indigo-600 to-indigo-900",
  blue: "from-blue-600 to-blue-900",
  emerald: "from-emerald-600 to-emerald-900",
  purple: "from-purple-600 to-purple-900",
  pink: "from-pink-700 to-purple-900",
  green: "from-green-700 to-green-900",
};

export const badgeType = {
  contract: "success",
  "part time": "warning",
  internship: "primary",
  "full time": "info",
  PART_TIME: "warning",
  FULL_TIME: "info",
  INTERNSHIP: "primary",
  CONTRACT: "success",
};
export const roleType = {
  admin: "warning",
  company: "primary",
  seeker: "info",
};
export const statusBadge = {
  accepted: "success",
  rejected: "danger",
  pending: "warning",
  active: "success",
  closed: "close",
};

export const formattedDate = (deadline) => {
  return new Date(deadline).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
export const getInitials = (title) => {
  if (!title) return "FD";
  const splitTitle = title.split(" ");
  return (splitTitle[0][0]).toUpperCase() + (splitTitle[1][0]).toUpperCase();
};
