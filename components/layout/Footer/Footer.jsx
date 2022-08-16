import {
  RiAddBoxFill,
  RiAddBoxLine,
  RiHeartFill,
  RiHeartLine,
  RiHome5Fill,
  RiHome5Line,
  RiSearchFill,
  RiSearchLine,
} from "react-icons/ri";
import { useState } from "react";
import NavLink from "../Header/NavBar/NavLink";

const tabs = [
  {
    name: "Home",
    id: "home",
    iconOutline: <RiHome5Line size={26} />,
    iconFilled: <RiHome5Fill size={26} />,
    to: "/",
    small: true,
  },
  {
    name: "createPost",
    id: "createPost",
    iconOutline: <RiAddBoxLine size={26} />,
    iconFilled: <RiAddBoxFill size={26} />,
    small: true,
  },
  {
    name: "Search",
    id: "search",
    iconOutline: <RiSearchLine size={26} />,
    iconFilled: <RiSearchFill size={26} />,
    to: "/search",
    small: true,
  },
  {
    name: "Feed",
    id: "Feed",
    iconOutline: <RiHeartLine size={26} />,
    iconFilled: <RiHeartFill size={26} />,
    small: true,
  },
  {
    name: "Profile",
    id: "profile",
    iconOutline: <span className="block bg-black h-6 w-6 rounded-full"></span>,
    iconFilled: <span className="block bg-black h-6 w-6 rounded-full"></span>,
    to: "/profile",
    small: true,
  },
];

const Footer = ({}) => {
  const [isActive, setIsActive] = useState("home");
  function changeActive(id) {
    setIsActive(id);
  }

  return (
    <footer className="bottom-0 fixed left-0 right-0 w-full bg-white   py-4 xs:hidden px-5">
      <nav className="flex  items-center justify-between">
        {tabs.map(({ small, id, iconFilled, iconOutline, to = null }) => (
          <NavLink
            key={id}
            id={id}
            href={to}
            iconFilled={iconFilled}
            iconOutline={iconOutline}
            isActive={isActive}
            changeActive={changeActive}
            isMobile={small}
          />
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
