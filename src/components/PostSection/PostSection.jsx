import React from 'react'
import './PostSection.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'

function Post() {
  return (
    <div className='Post'>
         <PostShare />
         <Posts/>
    </div>
  )
}

export default Post
