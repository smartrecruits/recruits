import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import { faBookOpen, faUserFriends, faQuestionCircle, faChartLine, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function RecSidebar(){
    return(
     <div className="sidebar-rec">
        <div className="d-flex flex-column align-items-center justify-content-center h-100">
           <div className="sidebar-item bg-dark-blue-hover mb-4">
            <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
            <Link to="/Recruiterdb"><p className="m-0">Dashboard</p></Link>
          </div>
          <div className="sidebar-item bg-dark-blue-hover mb-4">
            <FontAwesomeIcon icon={faBookOpen} className="sidebar-icon" />
            <Link to="/RecruiterAssessList"><p className="m-0">Assessments</p></Link>
          </div>
          <div className="sidebar-item bg-dark-blue-hover mb-4">
            <FontAwesomeIcon icon={faUserFriends} className="sidebar-icon" />
            <Link to="/intervieweeList"><p className="m-0">Interviewees</p></Link>
          </div>
          {/* <div className="sidebar-item bg-dark-blue-hover mb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="sidebar-icon" />
            <Link to=""><p className="m-0">Questions</p></Link>
          </div> */}
          <div className="sidebar-item bg-dark-blue-hover">
            <FontAwesomeIcon icon={faChartLine} className="sidebar-icon" />
            <Link to="/intervieweescorelist"><p className="m-0">Grades</p></Link>
          </div>
        </div>
      </div>
    )
}

export default RecSidebar