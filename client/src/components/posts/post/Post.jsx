import React from "react";
import { formatDateDifference } from "../../../lib/utils";
const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="rounded-3xl border border-dark-4 p-5 lg:p-7 w-full max-w-screen-sm">
      <div className="flex-between">
        <div className="flex items-center gap-3">
          <div className="w-full flex justify-between items-center   text-light-1">
            <p className=" base-medium lg:body-bold text-light-1">
              {post.creator}
            </p>
            <p className="subtle-semibold lg:small-regular">
              {formatDateDifference(post.createdAt)}
            </p>
          </div>
          <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
        </div>
        <p className="px-1 mt-2">{post.content}</p>
        <img
          className=" h-full w-full rounded-[24px] object-cover mb-5;"
          src={post.selectedFile}
          alt=""
        />

        <div className="flex justify-between items-center ">
          <div className="flex gap-1">
            <img
              src="/assets/icons/like.svg"
              alt="like"
              width={25}
              height={25}
            />
            <p className="text-lg">{likes.length}</p>
          </div>
          <div className="flex gap-1 ">
            {
              <img
                src="/assets/icons/saved.svg"
                alt="save"
                width={25}
                height={25}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
