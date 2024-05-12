import React from "react";
import "./Login.css";
import A from "../Assest/backlogo.png";

export const Login = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>
          <img src={A} alt="" className="logo" />
        </h1>
        <div className="loginsignup-fields">
          <div className="welcome">
            <h2>
              Welcome <img src="" alt="" />
            </h2>
            <p>Please Sign-In To Your Account And Start The Adventure</p>
            <hr />
          </div>
          <label>EMAIL OR USERNAME</label>
          <input type="email" placeholder="Email Address" className="inp" />
          <div className="labb">
            <label>PASSWORD</label>
            <h4>
              <a href="/">Forget Password?</a>
            </h4>
          </div>
          <div className="pass">
            <input
              id="inp"
              type="password"
              placeholder="Password"
              className="inp"
            />
          </div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
};
