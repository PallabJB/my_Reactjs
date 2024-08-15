import React from "react";
import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";
import me from '../../assets/post/me.jpg'
import cover from '../../assets/post/cover.png'

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img src={cover} alt="" className="profileCoverImg" />
                <img src={me} alt="" className="profileUserImg" />
            </div> 
            <div className="profileInfo">
                <h4 className="profileInfoName">....</h4>
                <span className="profileInfoDesc">Hello fellow followers</span>
            </div>          
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar  profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
