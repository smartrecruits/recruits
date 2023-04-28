import React from 'react';
import './footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="page-container" data-testid="footer">
      <header className="header">
        {/* Header content */}
      </header>
      <main className="main">
        {/* Main content */}
      </main>
      <footer className="footer">
        <div className="footer-social-icons">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={32} color="#3b5998" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={32} color="#00acee" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={32} color="#c13584" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} color="#0e76a8" />
          </a>
          <a href="mailto:example@example.com">
            <MdEmail size={32} color="#D44638" />
          </a>
        </div>
        <div className="footer-contact">
          <p>contact us at 0767447890</p>
          <p>&copy; 2023 Smart Recruiters Inc. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default  Footer;
