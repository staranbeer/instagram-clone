import React from "react";
import Header from "../../components/Header";
import { HiOutlineChevronDown, hiedit } from "react-icons/hi";
import { BiEdit } from "react-icons/bi";
const index = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="flex  h-[95vh]  max-w-[936px] mx-auto  border dms:mt-[25px] ">
        <div className="flex-none w-[300px] bg-white">
          <div className="dm__header w-full flex  border-b items-center">
            <div className="flex-1"></div>
            <div className="flex-1 basis-1/2 text-center  font-semibold p-4 flex items-center">
              <p className="w-32 truncate">tarantarfiasaiomantaran</p>
              <HiOutlineChevronDown size={24} className="font-normal ml-3" />
            </div>
            <div className="flex-1">
              <BiEdit size={28} />
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white border-l"></div>
      </main>
    </div>
  );
};

export default index;
