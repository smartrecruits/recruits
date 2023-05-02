import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getInterviewee, getIntervieweeToken } from '../../utils/auth';
const InvitesList = () => {
  const [invites, setInvites] = useState([]);
  const [errors, setErrors] = useState([])
  let intervieweeId = getInterviewee()
  let intervieweeToken = getIntervieweeToken()
  let navigate = useNavigate()
  useEffect(() => {
    fetch(`https://recruits.onrender.com/interviewee/${intervieweeId}/invites`)
      .then(response => response.json())
      .then(data => setInvites(data))
      .catch(error => setErrors(error));
  }, [intervieweeId]);
  function handleAcceptClick({id}) {
    fetch(`https://recruits.onrender.com/interviewees/${intervieweeId}/invites/${id}/accept_assessment`, {
     method: 'PUT',
     headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${intervieweeToken}`,
      }
     })
    .then(response => response.json())
    .then(data => {
      localStorage.setItem(`invite-${id}-accepted`, 'true');
      // window.location.href = `/assessments/${data.assessment.id}`;
      setInvites(prevInvites => prevInvites.map(invite => {
        if (invite.id === id) {
          invite.status = 'accepted';
        }
        return invite;
      }));
    })
    .catch(error => {
        setErrors('An error occurred while accepting the invitation. Please try again later.');
        console.error('Error:', error);
    });
}function handleAssessmentClick(id) {
  console.log(id)
  // const acceptedInvite = invites.find(invite => invite.assessment.id === id && invite.status === 'accepted');
  // if (acceptedInvite) {
    navigate(`/assessments/${id}`);
  // }
}

  return (
    <div>
      <h2>Invites:</h2>
      <ul>
        {invites.map(invite => (
          <li key={invite.id}>
            <p>Recruiter: {invite.recruiter.username}</p>
            <p>Interviewee: {invite.interviewee.username}</p>
            {/* <p>Assessment: {invite.assessment.name}</p> */}
            <p>Status: {invite.status}</p>
            {invite.status === 'accepted' && (
              <button onClick={() => handleAssessmentClick(invite.assessment.id)}>Go to assessment</button>
            )}
            {invite.status !== 'accepted' && (
              <button onClick={() => handleAcceptClick({ id: invite.id })}>Accept</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvitesList;