import React from 'react';
import logo from '../logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar" data-testid="navbar">
      <div className="navbar-logo">
        <img src={logo} className="App-logo animated" alt="logo" />
      </div>
      <ul className="navbar-links">
        <li className="animate-charcter"><a href="#"><h1>SMARTRECRUITERS</h1></a></li>
        <li className="navbar-link-item bold"><a href="#">Home</a></li>
        <li className="navbar-link-item bold"><a href="#">About us</a></li>
        <li className="navbar-link-item bold"><a href="#">login</a></li>
        <li className="navbar-link-item bold"><a href="#">Get Started</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
