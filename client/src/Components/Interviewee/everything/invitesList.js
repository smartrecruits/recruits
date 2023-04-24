import React, { useState, useEffect } from 'react';
import { getInterviewee, getIntervieweeToken } from '../../utils/auth';
const Invites = () => {
  const [invites, setInvites] = useState([]);
  const [errors, setErrors] = useState([])
  let intervieweeId = getInterviewee()
  let intervieweeToken = getIntervieweeToken()
  useEffect(() => {
    fetch(`/interviewees/${intervieweeId}/invites`)
      .then(response => response.json())
      .then(data => setInvites(data))
      .catch(error => console.error(error));
  }, [intervieweeId]);

  function handleAcceptClick({id}) {
    fetch(`/interviewees/${intervieweeId}/invites/${id}/accept_assessment`, {
     method: 'PUT',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${intervieweeToken}`,
      }
     })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem(`invite-${id}-accepted`, 'true');
      window.location.href = `/assessments/${data.assessment.id}`;
      // Do something else with the invite data if needed
    })
    .catch(error => {
        setErrors('An error occurred while accepting the invitation. Please try again later.');
        console.error('Error:', error);
    });
}

  return (
    <div>
      <h2>Invites:</h2>
      <ul>
        {invites.map(invite => (
          <li key={invite.id}>
            <p>Interviewer: {invite.interviewee.name}</p>
            <p>Status: {invite.status}</p>
            <button onClick={handleAcceptClick(invite.id)}>Accept</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Invites;