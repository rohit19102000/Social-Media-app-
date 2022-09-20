import React from 'react'
import './Home.css';
import Profile from "../../components/profile/Profile"
import PostSection from "../../components/PostSection/PostSection"
import RightSection from "../../components/RightSection/RightSection"

const Home = () => {
  return (

    <div className="Home">
        <Profile />
        <PostSection />
        <RightSection />

        <div className="right-side">Right </div>
    </div>
  )
}

export default Home