import React from "react";

const Story = () => {
  return (
    <button className="story w-16 truncate flex flex-col justify-center items-center flex-shrink-0">
      <div className="story__img bg-gradient-to-bl from-pink-500 to-yellow-300 rounded-full w-16 h-16 flex items-center justify-center">
        <div className="bg-white rounded-full p-0.5">
          <div className="w-14 h-14 bg-green-300 rounded-full"></div>
        </div>
      </div>

      <div className="story__name text-xs  w-16 truncate overflow-hidden text-ellipsis mt-1 text-gray-700 text-center">
        singghhihiaifihsihfiaohioasshifhsas
      </div>
    </button>
  );
};

export default Story;
