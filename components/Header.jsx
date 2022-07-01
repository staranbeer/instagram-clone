import React from "react";

import { RiMessengerLine, RiHeartLine, RiHomeLine } from "react-icons/ri";

import { MdOutlineExplore, MdAdd, MdSearch } from "react-icons/md";
import Image from "next/image";

const Header = () => {
  return (
    <div className="border-b border-gray-300 bg-white">
      <header className="header py-2.5 px-5  flex   gap-6  max-w-header mx-auto justify-between">
        <div className="header__left  gap-6">
          <div className="header__logo w-[100px] ">
            <img src="/images/Instagram_logo.svg" className="w-full" alt="" />
          </div>
        </div>
        <div className="flex gap-20 items-center">
          <div className="hidden sm:flex    p-2 px-4 bg-[#efefef]  items-center rounded-lg">
            <div className="">
              <MdSearch className="text-gray-400" size={20} />
            </div>
            <input
              className="bg-[#efefef] ml-3  placeholder:text-gray-400 w-48 "
              placeholder="Search"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="header__right flex gap-5 items-center flex-1 justify-end">
            <div className="header__logo">
              <RiHomeLine size={27} />
            </div>

            <div className="header__logo">
              <RiMessengerLine size={25} />
            </div>

            <div className="header__logo  border-black border-2 rounded-lg">
              <MdAdd size={19} />
            </div>

            <div className="header__logo">
              <MdOutlineExplore size={27} />
            </div>
            <div className="header__logo ">
              <RiHeartLine size={27} />
            </div>

            <div className="header__logo">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
