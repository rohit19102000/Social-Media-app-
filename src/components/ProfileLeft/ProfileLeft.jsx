import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import FollowersCard from '../FollowersCard/FollowersCard'
function ProfileLeft() {
  return (
    <div className="profile">
        <LogoSearch/>
        <InfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft