import { faker } from "@faker-js/faker";
import {
  HiDotsHorizontal,
  HiOutlineBookmark,
  HiOutlineHeart,
} from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";

import { IoPaperPlaneOutline } from "react-icons/io5";

const Post = () => {
  return (
    <div className="post mt-4 bg-white rounded-lg  border border-gray-200 overflow-hidden max-w-[470px]">
      <header className="post__header px-3 py-2 flex justify-between items-center">
        <div className="post__header-left flex items-center gap-4 text-sm font-medium">
          <div className="user__avatar">
            <img
              src={faker.image.avatar()}
              alt=""
              className="h-8 w-8 object fit rounded-full"
            />
          </div>
          <div className="user__name">tarantarantaranbeer</div>
        </div>
        <div className="post__header-right">
          <div className="p-1">
            <HiDotsHorizontal size={20} />
          </div>
        </div>
      </header>
      <div className="post__body">
        <div className="post__img-container ">
          <img
            src={faker.image.abstract()}
            className="h-[470px] w-[470px] object-fit"
            alt=""
          />
        </div>
      </div>
      <div className="post__footer p-4 py-3 flex items-center justify-between">
        <div className="post__footer-left flex items-center gap-4">
          <HiOutlineHeart size={28} />
          <FaRegComment size={24} />
          <IoPaperPlaneOutline size={26} className="" />
        </div>
        <div className="post__footer-right">
          <HiOutlineBookmark size={24} />
        </div>
      </div>
      <div className="post__stats px-5 pb-3">
        <div className="post__likes text-sm font-medium">9 likes</div>
        <div className="flex items-center mt-2">
          <div className="user__name text-sm  font-medium">
            tarantarantaranbeer
          </div>
          <div className="post__caption text-sm ml-2 max-w-[200px] text-gray-800 truncate">
            some really cool caption and stuff that i think would make me look
            cool in front my frenzzzz.
          </div>
        </div>
        <div className="post__comments">
          <div className="text-sm mt-2 text-gray-500">View all comments</div>
        </div>
        <div className="text-[11px] text-gray-400 mt-3 ">2 HOURS AGO</div>
      </div>
    </div>
  );
};

export default Post;
