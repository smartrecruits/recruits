import React, { useState, useEffect } from 'react';
import { getRecruiterToken,getRecruiter } from '../Components/utils/auth';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAssess } from '../Features/assessments/assessmentSlice';
import { useNavigate } from 'react-router-dom';
function IntervieweeList() {
  const assessments = useSelector(state => state.assessments.assessments);
  const [interviewees, setInterviewees] = useState([]);
  const [errors, setErrors]  = useState([])
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const recruiterToken = getRecruiterToken()
  const recruiterId = getRecruiter()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://recruits.onrender.com/interviewees',{
      headers: {
        'Authorization': `Bearer ${recruiterToken}`
    }, }
    )
      .then(res => res.json())
      .then(data => setInterviewees(data))
      .catch(error => setErrors([error]));
  }, [recruiterToken]);

  useEffect(() => {
    dispatch(fetchAssess());
  }, [dispatch]);

  const handleInvite = (id) => {
    console.log(selectedAssessment.id)
    const requestBody = {
        interviewee_id: id, 
        recruiter_id: recruiterId,
        assessment_id: selectedAssessment.id
    };
    fetch(`https://recruits.onrender.com/invites/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${recruiterToken}`
        },
        body: JSON.stringify(requestBody)
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        } 
    }) 
    .then(data => console.log(data))
    .catch(error => setErrors([error]));
};
// console.log(errors)
const handleAssessmentSelect = (event) => {
  // setSelectedAssessment(event.target.value);
  // setSelectedAssessment(assessments.find(a => a === event.target.value));
  const assessmentId = parseInt(event.target.value);
  const selected = assessments.find(a => a.id === assessmentId);
  setSelectedAssessment(selected);
  console.log(selectedAssessment)

};

function redirectToScore(){
    navigate('/intervieweescorelist')
}
  return (
    <div>
      <h2>List of Interviewees:</h2>
      <button onClick={redirectToScore}>Interviewees by score</button>
      <ul>
        {interviewees.map(interviewee => (
          <li key={interviewee.id}>
            {interviewee.firstname} {interviewee.lastname} {interviewee.email}
            {/* <button onClick={() => handleInvite(interviewee.id)}>
              Invite
            </button> */}
            {assessments.length > 0 && (
              <div>
                <label htmlFor="assessment-select">Select an assessment:</label>
                <select id="assessment-select" value={selectedAssessment} onChange={handleAssessmentSelect}>
                  {assessments.map(assessment => (
                    <option key={assessment.id} value={assessment.id}>
                      {assessment.name}
                    </option>
                  ))}
                </select>
                {(!selectedAssessment)&&(
                  <p style={{ fontSize: "10px", color: "red" }}>please select an assessment</p>
                )}
                <button onClick={() => handleInvite(interviewee.id)}>Send invite</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IntervieweeList;