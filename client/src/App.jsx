import React, { useEffect } from "react";
import memories from "./images/memories.png";
import Posts from './components/posts/Posts'
import Form from './components/form/Form'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/post.action'
const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <section className="flex flex-col">
      <div className="shadow-xl bg-white rounded-full sticky top-0">
        <div className="flex flex-row items-center  justify-center py-4 px-5 ">
          <h2 className="text-blue-400 text-3xl font-medium">Memories</h2>
          <img src={memories} alt="" className="ml-2" width={40} />
        </div>
      </div>
      <div className="flex flex-1 p-5 gap-2 ">
        <div className="flex-3/4 overflow-y-auto">
          <Posts/>
        </div>
        <div className=" flex-1/4 sticky top-24 h-full">
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default App;
