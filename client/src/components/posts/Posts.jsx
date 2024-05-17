import React, { useEffect } from "react";
import Post from "./post/Post";
import { useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts);
  // console.log(posts)

  return (
    
      !posts.length ? (
        <CircularProgress />
      ) : (
        <div className="flex flex-col gap-4 lg:grid grid-cols-2">
          {posts.map((post) => (
            <div key={post._id}>
              <Post post={post} setCurrentId={setCurrentId} />
            </div>
          ))}
        </div>
      )
    
  );
};

export default posts;
