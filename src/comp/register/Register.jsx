import React, { useState } from "react";
import "../login/Login.css";

import { Link } from "react-router-dom";
import logingif from "../../assets/undraw_programming_re_kg9v.svg";
import loginboy from "../../assets/login-boy.png";

export default function Register() {
  const [signupDetails, setSignupDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [validation, setValidation] = useState({
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    confirmpassword: null,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setSignupDetails({ ...signupDetails, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(signupDetails);

    let errors = validation;

    if (!signupDetails.firstname.trim()) {
      errors.firstname = 'First name is required';
    } else {
      errors.firstname = null;
    }
    //last Name validation
    if (!signupDetails.lastname.trim()) {
      errors.lastname = 'Last name is required';
    } else {
      errors.lName = null;
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!signupDetails.email.trim()) {
      errors.email = 'Email is required';
    } else if (!signupDetails.email.match(emailCond)) {
      errors.email = 'Please ingress a valid email address';
    } else {
      errors.email = null;
    }


    //password validation
    const cond1 = '/^(?=.*[a-z]).{6,20}$/';
    const cond2 = '/^(?=.*[A-Z]).{6,20}$/';
    const cond3 = '/^(?=.*[0-9]).{6,20}$/';
    const password = signupDetails.password;
    if (!password) {
      errors.password = 'password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be longer than 6 characters';
    } else if (password.length >= 20) {
      errors.password = 'Password must shorter than 20 characters';
    } else if (!password.match(cond1)) {
      errors.password = 'Password must contain at least one lowercase';
    } else if (!password.match(cond2)) {
      errors.password = 'Password must contain at least one capital letter';
    } else if (!password.match(cond3)) {
      errors.password = 'Password must contain at least a number';
    } else {
      errors.password = null;
    }


     //matchPassword validation
     if (!signupDetails.confirmpassword) {
      errors.confirmpassword = 'Password confirmation is required';
    } else if (signupDetails.confirmpassword !== signupDetails.Password) {
      errors.confirmpassword = 'Password does not match confirmation password';
    } else {
      errors.password = null;
    }

    return setValidation(errors);
  }
  return (
    <div className=" login-container  signup-container">
      <div className="left-container">
        <img className="login-gif" src={logingif} />
      </div>
      <div className="right-container">
        <div className="login-head-container">
          <h1 className="login-heading">Sign UP</h1>
          {/* <img src={loginboy} className="login-boy" /> */}

          <form className="login-data" onSubmit={handleSubmit}>
            <div className="username input-field">
              <input
                type="text"
                value={signupDetails.firstname}
                name="firstname"
                onChange={(e)=>handleChange(e)}
                placeholder="  🤵 |  First Name"
              />
              {validation.firstname  != null && <p className="error-msg">{validation.firstname}</p>}
            </div>
            <div className="username input-field">
              <input
                type="text"
                value={signupDetails.lastname}
                name="lastname"
                onChange={(e)=>handleChange(e)}
                placeholder="  🤵 |  Last Name"
              />
              {validation.lastname != null && <p className="error-msg">{validation.lastname}</p>}
            </div>
            <div className="password input-field">
              <input
                type="email"
                value={signupDetails.email}
                name="email"
                onChange={(e)=>handleChange(e)}
                placeholder="   @ | Email"
                required
              />
              {validation.email  != null && <p className="error-msg">{validation.email}</p>}

            </div>
            <div className="password input-field">
              <input
                type="password"
                value={signupDetails.password}
                name="password"
                onChange={(e)=>handleChange(e)}
                placeholder="   🔒 | Password"
                required
              />
              {validation.password  != null && <p className="error-msg">{validation.password}</p>}
            </div>
            <div className="password input-field">
              <input
                type="password"
                value={signupDetails.confirmpassword}
                name="confirmpassword"
                onChange={(e)=>handleChange(e)}
                placeholder="   🔒 | Re Enter Password"
                required
              />
              {validation.confirmpassword != null && <p className="error-msg">{validation.confirmpassword}</p>}
            </div>
            <div className="lg-btn input-field">
              <button type="submit" className="login-btn">REGISTER</button>
              <h4 className="switch-signup">
                Already having an accoung ?<Link to="/signin">Login</Link>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
