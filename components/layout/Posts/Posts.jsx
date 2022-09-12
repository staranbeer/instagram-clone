import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = (props) => {
  const { posts: postsProp } = props;
  const [posts, setPosts] = useState(postsProp);

  return (
    <main className="flex flex-col max-w-[470px] mx-auto">
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
        }
      )}
    </main>
  );
};

export default Posts;
