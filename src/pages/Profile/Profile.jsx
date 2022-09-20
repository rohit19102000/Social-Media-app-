import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import RightSection from '../../components/RightSection/RightSection'
import Posts from '../../components/Posts/Posts'
function Profile() {
  return (
    <div className="Profile">
        <ProfileLeft />
        <div className="ProfileCenter">
          <ProfileCard />
          <Posts />
        </div>
        <RightSection />
    </div>
  )
}

export default Profile