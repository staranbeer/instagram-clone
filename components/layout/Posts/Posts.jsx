import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return JSON.parse(data);
      })
      .then((allPosts) => {
        setPosts(allPosts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col max-w-[470px] mx-auto">
      {posts.map(
        ({ id, likes, userName, userAvatar, image, caption, posted }) => {
          return (
            <Post
              key={id}
              userName={userName}
              userAvatar={userAvatar}
              likes={likes}
              image={image}
              caption={caption}
              posted={posted}
            />
          );
        },
      )}
    </div>
  );
};

export default Posts;
