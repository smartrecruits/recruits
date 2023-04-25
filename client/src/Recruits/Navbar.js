import React, { useState } from 'react';
import './Navbar.css'
function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="navbar-wrapper">
      <nav>
        <ul>
          <div className="nav-item1">
            <li>
              <a
                href="/"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
          </div>
          <div className="nav-item2">
            <li>
              <a
                href="/about"
                className={activeLink === 'about' ? 'active' : ''}
                onClick={() => handleLinkClick('about')}
              >
                About Us
              </a>
            </li>
          </div>
          <div className="nav-item3">
            <li>
              <a
                href="/logout"
                className={activeLink === 'logout' ? 'active' : ''}
                onClick={() => handleLinkClick('logout')}
              >
                Logout
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
