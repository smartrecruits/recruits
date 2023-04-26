import React, { useState, useEffect } from 'react';
import { getRecruiterToken,getRecruiter } from '../Components/utils/auth';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAssess } from '../Features/assessments/assessmentSlice';

function IntervieweeList() {
  const assessments = useSelector(state => state.assessments.assessments);
  const [interviewees, setInterviewees] = useState([]);
  const [errors, setErrors]  = useState([])
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const recruiterToken = getRecruiterToken()
  const recruiterId = getRecruiter()
  const dispatch = useDispatch()

  useEffect(() => {
    setSelectedAssessment(assessments[0])
    fetch('https://recruits.onrender.com/interviewees',{
      headers: {
        'Authorization': `Bearer ${recruiterToken}`
    }, }
    )
      .then(res => res.json())
      .then(data => setInterviewees(data))
      .catch(error => setErrors([error]));
  }, [recruiterToken,assessments]);

  useEffect(() => {
    dispatch(fetchAssess());
  }, [dispatch]);

  const handleInvite = (id) => {
    const requestBody = {
        interviewee_id: id, // replace with actual user id
        recruiter_id: recruiterId,
        assessment_id: selectedAssessment.id
    };
    fetch('https://recruits.onrender.com/invites', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${recruiterToken}`
        },
        body: JSON.stringify(requestBody)
    })
    .then(res => {
        if (res.ok) {
            // setIsFavorite(true);
        } else {
            res.json().then((err) => setErrors([err.errors]));
        }
    });
};
const handleAssessmentSelect = (event) => {
  setSelectedAssessment(event.target.value);
};
  return (
    <div>
      <h2>List of Interviewees:</h2>
      <ul>
        {interviewees.map(interviewee => (
          <li key={interviewee.id}>
            {interviewee.firstname} {interviewee.lastname}
            {/* <button onClick={() => handleInvite(interviewee.id)}>
              Invite
            </button> */}
            {assessments.length > 0 && selectedAssessment && (
              <div>
                <label htmlFor="assessment-select">Select an assessment:</label>
                <select id="assessment-select" value={selectedAssessment.id} onChange={handleAssessmentSelect}>
                  {assessments.map(assessment => (
                    <option key={assessment.id} value={assessment}>
                      {assessment.name}
                    </option>
                  ))}
                </select>
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