import React from "react";
import SuggestedUsers from "./SuggestedUsers";

const Suggestions = (props) => {
  const { suggestedUsers } = props;

  return (
    <div className="ml-8 mt-6 w-[320px] self-start  hidden  suggestions:flex flex-col ">
      <div className=" items-center justify-between mt-8 flex  w-full">
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

      <div className="mt-2.5">
        <div className="flex items-center justify-between ">
          <div className="text-sm  font-medium text-gray-500">
            Suggestions For You
          </div>
          <div className="text-xs font-medium">See All</div>
        </div>
        <SuggestedUsers suggestedUsers={suggestedUsers} />
      </div>
    </div>
  );
};

export default Suggestions;
