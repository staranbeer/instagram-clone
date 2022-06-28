import React from "react";
import { BsInstagram } from "react-icons/bs";
import { RiMessengerLine, RiHeartLine, RiHomeLine } from "react-icons/ri";

import { MdOutlineExplore, MdAdd, MdSearch } from "react-icons/md";
import { faker } from "@faker-js/faker";

const Header = () => {
  return (
    <div className="border-b border-gray-300 bg-white">
      <header className="header py-4 px-6 sm:py-2.5 flex items-center  gap-6  max-w-header mx-auto ">
        <div className="header__left flex items-center gap-6 flex-1 ">
          <div className="header__logo">
            <BsInstagram size={24} />
          </div>
        </div>
        <div className="hidden sm:flex  p-2 px-4 bg-[#efefef]  items-center rounded-lg">
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
      </header>
    </div>
  );
};

export default Header;
