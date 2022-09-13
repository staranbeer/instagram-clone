import React from "react";
import {
  HiChevronDown,
  HiOutlineChevronDown,
  HiOutlinePencil,
} from "react-icons/hi";

const Index = () => {
  return (
    <div className="max-w-body p-5 mx-auto w-full h-[calc(100vh-60px)] overflow-hidden bg-gray-400 ">
      <div className=" bg-white h-full border border-gray-300 flex">
        {/* left */}

        <div className="w-[350px] border-r border-gray-300 h-full overflow-hidden">
          <header className="p-4 px-6 border-b border-gray-300 flex justify-between items-center">
            <div></div>
            <div className="flex gap-2 items-end">
              <div className="font-medium">tarantarantaranbeerr</div>
              <HiOutlineChevronDown size={22} />
            </div>
            <div>
              <HiOutlinePencil size={20} />
            </div>
          </header>
          <div className="mt-2 overflow-scroll h-full">
            <div className="py-2 px-5 flex items-center">
              <div className="w-[56px] h-[56px] rounded-full bg-red-400"></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Index;
