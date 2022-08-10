const Icon = ({ outline, filled, isActive }) => {
  return <span>{isActive ? filled : outline} </span>;
};

export default Icon;
