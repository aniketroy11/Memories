import React, { useEffect, useState } from "react";
import memories from "./images/memories.png";
import Posts from './components/posts/Posts'
import Form from './components/form/Form'
import {useDispatch} from 'react-redux'
import {getPosts,updatePost} from './actions/post.action'
const App = () => {

  const [currentId,setCurrentId] = useState();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
  },[currentId,dispatch])

  return (
    <section className="flex flex-col">
      <div className="shadow-xl bg-white rounded-full sticky top-0">
        <div className="flex flex-row items-center  justify-center py-4 px-5 ">
          <h2 className="text-blue-400 text-3xl font-medium">Memories</h2>
          <img src={memories} alt="" className="ml-2" width={40} />
        </div>
      </div>
      <div className=" grid grid-cols-1 grid md:flex flex-1 p-2 gap-2">
        <div className="flex-3/4 overflow-y-auto order-2 md:order-1">
          <Posts setCurrentId={setCurrentId}/>
        </div>
        <div className=" flex-1/4 md:sticky md:top-24 md:h-full sm:grid order-1 md:order-2">
          <Form currentId = {currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </section>
  );
};

export default App;
