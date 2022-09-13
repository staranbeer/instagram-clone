import React from "react";

const SuggestedUsers = ({ suggestedUsers }) => {
  return (
    <div className="mt-2.5 space-y-3 ml-1">
      {suggestedUsers.map((_, i) => (
        <div className="flex items-center justify-between" key={i}>
          <div className="w-8 h-8 rounded-full bg-red-400 overflow-hidden translate-y-0.5">
            <img
              src={_.userAvatar}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="ml-3 flex-1">
            <div className="text-sm font-medium">{_.userName}</div>
            <div className="text-xs text-gray-500">New to Instagram</div>
          </div>
          <div className="text-blue-500 text-xs font-bold  ">Follow</div>
        </div>
      ))}
    </div>
  );
};

export default SuggestedUsers;
