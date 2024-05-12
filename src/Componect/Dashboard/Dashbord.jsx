import React from "react";
import "./Dashbord.css";
import { FaUserLarge } from "react-icons/fa6";
import add_user from "../Assest/add_user.png";
import userr from "../Assest/userr.png";
import user_link from "../Assest/user_link.png";

const Dashbord = () => {
  return (
    <div className="Container">
      <div className="active">
        <div className="user_info">
          <div className="active_user">
            <h3>Total Candidate</h3>
            <p>100</p>
          </div>
          <div className="logoo">
          <img src={userr} alt="" className="user_logo" />
          </div>
        </div>
        <div className="user_info">
          <div className="active_user">
            <h3>Active Candidate</h3>
            <p>43</p>
          </div>
          <div className="logoo">
            <img src={add_user} alt="" className="user_logo" />
          </div>
        </div>
        <div className="user_info">
          <div className="active_user">
            <h3>Inactive Candidate</h3>
            <p>57</p>
          </div>
          <div className="logoo">
          <img src={user_link} alt="" className="user_logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
