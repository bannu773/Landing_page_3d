import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logingif from "../../assets/login animi.gif";
import loginboy from "../../assets/login-boy.png";

export default function Login() {
  return (
    <div className=" login-container">
      <div className="left-container">
        <img className="login-gif" src={logingif} />
      </div>
      <div className="right-container">
        <div className="login-head-container">
          <h1 className="login-heading">LOGIN</h1>
          <img src={loginboy} className="login-boy" />
        </div>

        <form className="login-data">
          <div className="username input-field">
            <input type="text" placeholder="  🤵 |  Username" />
          </div>
          <div className="password input-field">
            <input type="password" placeholder="   🔒 | Password" />
          </div>
          <div className="lg-btn input-field">
            <button className="login-btn" >LOGIN</button>
            <h4 className="switch-signup">
              If you are a new user pls create account
              <Link to="/signup">Register</Link>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
}
