import React from 'react';
import logo from '../logo.png';
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
  
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="navbar-logo">
        <img src={logo} className="App-logo animated" alt="logo" />
      </div>
      <ul className="navbar-links">
        <li className="animate-charcter"><Link to="/"><h5>SMART RECRUITERS</h5></Link></li>
        <li className="navbar-link-item bold" style={{ marginLeft: '200px' }}><Link to="/">Home</Link></li>
        <li className="navbar-link-item bold" style={{ marginLeft: '10px', marginRight: '10px' }}><a href="#mission">About us</a></li>
        <li className="navbar-link-item bold"  style={{ marginLeft: 'auto' }}><Link to="/getStarted">Get Started</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
