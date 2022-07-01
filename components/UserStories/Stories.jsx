import React from "react";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="bg-white  max-w-stories p-4  flex items-center gap-3 md:gap-3.5 overflow-x-scroll  scrollbar-none rounded-lg  xs:mt-[25px] border border-gray-300 ">
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default Stories;
