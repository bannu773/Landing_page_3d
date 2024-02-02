import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logingif from "../../assets/undraw_stand_out_-1-oag.svg";
import loginboy from "../../assets/login-boy.png";

export default function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(loginDetails);
  }
  return (
    <div className=" login-container">
      <div className="left-container">
        <img className="login-gif" src={logingif} />
      </div>
      <div className="right-container">
        <div className="login-head-container">
          <h1 className="login-heading">LOGIN</h1>
          {/* <img src={loginboy} className="login-boy" /> */}
          <form className="login-data" onSubmit={handleSubmit}>
            <div className="username input-field">
              <input
                type="text"
                name="email"
                value={loginDetails.email}
                onChange={(e) => handleChange(e)}
                placeholder="  🤵 |  Username"
              />
            </div>
            <div className="password input-field">
              <input
                type="password"
                name="password"
                value={loginDetails.password}
                onChange={(e) => handleChange(e)}
                placeholder="   🔒 | Password"
              />
            </div>
            <div className="lg-btn input-field">
              <button className="login-btn" type="submit">LOGIN</button>
              <h4 className="switch-signup">
                Don't have an account?
                <Link to="/signup">Register</Link>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
