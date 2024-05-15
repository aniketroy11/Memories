import React, { useEffect } from 'react'
import Post from './post/Post'
import { useSelector } from 'react-redux'

const posts = () => {
  const posts = useSelector((state)=>state.posts);
  console.log(posts);
  useEffect(()=>{
    
  },[])
  

  return (
    <>
      {
        posts.map((post)=>(
          <Post post= {post}/>
        ))
      }
    </>
  )
}

export default posts
