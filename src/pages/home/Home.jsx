import React from 'react'
import './Home.css';
import Profile from "../../components/profile/Profile"
const Home = () => {
  return (
    <div className="Home">
        <Profile />
        <div className="post-side"> Post</div>
        <div className="right-side">Right </div>
    </div>
  )
}

export default Home