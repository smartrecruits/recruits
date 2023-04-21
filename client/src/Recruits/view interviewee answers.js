import React, { useState, useEffect } from 'react';
import { getRecruiter, getInterviewee } from '../Components/utils/auth';

function IntervieweeResponses() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const recruiterId = getRecruiter() 
  const intervieweeId = getInterviewee()
  useEffect(() => {
    fetch(`/interviewees/${intervieweeId}/responses`)
      .then(response => response.json())
      .then(data => {
        setQuestions(data.questions);
        setResponses(data.responses);
      })
      .catch(error => {
        // handle error
      });
  }, [intervieweeId]);

  function handleFeedbackSubmit(responseId, feedback) {
    fetch(`recruiter/${recruiterId}/responses/${responseId}`, {
      method: 'PATCH',
      headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
    body: JSON.stringify({ feedback: feedback })
    })
    .then(response => response.json())
    .then(data => {
    // handle response data
    })
    .catch(error => {
    // handle error
    });
    }

return (
<div>
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