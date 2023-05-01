import React, { useState, useEffect } from 'react';
import { getInterviewee,getIntervieweeToken } from '../../utils/auth';
import { Link } from 'react-router-dom';
const Invites = () => {
  const [invites, setInvites] = useState([]);
  const intervieweeId = getInterviewee();
  const intervieweeToken = getIntervieweeToken()
  useEffect(() => {
    fetch(`https://recruits.onrender.com/interviewee/${intervieweeId}/invites`,{
      headers: {
        'Authorization': `Bearer ${intervieweeToken}`,
      },
    })
      .then(response => response.json())
      .then(data => setInvites(data.filter(invite => invite.status === "accepted")))
      .catch(error => console.error(error));
  }, [intervieweeId,intervieweeToken]);

  return (
    <div>
      <h2>Assessments accepted:</h2>
      <ul>
        {invites.map(invite => (
          <li key={invite.assessment.id}>
            <Link to={`/assessments/${invite.assessment.id}`}><p>Assessment Name: {invite.assessment.name}</p></Link>
            <p>Recruiter Name: {invite.recruiter.name}</p>
            <p>Status: {invite.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invites;