import React from "react";

import { RiMessengerLine, RiHeartLine, RiHomeLine } from "react-icons/ri";

import { MdOutlineExplore, MdAdd, MdSearch } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="border-b border-gray-300 bg-white">
      <header className="header py-2.5 px-5  flex   gap-6  max-w-header mx-auto justify-between">
        <div className="header__left  gap-6 translate-y-0.5">
          <div className="header__logo w-[110px] ">
            <Link href="/">
              <a>
                <img
                  src="/images/Instagram_logo.svg"
                  className="w-full"
                  alt=""
                />
              </a>
            </Link>
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
            <Link href={"/"}>
              <a className="header__logo hidden xs:block">
                <RiHomeLine size={27} />
              </a>
            </Link>

            <Link className="header__logo" href={"/direct"}>
              <a>
                <RiMessengerLine size={25} />
              </a>
            </Link>

            <Link href={""}>
              <a className="header__logo hidden xs:block">
                <div className="header__logo  border-black border-2 rounded-lg">
                  <MdAdd size={19} />
                </div>
              </a>
            </Link>

            <Link
              className="header__logo  border-black border-2 rounded-lg"
              href={""}
            >
              <a className="header__logo hidden xs:block">
                <MdOutlineExplore size={27} />
              </a>
            </Link>

            <Link
              className="header__logo  border-black border-2 rounded-lg"
              href={""}
            >
              <a className="header__logo hidden xs:block">
                <RiHeartLine size={27} />
              </a>
            </Link>
            <Link
              className="header__logo  border-black border-2 rounded-lg"
              href={""}
            >
              <a className="header__logo hidden xs:block">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </a>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
