import React ,{ useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal'
function InfoCard() {

const [modalOpened ,setModalOpened] = useState(false);

  return (

    <div className="Infocard">
    
        <div className="Infohead">
            <h4>your info</h4>
            <div>

            <UilPen  width='2rem' height='1.2rem' onClick={() => setModalOpened(true)}/>
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
            </div>
        </div>
            
        <div className="info">
              <span>
                  <b> Status</b>
             </span>
             <span> in Releationship</span>
        </div>

        <div className="info">
              <span>
                  <b>Lives</b>
             </span>
             <span> Multan</span>
        </div>

        <div className="info">
              <span>
                  <b>Works at</b>
             </span>
             <span> Zainkeepscode</span>
        </div>
        <button className="btn Logout-btn">Logout</button>


    </div>
  )
}

export default InfoCard