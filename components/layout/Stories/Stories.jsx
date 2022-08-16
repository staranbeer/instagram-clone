import React, { useEffect, useState } from "react";
import Story from "./Story";

const Stories = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/stories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return JSON.parse(data);
      })
      .then((allStories) => {
        setStories(allStories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-white p-4 px-5 rounded-lg border shadow-sm space-x-4 overflow-x-scroll flex scrollbar-none max-w-stories mx-auto">
      {stories.map(({ id, userAvatar, userName }) => {
        return <Story key={id} userName={userName} userAvatar={userAvatar} />;
      })}
    </div>
  );
};

export default Stories;
