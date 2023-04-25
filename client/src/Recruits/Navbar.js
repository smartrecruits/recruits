import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { removeRecruiter, removeRecruiterToken,getRecruiterToken } from '../Components/utils/auth';
function RecruiterNavbar() {
  const [activeLink, setActiveLink] = useState('home');
  let recruiterToken = getRecruiterToken()

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  function handleLogout(){
    fetch("https://backend-dc1w.onrender.com/users/logout", {
      method: "DELETE",
    }).then(() => {
      removeRecruiter();
      removeRecruiterToken();
      recruiterToken = null
    })   
  }

  return (
    <div className="navbar-wrapper">
      <nav className='nav-rec'>
        <ul>
          <div className="nav-item1">
            <li>
              <Link
                to="/"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </Link>
            </li>
          </div>
          <div className="nav-item2">
            <li>
              <a
                href="#mision"
                className={activeLink === 'about' ? 'active' : ''}
                onClick={() => handleLinkClick('about')}
              >
                About Us
              </a>
            </li>
          </div>
          <div className="nav-item3">
            <li>
              <Link
                to="/"
                className={activeLink === 'logout' ? 'active' : ''}
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default RecruiterNavbar;
