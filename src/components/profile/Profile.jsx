import './Profile.css';
import ProfileCard from '../ProfileCard/ProfileCard'
import LogoSerch from '../LogoSearch/LogoSearch'
import FollowersCard from '../FollowersCard/FollowersCard'
function Profile() {
  return (
    <div className="profile">
      <LogoSerch />
      <ProfileCard />
      <FollowersCard />
    </div>
  )
}

export default Profile