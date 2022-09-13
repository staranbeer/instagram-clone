import Link from "next/link";
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
    <div className="fixed z-50 w-full bg-white border-b border-gray-300">
      <header className="relative translate-y-1 px-4 py-2.5 top-0 items-center flex justify-between max-w-header mx-auto">
        <div className="left">
          <Link href="/">
            <a>
              <img className="h-10" src="/images/Instagram_logo.svg" alt="" />
            </a>
          </Link>
        </div>

        {/* header tabs */}
        <ul className=" gap-5 xs:gap-6 flex">
          {tabs.map((i) => (
            <li className="cursor-pointer" key={i.name}>
              <Link href={i.to}>
                <span className="w-6 h-6 rounded-full">{i.iconOutline}</span>
              </Link>
            </li>
          ))}

          {/* profile tab */}
          <li>
            <Link href="/profile">
              <span className="w-6 h-6 rounded-full bg-black inline-block cursor-pointer"></span>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
