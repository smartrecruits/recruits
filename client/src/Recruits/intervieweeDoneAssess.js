import React, { useState, useEffect } from 'react';
import { getRecruiter, getRecruiterToken } from '../Components/utils/auth';
import { reviewAssesment } from '../Features/assessments/assessmentSlice';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function IntervieweeAssessments() {
  const [assessments, setAssessments] = useState([]);
  const [errors, setErrors] = useState([]);
  const recruiterId = getRecruiter();
  const recruiterToken = getRecruiterToken();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/interviewees/${id}/assessments`, {
      headers: {
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            const filteredAssessments = data.filter(
                assessment => assessment.interviewee_id === id && assessment.done
              );
              setAssessments(filteredAssessments);
          });
        } else {
          res.json().then((err) => setErrors([err.errors]));
        }
      });
  }, [id, recruiterToken]);

  return (
    <div>
      {errors.length > 0 && (
        <div className="text-danger">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <h2>Interviewee Marked as Done Assessments:</h2>
      {assessments.map((assessment) => (
        <div key={assessment.id}>
          <Link to={`/answers/${id}/${assessment.id}`}><p>Assessment name: {assessment.name}</p></Link>
        </div>
      ))}
    </div>
  );
}

export default IntervieweeAssessments;