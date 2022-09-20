import './ProfileCard.css';
import Cover from '../../img/cover.jpg';
import Profile from '../../img/profileImg.jpg';


function ProfileCard() {


  const Profilepage = true;

  return (
    <div className="ProfileCard">
    <div className="ProfileImage">
      <img src={Cover} alt="" />
      <img src={Profile} alt="" />
    </div>
      <div className="ProfileName">
        <span>zandaya</span>
        <span>Senior UI/UX designer</span>
      </div>
    
    <div className="followStatus">
      <hr />
      <div>

      <div className="follow">
        <span>6,890</span>
        <span>followings</span>
      </div>
      <div className="vl"></div>
      <div className="follow">
        <span>50</span>
        <span>followers</span>
      </div>
      { Profilepage && (
        <>
          <div className="vl">

          </div>
          <div className="follow">
            <span>3</span>  
            <span>Posts</span>  
          </div>  
        </>
      )}
      </div>
    <hr />

    </div>
    { Profilepage? '': (
              <span>
              My Profile
            </span>
    )}

  </div>


  )
}

export default ProfileCard