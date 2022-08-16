import Link from "next/link";
import Icon from "./../../../util/Icon/Icon";

const NavLink = ({
  changeActive,
  iconOutline,
  iconFilled,
  href = null,
  id,
  isActive,
  isMobile,
}) => {
  let navLinkStyles = "h-6 w-6";
  let navMobileLinkStyles = "block";
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
    <div
      onBlur={() => changeActive(null)}
      onClick={() => changeActive(id)}
      className={`${navLinkStyles}  ${
        isMobile ? navMobileLinkStyles : " hidden xs:block "
      }`}
    >
      {element}
    </div>
  );
};

export default NavLink;
