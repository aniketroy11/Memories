import React, { useState } from "react";
import FileBase from "react-file-base64";
import {useDispatch} from 'react-redux'
import { createPost } from "../../actions/post.action";


const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    content: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();


  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(createPost(postData));
    clear();
  }
 

  const clear = () =>{
    setPostData({
      creator: "",
      title: "",
      content: "",
      tags: "",
      selectedFile: "",
    })
  }

  return (
    <div className=" bg-gray-300 p-3 w-full rounded-lg shadow-lg overflow-hidden">
      <form className="flex flex-col gap-4 pb-5" action="" onSubmit={handleSubmit}>
        <h1 className="flex items-center justify-center text-xl pb-5 pt-5">
          Creating a Memory
        </h1>
        <input
          className="p-2  text-black w-full border border-gray-300 focus:outline-none font-mono rounded-xl"
          type="text"
          placeholder="Creator"
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <input
          className="p-2 text-black w-full border border-gray-300 focus:outline-none font-mono rounded-xl"
          type="text"
          placeholder="Title"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <input
          className="p-2 text-black w-full border border-gray-300 focus:outline-none font-mono rounded-xl"
          type="text"
          placeholder="Message"
          value={postData.content}
          onChange={(e) =>
            setPostData({ ...postData, content: e.target.value })
          }
        />
        <input
          className="p-2 text-black w-full border border-gray-300 focus:outline-none font-mono rounded-xl"
          type="text"
          placeholder="Tags"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className="">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <button type="submit" className=" w-full bg-blue-500 border-collapse rounded-md text-white font-semibold p-2">Submit</button>
        <button onClick={clear}  className=" w-full bg-red-500 border-collapse rounded-md text-white font-semibold p-2">Clear</button>
      </form>
    </div>
  );
};

export default Form;
