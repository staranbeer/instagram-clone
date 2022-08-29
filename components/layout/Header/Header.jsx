import React from "react";
import { RiMessengerLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="fixed w-full bg-white border-b border-gray-300">
      <header className="px-4  top-0  py-[9px] items-center flex justify-between max-w-header bg-white mx-auto">
        <div className="left">
          <img
            className="h-10 translate-y-0.5"
            src="/images/Instagram_logo.svg"
            alt=""
          />
        </div>
        <div className="right">
          <RiMessengerLine size={26} />
        </div>
      </header>
    </div>
  );
};

export default Header;
