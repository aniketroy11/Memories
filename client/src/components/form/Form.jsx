import React, { useState } from "react";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    content: "",
    tags: "",
    selectFile: "",
  });

  return (
    <div className=" bg-white p-2 w-full rounded-lg shadow-lg overflow-hidden">
      <form className="flex flex-col gap-2" action="">
        <input className="p-2 text-black w-full border border-gray-300 focus:outline-none font-medium" type="text" placeholder="Creator" value = {postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})} />
        <input className="p-2 text-black w-full border border-gray-300 focus:outline-none font-medium" type="text" placeholder="Title" value = {postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})} />
        <input className="p-2 text-black w-full border border-gray-300 focus:outline-none font-medium" type="text" placeholder="Message" value = {postData.content} onChange={(e)=>setPostData({...postData,content:e.target.value})} />
        <input className="p-2 text-black w-full border border-gray-300 focus:outline-none font-medium" type="text" placeholder="Tags" value = {postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value})} />
      </form>
    </div>
  );
};

export default Form;
