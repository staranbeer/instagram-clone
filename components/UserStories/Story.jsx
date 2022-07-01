import { faker } from "@faker-js/faker";
import React, { useState } from "react";

const Story = () => {
  const [isSeen, setIsSeen] = useState(false);
  return (
    <button className="story w-16 truncate flex flex-col justify-center items-center flex-shrink-0">
      <div
        className={`story__img  rounded-full w-16 h-16 flex items-center justify-center ${
          isSeen
            ? "bg-gray-300"
            : "bg-gradient-to-bl from-pink-500 to-yellow-300"
        }`}
      >
        <div className="bg-white rounded-full p-0.5">
          <div className="w-14 h-14  rounded-full ">
            <img
              src={faker.image.avatar()}
              className="rounded-full w-14 h-14 "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="story__name   w-16 truncate overflow-hidden text-ellipsis mt-1 text-xs text-gray-700 text-center">
        {faker.name.findName()}
      </div>
    </button>
  );
};

export default Story;
