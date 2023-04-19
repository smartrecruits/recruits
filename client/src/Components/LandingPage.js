import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="about">
      <div className="about-content">
        <img src="https://media.istockphoto.com/id/1391105410/photo/meeting-one-on-one-female-therapist-gestures-toward-unrecognizable-woman.jpg?b=1&s=170667a&w=0&k=20&c=VM4tcYNYwMano7e55Yn-9hmIfAROXMbvrfXDuGMi0C8=" alt="About Us" className="about-image" />
        <div className="about-text">
          <p><h2>Smart Recruiters </h2></p>
          <p><h2>For Job</h2></p>
          <p><h2>Seekers</h2></p>
          <p className='paragh'>our mission is to connect people with jobs at scale. In</p>
          <p className='paragh'>order for businesses to hire the best talent,people</p>
          <p className='paragh'>deserve to easily find a job they love</p>
          <div className="button-wrapper">
            <Link to="/Signing">
            <button className="button1">Recruiter</button>
            </Link>
            <button className="button2">Client</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
