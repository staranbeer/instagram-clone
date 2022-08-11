import React from "react";
import Story from "./Story";
const Stories = () => {
  return (
    <div className="bg-white p-4 rounded-lg border-b space-x-5 overflow-x-scroll flex scrollbar-none">
      {[...Array(10)].map((i, index) => {
        return <Story key={index} />;
      })}
    </div>
  );
};

export default Stories;
