import React from "react";
import { formatDateDifference } from "../../../lib/utils";
const Post = ({ post,setCurrentId }) => {
  console.log(post);
  return (
    <div className="rounded-3xl border border-dark-4 p-5 lg:p-7 w-full max-w-screen-sm">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <div className="w-full flex  justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/assets/icons/profile-placeholder.svg"
                alt=""
                className=" rounded-full w-10 lg:h-10"
              />
              <p className="lg:body-bold font-semibold text-slate-600 text-xl">
                {post.creator}
              </p>
            </div>
            <p className="subtle-semibold lg:small-regular">
              {formatDateDifference(post.createdAt)}
            </p>
          </div>
          <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20} onClick={()=>{setCurrentId(post._id)}} />
        </div>
        <p className="px-1 mt-3 mb-2">{post.content}</p>
        <img
          className="h-[350px] w-full rounded-[5px] object-cover mb-5;"
          src={post.selectedFile}
          alt=""
        />

        <div className="flex justify-between items-center ">
          <div className="flex gap-1 mt-2">
            <img
              src="/assets/icons/like.svg"
              alt="like"
              width={25}
              height={25}
            />
          </div>
          <div className="flex gap-1 mt-2">
            <img
              src="/assets/icons/delete.svg"
              alt="like"
              width={25}
              height={25}
            />
          </div>
        </div>
        <div>
          <ul className="flex gap-1 mt-2">
            {post.tags.map((tag) => (
              <li key={tag} className="text-slate-500">
                #{tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
