import React from "react";
import {
  RiHeart2Line,
  RiHome2Line,
  RiMessengerLine,
  RiSearch2Line,
} from "react-icons/ri";

const tabs = [
  { name: "Home", to: "/", iconOutline: <RiHome2Line size={24} /> },
  {
    name: "Messages",
    to: "/messages",
    iconOutline: <RiMessengerLine size={24} />,
  },
  { name: "Search", to: "/search", iconOutline: <RiSearch2Line size={24} /> },
  { name: "Liked", to: "/liked", iconOutline: <RiHeart2Line size={24} /> },
];

const Header = () => {
  return (
    <div className="fixed w-full bg-white border-b border-gray-300">
      <header className="relative translate-y-1 px-4 py-2.5 top-0 items-center flex justify-between max-w-header mx-auto">
        <div className="left">
          <img className="h-10" src="/images/Instagram_logo.svg" alt="" />
        </div>

        {/* header tabs */}
        <ul className=" gap-4 xs:gap-6 flex">
          {tabs.map((i) => (
            <li className="cursor-pointer">
              <span className="w-6 h-6 rounded-full">{i.iconOutline}</span>
            </li>
          ))}

          {/* profile tab */}
          <li>
            <span className="w-6 h-6 rounded-full bg-black inline-block"></span>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
