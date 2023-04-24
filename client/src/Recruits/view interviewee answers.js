import React, { useState, useEffect } from 'react';
import { getRecruiter, getInterviewee, getRecruiterToken,getIntervieweeToken } from '../Components/utils/auth';
import { reviewAssesment } from '../Features/assessments/assessmentSlice';
import { useDispatch } from 'react-redux';

function IntervieweeResponses({intervieweeId, assessmentId}) {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [errors,setErrors] = useState([])
  const [reviewed, setReviewed] = useState(false);
  const recruiterId = getRecruiter() 
  const recruiterToken = getRecruiterToken()
  const dispatch = useDispatch()
  useEffect(() => {
    fetch(`/interviewees/${intervieweeId}/responses`,{
        headers: {
            Authorization: `Bearer ${recruiterToken}`
          }
    })
    .then(res =>{
        if(res.ok){
        res.json().then((data)=>{
            setQuestions(data.questions);
            setResponses(data.responses);
          
            })
        }else{
            res.json().then((err)=>setErrors([err.errors]))
        }
        })
    },[intervieweeId,recruiterToken])

    function handleReviewChange(event) {
        setReviewed(event.target.value === 'true');
      }
    function handleReviewSubmit() {
        dispatch(
          reviewAssesment({
            assessmentId : assessmentId,
            reviewData: {
              reviewed: true
            }
          })
          )
          .then((result) => {
            console.log(result)
          })
          .catch((err) => {
            setErrors([err.payload] || [err.message])
          })
      }
    function handleFeedbackChange(event) {
        setFeedback(event.target.value);
      }
      

  function handleFeedbackSubmit(responseId, feedback) {
    fetch(`/recruiter/${recruiterId}/responses/${responseId}`, {
      method: 'PATCH',
      headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${recruiterToken}`
            },
    body: JSON.stringify({ feedback: feedback })
    })
    .then(res => {
        if (res.ok) {
            // setIsFavorite(true);
        } else {
            res.json().then((err) => setErrors([err.errors]));
        }
    });
    }

return (
    <div>
        {errors.length > 0 && (
            <div className="text-danger">
                {errors.map((error, index) => (
                <p key={index}>{error}</p>
                ))}
            </div>
            )}
        {/* <h2>Questions:</h2>
        {questions.map(question => (
        <div key={question.id}>
            <h3>{question.content}</h3>
            <p>Correct Answer: {question.correct_answer}</p>
        </div>
        ))} */}
        <h2>Interviewee Responses:</h2>
        {responses.map(response => (
            <div key={response.id}>
                <p>Question: {response.question.content}</p>
                <p>Answer: {response.chosen_answer}</p>
                <p>Correct: {response.correct ? 'Yes' : 'No'}</p>
                <p>Recruiter Feedback</p>
                <textarea onChange={handleFeedbackChange} value={feedback}></textarea>
                <button onClick={() => handleFeedbackSubmit(response.id, feedback)}>Submit</button>
            </div>
        ))}
         <div>
      <h6>Mark as reviewed</h6>
      <form>
        <label>
          Reviewed:
          <input
            type="radio"
            name="reviewed"
            value="true"
            checked={reviewed}
            onChange={handleReviewChange}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="reviewed"
            value="false"
            checked={!reviewed}
            onChange={handleReviewChange}
          />
          No
        </label>
      </form>
      <button onClick={handleReviewSubmit}>Submit</button>
    </div>
    </div>
);
}

export default IntervieweeResponses;