import React from "react";

const Suggestions = () => {
  return (
    <div className="ml-8 mt-8   flex-1">
      <div className="user-profile flex items-center justify-between w-full ">
        <div className="flex items-center gap-4 ">
          <div className="h-14 w-14 rounded-full bg-green-300"></div>
          <p className="w-40 truncate text-sm font-semibold tracking-tight">
            taranbeer singhdahdiqwjidiwq
          </p>
        </div>

        <div className="text-sm text-blue-500 font-bold">Switch</div>
      </div>

      <div className="suggestions mt-4">
        <div className="flex items-center  justify-between">
          <div className="text-gray-400 text-sm font-bold ">
            Suggestions for you
          </div>
          <div className="text-sm ">See all</div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
