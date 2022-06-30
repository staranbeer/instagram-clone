import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { RiHeartLine, RiBookmarkLine } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { FiSend, FiBookmark } from "react-icons/fi";
const Post = () => {
  return (
    <div className="post border border-gray-300  rounded-md mt-4 overflow-hidden ">
      <header className="bg-white post__header p-4 py-3 rounded-lg flex items-center justify-between border-b border-gray-200">
        <div className="flex gap-4 text-xs items-center font-bold ">
          <div className="post__user-avatar border rounded-full ">
            <div className="h-8 w-8 bg-red-300 rounded-full"></div>
          </div>
          <div className="post__user-name">taranbeer singh</div>
        </div>
        <div className="">
          <GoKebabHorizontal />
        </div>
      </header>
      <div className="post__img-container h-[465px]"></div>
      <div className="post__content bg-white py-2 px-4">
        <div className="post__actions flex justify-between items-center">
          <div className=" flex gap-4">
            <div>
              <RiHeartLine size={27} />
            </div>
            <div>
              <BiMessageRounded size={27} />
            </div>
            <div className="rotate-[20deg]">
              <FiSend size={27} />
            </div>
          </div>
          <div>
            <RiBookmarkLine size={23} />
          </div>
        </div>
        <div className="post__likes font-semibold text-sm mt-3">250 likes </div>
        <div className="post__about"></div>
      </div>

      <div className="post__comments"></div>
    </div>
  );
};

export default Post;
