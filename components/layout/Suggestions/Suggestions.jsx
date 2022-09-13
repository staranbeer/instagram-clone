import React from "react";

const Suggestions = () => {
  return (
    <div className="ml-10 mt-10 w-[320px] self-start  hidden  suggestions:flex flex-col ">
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

      <div className="mt-4">
        <div className="flex items-center justify-between ">
          <div className="text-sm  font-medium text-gray-500">
            Suggestions For You
          </div>
          <div className="text-xs font-medium">See All</div>
        </div>
        <div className="mt-4 space-y-3">
          {Array(5)
            .fill()
            .map((_, i) => (
              <div className="flex items-center justify-between ">
                <div className="w-8 h-8 rounded-full bg-red-400 translate-y-0.5"></div>
                <div className="ml-3 flex-1">
                  <div className="text-sm font-medium">someRandomUserName</div>
                  <div className="text-xs text-gray-500">New to Instagram</div>
                </div>
                <div className="text-blue-500 text-xs font-bold  ">Follow</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
