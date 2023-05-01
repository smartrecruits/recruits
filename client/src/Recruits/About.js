import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './About.css';
import { faBookOpen, faUserFriends, faQuestionCircle, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRecruiterToken,getRecruiter } from '../Components/utils/auth';

const About = () => {
  const [recruiter, setRecruiter] = useState([])
  const [errors, setErrors] = useState([])
  const recruiterId = getRecruiter()
  const recruiterToken = getRecruiterToken()
  useEffect(() => {
    fetch(`https://recruits.onrender.com/recruiter/${recruiterId}`,{
        headers: {
            Authorization: `Bearer ${recruiterToken}`
          }
    })
    .then(res =>{
        if(res.ok){
        res.json().then((data)=>{
            setRecruiter(data);            
            })
        }else{
            res.json().then((err)=>setErrors([err.errors]))
        }
        })
    },[recruiterId,recruiterToken])
  return (
    <div className="container-rec">
      
      <div className="about-rec">
        <img src={recruiter.image} alt="" />
        <h2>About Company:</h2>
        <p><em>{recruiter.company}</em></p>
        <p>"We are a happy Family,<br />Join Today Let's build a better world."</p>
        <h2>Skills:</h2>
        <ul>
          <li>UI/UX Designer</li>
          <li>Reactjs</li>
          <li>Ruby</li>
        </ul>
        <h2>Contact:</h2>
        <p>Email: <a href={recruiter.email}>{recruiter.email}</a></p>
        <p>Socials: <a href="twitter-url"><FontAwesomeIcon icon={faTwitter} /></a> <a href="instagram-url"><FontAwesomeIcon icon={faInstagram} /></a> <a href="mailto:Kaleidico@gmail.ac.ke"><FontAwesomeIcon icon={faEnvelope} /></a></p>
      </div>
    </div>
  );
};

export default About;