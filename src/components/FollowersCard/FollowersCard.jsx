import React from 'react'
import './FollowersCard.css'
import { Followers } from '../../Data/followersData'
function FollowersCard() {
  return (
    <div className="FollowersCard">
        <h3> who is following you </h3>
        {Followers.map((follower,id) => {
            return(
            <div className="follower"> 
                <div>

                    <img src={ follower.img} alt="{follower.name}img"  className="followerImage"/>
                    <div className="name">
                        <span> {follower.name}</span>
                        <span>@{follower.username}</span>
                    </div>
                </div>
                 <button className="btn fc-btn">Follow</button>
            </div>
                ) 
        })}
    </div>
  )
}

export default FollowersCard
