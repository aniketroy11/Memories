import React from 'react'
import Post from './post/Post'
import { useSelector } from 'react-redux'

const posts = () => {
  const posts = useSelector((state)=>state.posts);
  console.log(posts);

  return (
    <>
      <h1>POST</h1>
      <Post/>
      <Post/>
      <Post/>
    </>
  )
}

export default posts
