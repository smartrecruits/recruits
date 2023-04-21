import React, { useState, useEffect } from 'react';
import { getRecruiter, getInterviewee, getRecruiterToken,getIntervieweeToken } from '../Components/utils/auth';

function IntervieweeResponses() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [errors,setErrors] = useState([])
  const recruiterId = getRecruiter() 
  const intervieweeId = getInterviewee()
  const recruiterToken = getRecruiterToken()
  const IntervieweeToken = getIntervieweeToken()
  useEffect(() => {
    fetch(`/interviewees/${intervieweeId}/responses`)
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
    },[intervieweeId])

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
            <textarea onChange={event => handleFeedbackSubmit(response.id, event.target.value)}></textarea>
        </div>
    ))}
</div>
);
}

export default IntervieweeResponses;