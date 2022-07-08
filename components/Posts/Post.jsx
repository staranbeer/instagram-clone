import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { RiHeartLine, RiBookmarkLine } from "react-icons/ri";
import { BiMessageRounded } from "react-icons/bi";
import { FiSend, FiBookmark } from "react-icons/fi";
import { faker } from "@faker-js/faker";

const Post = () => {
  return (
    <div className="post border border-gray-300  rounded-lg overflow-hidden ">
      <header className="bg-white post__header p-4 py-3 rounded-lg flex items-center justify-between border-b border-gray-200">
        <div className="flex gap-4 text-xs items-center font-bold ">
          <div className="post__user-avatar border rounded-full ">
            <div className="h-8 w-8 bg-red-300 rounded-full"></div>
          </div>
          <div className="post__user-name">Username12212</div>
        </div>
        <div className="">
          <GoKebabHorizontal />
        </div>
      </header>
      <div className="post__img-container h-[465px]">
        <img
          src={faker.image.image()}
          alt=""
          className="w-full object-cover h-[465px]"
        />
      </div>
      <div className="post__content bg-white py-3 px-4">
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
        <div className="post__about flex items-baseline ">
          <div
            className="post__user-name clas
          text-sm font-bold mt-2"
          >
            Taranbeer singh
          </div>
          <div className="post__caption ml-2 text-sm w-48 truncate">
            This is the caption to this post and i am going to write whatever i
            want here
          </div>
        </div>
        <div className="post__comments mt-2">
          <div className="comments__toggle text-sm text-gray-500">
            View all comments
          </div>

          <div className="comment flex items-baseline  ">
            <div
              className="comment__user-name clas
          text-sm font-bold mt-2 "
            >
              someName1221
            </div>
            <div className="comment__content ml-2 text-sm w-72 truncate">
              This is one of the comment and i can write whatever i want her
              eand no one will notice what i said
            </div>
          </div>
        </div>
        <div className="text-slate-400 text-xs mt-4 ">2 HOURS AGO</div>
      </div>
    </div>
  );
};

export default Post;
