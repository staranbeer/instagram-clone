import React from "react";

const Suggestions = () => {
  return (
    <div className="ml-10 suggestions:flex self-start  hidden mt-10 w-[320px] ">
      <div className=" items-center justify-between flex  w-full">
        <div className="flex items-center">
          <div className="user__avatar">
            <div className="w-[56px] h-[56px] bg-red-400 rounded-full"></div>
          </div>
          <div className="user__name text-sm font-medium ml-4 tracking-normal">
            tarantarantaranbeerr
          </div>
        </div>
        <div className="switch text-xs font-bold text-sky-600">Switch</div>
      </div>
    </div>
  );
};

export default Suggestions;
