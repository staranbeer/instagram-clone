import React from "react";
import Story from "./Story";
const Stories = () => {
  return (
    <div className="bg-white p-4 px-5 rounded-lg border-b space-x-4 overflow-x-scroll flex scrollbar-none max-w-stories mx-auto">
      {[...Array(10)].map((i, index) => {
        return <Story key={index} />;
      })}
    </div>
  );
};

export default Stories;
