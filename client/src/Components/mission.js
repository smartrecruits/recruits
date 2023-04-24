import React from 'react';
import './mission.css';

const Mission = () => {
  return (
    <div className="section">
      <div className="imge">
        <img src="https://media.istockphoto.com/id/1372006843/photo/new-job-concept-with-paper-airplane.jpg?s=612x612&w=0&k=20&c=zdWMUodP6sgSkOPBlqF7h570wNl2mHMJq40OG1Jp01o=" alt="" />
      </div>
      <div className="txt">
        <h2>About Our Company</h2>
        <p>Our mission is to connect people with jobs at scale. In order for businesses to hire the best talent, people deserve to easily find a job they love.</p>
        <p>We provide job seekers with access to millions of job listings from thousands of websites, including job boards, staffing firms, and company career sites. And we offer employers the best talent sourcing tools to help them find and hire the right candidates quickly and efficiently.</p>
      </div>
    </div>
  );
}

export default Mission;
