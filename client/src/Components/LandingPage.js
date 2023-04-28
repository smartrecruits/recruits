import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="about" >
      <div className="about-content">
        <img src="https://media.istockphoto.com/id/1391105410/photo/meeting-one-on-one-female-therapist-gestures-toward-unrecognizable-woman.jpg?b=1&s=170667a&w=0&k=20&c=VM4tcYNYwMano7e55Yn-9hmIfAROXMbvrfXDuGMi0C8=" alt="About Us" className="about-image" />
        <div className="about-text">
          <h2>Smart Recruiters </h2>
          <h2>For Job Seekers</h2>
          {/* <h2>Seekers</h2> */}
          <p className='paragh'>Smart Recruiters is a talent acquisition platform designed to help companies find and hire the best candidates</p>
          <p className='paragh'>We are committed to providing a user-friendly platform that empowers recruiters and promotes diversity, equity, and inclusion in the hiring process.</p>
          <p className='paragh'>Our mission is to make hiring better for everyone.</p>
          <div className="button-wrapper">
            <Link to="/Signing">
            <button className="button1">Recruiter</button>
            </Link>
            <Link to="/Client ">
            <button className="button2">Client</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
