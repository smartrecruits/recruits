import React, { useState, useEffect } from 'react';
import { getRecruiter, getRecruiterToken} from '../Components/utils/auth';
import { reviewAssesment } from '../Features/assessments/assessmentSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function IntervieweeResponses() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [errors,setErrors] = useState([])
  const [reviewed, setReviewed] = useState(false);
  const [answers,setanswers] = useState([])
  const [grades, setGrades] = useState([])
  const [answerfeedback, setanswerFeedback] = useState('');
  const recruiterId = getRecruiter() 
  const recruiterToken = getRecruiterToken()
  const dispatch = useDispatch()
  const {interviewee_id, assessment_id} = useParams()
  useEffect(() => {
    fetch(`/interviewees/${interviewee_id}/responses`,{
        headers: {
            Authorization: `Bearer ${recruiterToken}`
          }
    })
    .then(res =>{
        if(res.ok){
        res.json().then((data)=>{
            setQuestions(data.questions);
            setResponses(data);
          
            })
        }else{
            res.json().then((err)=>setErrors([err.errors]))
        }
        })
    },[interviewee_id,recruiterToken])

    useEffect(() => {
      fetch(`https://recruits.onrender.com/interviewees/${interviewee_id}/answers`,{
          headers: {
              Authorization: `Bearer ${recruiterToken}`
            }
      })
      .then(res =>{
          if(res.ok){
          res.json().then((data)=>{
              setanswers(data);            
              })
          }else{
              res.json().then((err)=>setErrors([err.errors]))
          }
          })
      },[interviewee_id,recruiterToken])

    function handleReviewChange(event) {
        setReviewed(event.target.value === 'true');
      }
    function handleReviewSubmit() {
        dispatch(
          reviewAssesment({
            assessmentId : assessment_id,
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

      function handleAnswerFeedbackChange(event) {
        setanswerFeedback(event.target.value);
      }

      function handleGradeChange(event) {
        setGrades(event.target.value);
      }
      

  function handleFeedbackSubmit(responseId, feedback) {
    fetch(`https://recruits.onrender.com/recruiter/${recruiterId}/responses/${responseId}`, {
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

    function handleSubmit(responseId) {
      fetch(`https://recruits.onrender.com/recruiter/${recruiterId}/answers/${responseId}`, {
        method: 'PATCH',
        headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${recruiterToken}`
              },
      body: JSON.stringify({ 
        feedback: answerfeedback,
        grades: grades 
      })
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
        <h2>Interviewee Question Responses:</h2>
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
        <h2>Interviewee Code Challenge Responses</h2>
        {answers.map(response => (
            <div key={response.id}>
                <p>Question: {response.code_challenge.content}</p>
                <p>Answer: {response.content}</p>
                <p>Grade</p>
                <input placeholder='Set Grade' type='number' onChange={handleGradeChange}/>
                <p>Recruiter Feedback</p>
                <textarea onChange={handleAnswerFeedbackChange} value={feedback}></textarea>
                <button onClick={() => handleSubmit(response.id)}>Submit</button>
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