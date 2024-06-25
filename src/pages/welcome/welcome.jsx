import React, { useState } from 'react';
// import Login from '../login/login';
// import Signup from "../signup/signup";
import { Link, Route, Routes } from 'react-router-dom';

import "./welcome.css";
import logo from "../../assets/TELA.png";
import login_icon from "../../assets/login.png";
import signup_icon from "../../assets/sign_up.png";

const Welcome = () => {
    // const [showLogin, setShowLogin] = useState(true);   //State for the form toggling...
    // const handleLoginClick = () => setShowLogin(true);
    // const handleSignupClick = () => setShowLogin(false);

  return (
    <div className='welcome'>
      <img src={ logo } />
      <h1 className='tela'>Welcome To Tela</h1>
      <div className='buttons'>
        <Link to="/login" className='button'><img src={ login_icon } />Login</Link>
        <Link to="/signup" className='button'><img src={ signup_icon } />Sign-up</Link>
      </div>
      
      <p>Project work in progress...</p>
    </div>
  )
}

export default Welcome;
