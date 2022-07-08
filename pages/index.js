import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts/Posts";
import Stories from "../components/UserStories/Stories";
import Suggestions from "./../components/Suggestions/Suggestions";

const Home = () => {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <div className=" min-h-screen  mx-auto max-w-body  overflow-hidden">
        <div className="flex flex-col max-w-[470px]">
          <Stories />
          <Posts />
        </div>
        <div className="suggestions:block hidden flex-1">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Home;
