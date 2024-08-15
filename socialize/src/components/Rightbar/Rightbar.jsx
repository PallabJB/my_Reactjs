import React from "react";
import "./Rightbar.css";
import gift from "../../assets/post/gift.png";
import ad from "../../assets/post/ad.png";
import { Users } from "../../dummyData";
import Online from "../Online/Online";
import women from '../../assets/person/women.jpeg'

const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src={gift} alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Alex Jr.</b> and <b>5 other friends</b> have a birthday today.
          </span>
        </div>
        <img src={ad} alt="ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Bangalore</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Assam</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={women} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhonny Liver</span>
            </div>
            <div className="rightbarFollowing">
              <img src={women} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhonny Liver</span>
            </div>
            <div className="rightbarFollowing">
              <img src={women} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhonny Liver</span>
            </div>
            <div className="rightbarFollowing">
              <img src={women} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhonny Liver</span>
            </div>
            <div className="rightbarFollowing">
              <img src={women} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhonny Liver</span>
            </div>
            <div className="rightbarFollowing">
              <img src={women} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">Jhonny Liver</span>
            </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
};

export default Rightbar;
