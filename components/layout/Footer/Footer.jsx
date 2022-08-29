import Link from "next/link";
import React from "react";
import { RiHome2Line, RiSearch2Line, RiHeart2Line } from "react-icons/ri";
const tabs = [
  { name: "Home", to: "/", iconOutline: <RiHome2Line size={26} /> },
  { name: "Search", to: "/search", iconOutline: <RiSearch2Line size={26} /> },
  { name: "Liked", to: "/liked", iconOutline: <RiHeart2Line size={26} /> },
  { name: "Profile", to: "/profile" },
];
const Footer = () => {
  return (
    <footer className="fixed justify-around bottom-0 bg-white py-3 flex  w-full">
      {tabs.map((tab) => {
        return (
          <Link href={tab.to} key={tab.name}>
            <a>
              {tab.iconOutline || (
                <div className="w-[26px] h-[26px] bg-black rounded-full"></div>
              )}{" "}
            </a>
          </Link>
        );
      })}
    </footer>
  );
};

export default Footer;
