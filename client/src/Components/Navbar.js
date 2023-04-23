import React from 'react';
import logo from '../logo.png';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";
import { getIntervieweeToken,getRecruiterToken, removeRecruiter,removeInterviewee,removeIntervieweeToken,removeRecruiterToken } from './utils/auth';
function Navbar() {
  let navigate = useNavigate();
   let recruiterToken = getRecruiterToken()
   let intervieweeToken = getIntervieweeToken()

   function handleRecruiterLogout(){

   }

   function handleIntervieweeLogout(){

   }
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="navbar-logo">
        <img src={logo} className="App-logo animated" alt="logo" />
      </div>
      <ul className="navbar-links">
        <li className="animate-charcter"><Link to="/"><h1>SMARTRECRUITERS</h1></Link></li>
        <li className="navbar-link-item bold"><Link to="/">Home</Link></li>
        <li className="navbar-link-item bold"><a href="#mission">About us</a></li>
        <li className="navbar-link-item bold"><Link to="/getStarted">Get Started</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
