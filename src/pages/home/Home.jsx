import React from 'react'
import './Home.css';
import Profile from "../../components/profile/Profile"
import PostSection from "../../components/PostSection/PostSection"
const Home = () => {
  return (
    <div className="Home">
        <Profile />
        <PostSection />
        <div className="right-side">Right </div>
    </div>
  )
}

export default Home