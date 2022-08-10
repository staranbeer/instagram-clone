import Link from "next/link";
import Icon from "../../util/Icon/Icon";

const NavLink = ({
  changeActive,
  iconOutline,
  iconFilled,
  href = null,
  id,
  isActive,
}) => {
  let children = (
    <Icon
      outline={iconOutline}
      filled={iconFilled}
      isActive={isActive === id}
    />
  );
  let element = <button>{children}</button>;
  if (href !== null) {
    element = (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    );
  }
  return (
    <div onClick={() => changeActive(id)} className="h-6 w-6 block">
      {element}
    </div>
  );
};

export default NavLink;
