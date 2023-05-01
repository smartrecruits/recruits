import React, { useState } from 'react';
import { getInterviewee, getIntervieweeToken } from '../../utils/auth';
function AnswerForm({ question, assessmentId }) {
  const [chosenAnswer, setChosenAnswer] = useState('');
  const IntervieweeId = getInterviewee()
  const intervieweeToken= getIntervieweeToken()
  async function handleSubmit(event) {
    event.preventDefault();
    try {
        const response1 = await fetch(`https://recruits.onrender.com/interviewee/${IntervieweeId}/question/${question.id}/check_answer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${intervieweeToken}`,
          },
          body: JSON.stringify({ chosen_answer: chosenAnswer })
        });
        const data1 = await response1.json();
        // handle response data1
    
        const response2 = await fetch(`https://recruits.onrender.com/responses`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${intervieweeToken}`,
          },
          body: JSON.stringify({
             chosen_answer: chosenAnswer,
             assessment_id: assessmentId,
             interviewee_id: IntervieweeId,
             question_id: question.id
             })
        });
        const data2 = await response2.json();
        // handle response data2
    
      } catch (error) {
        // handle error
      }
    
  }

  return (
    <div>
      <p>{question.content}</p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input
            type="radio"
            name="chosen_answer"
            value={question.answer_1}
            checked={chosenAnswer === question.answer_1}
            onChange={event => setChosenAnswer(event.target.value)}
          />
          <label>{question.answer_1}</label>
        </div>

        <div className="field">
          <input
            type="radio"
            name="chosen_answer"
            value={question.answer_2}
            checked={chosenAnswer === question.answer_2}
            onChange={event => setChosenAnswer(event.target.value)}
          />
          <label>{question.answer_2}</label>
        </div>

        <div className="field">
          <input
            type="radio"
            name="chosen_answer"
            value={question.answer_3}
            checked={chosenAnswer === question.answer_3}
            onChange={event => setChosenAnswer(event.target.value)}
          />
          <label>{question.answer_3}</label>
        </div>

        <div className="field">
          <input
            type="radio"
            name="chosen_answer"
            value={question.answer_4}
            checked={chosenAnswer === question.answer_4}
            onChange={event => setChosenAnswer(event.target.value)}
          />
          <label>{question.answer_4}</label>
        </div>

        <div className="actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AnswerForm