import React from "react";
import Header from "../components/Header";
import Posts from "../components/Posts/Posts";
import Stories from "../components/UserStories/Stories";
import Suggestions from "./../components/Suggestions/Suggestions";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="flex justify-center min-h-screen md:justify-start mx-auto max-w-body sm:px-20 ">
        <div className="flex flex-col">
          <Stories />
          <Posts />
        </div>
        <div className="md:block hidden">
          <Suggestions />
        </div>
      </div>
    </div>
  );
};

export default Home;
