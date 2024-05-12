import React from "react";
import "./HomePage.css";
import { MdSpaceDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { TiArrowSortedDown } from "react-icons/ti";
import logo from "../Assest/logo.png";
import user from "../Assest/user.png";
import { Outlet, Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="container">
      <section className="navbar">
        <div className="user_profile">
          <div className="user_img">
            <img src={user} alt="" />
          </div>
          <div className="user_name">
            <p>John Deo</p>
            <div className="admin">
              <p>Admin</p>
              <TiArrowSortedDown />
            </div>
          </div>
        </div>
      </section>
      <section className="side_bar">
        <div className="left_nav">
          <img src={logo} alt="" width="42px" />
        </div>
        <div className="left_op">
          <div className="option">
            <div>
              <MdSpaceDashboard className="logo" />
            </div>
            <Link to="">Dashboard</Link>
          </div>
          <div className="option">
            <div>
              <HiUserGroup className="logo" />
            </div>
            <Link to="/condidate">Candidate</Link>
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
};

export default HomePage;
