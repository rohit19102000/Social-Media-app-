import React, { useState } from "react";
import "./RightSection.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareMadal/ShareModal";

const RightSection = () => {
  const [modalOpened ,setModalOpened] = useState(false);
  return (
   <div className="RightSection">
        <div className="navIcons">
            <img src={Home} alt="" />
            <UilSetting />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard />

        <button className="btn r-btn" onClick={() => setModalOpened(true)}>
                share
        </button>
           <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
   </div>
  )
}

export default RightSection
