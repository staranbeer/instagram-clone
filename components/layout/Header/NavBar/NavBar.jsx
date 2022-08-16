import {
  RiAddBoxFill,
  RiAddBoxLine,
  RiHeartFill,
  RiHeartLine,
  RiHome5Fill,
  RiHome5Line,
  RiMessengerFill,
  RiMessengerLine,
  RiSearchFill,
  RiSearchLine,
} from "react-icons/ri";
import { useState } from "react";
import NavLink from "./NavLink";

const tabs = [
  {
    name: "Home",
    id: "home",
    iconOutline: <RiHome5Line size={26} />,
    iconFilled: <RiHome5Fill size={26} />,
    to: "/",
    small: false,
  },
  {
    name: "Messages",
    id: "messages",
    iconOutline: <RiMessengerLine size={26} />,
    iconFilled: <RiMessengerFill size={26} />,
    to: "/messages",
    small: true,
  },
  {
    name: "createPost",
    id: "createPost",
    iconOutline: <RiAddBoxLine size={26} />,
    iconFilled: <RiAddBoxFill size={26} />,
    small: false,
  },
  {
    name: "Search",
    id: "search",
    iconOutline: <RiSearchLine size={26} />,
    iconFilled: <RiSearchFill size={26} />,
    to: "/search",
    small: false,
  },
  {
    name: "Feed",
    id: "Feed",
    iconOutline: <RiHeartLine size={26} />,
    iconFilled: <RiHeartFill size={26} />,
    small: false,
  },
  {
    name: "Profile",
    id: "profile",
    iconOutline: <span className="block bg-black h-6 w-6 rounded-full"></span>,
    iconFilled: <span className="block bg-black h-6 w-6 rounded-full"></span>,
    to: "/profile",
    small: false,
  },
];

const NavBar = ({}) => {
  const [isActive, setIsActive] = useState("home");
  function changeActive(id) {
    setIsActive(id);
  }
  return (
    <nav className="flex  items-center gap-6 ">
      {tabs.map(({ small, id, iconFilled, iconOutline, to = null }) => (
        <NavLink
          key={id}
          id={id}
          href={to}
          iconFilled={iconFilled}
          iconOutline={iconOutline}
          isActive={isActive}
          isMobile={small}
          changeActive={changeActive}
        />
      ))}
    </nav>
  );
};

export default NavBar;
