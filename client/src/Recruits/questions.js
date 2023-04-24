import React, { useState } from 'react';
import { getRecruiterToken } from '../Components/utils/auth';
function CreateQuestion({assessmentId}) {
  const [content, setContent] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  let recruiterToken = getRecruiterToken
  const handleSubmit = (e) => {
    e.preventDefault();
    // send form data to server for processing
    fetch('/assessments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${recruiterToken}`
        },
        body: JSON.stringify({
          content: content,
          answer1: answer1,
          answer2: answer2,
          answer3: answer3,
          answer4: answer4,
          correctAnswer: correctAnswer
        })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
    }

  return (
    <div>
      <h2>Create a new question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question content:</label>
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <div>
          <label>Answer 1:</label>
          <input
            type="text"
            value={answer1}
            onChange={(event) => setAnswer1(event.target.value)}
          />
        </div>
        <div>
          <label>Answer 2:</label>
          <input
            type="text"
            value={answer2}
            onChange={(event) => setAnswer2(event.target.value)}
          />
        </div>
        <div>
          <label>Answer 3:</label>
          <input
            type="text"
            value={answer3}
            onChange={(event) => setAnswer3(event.target.value)}
          />
        </div>
        <div>
          <label>Answer 4:</label>
          <input
            type="text"
            value={answer4}
            onChange={(event) => setAnswer4(event.target.value)}
          />
        </div>
        <div>
          <label>Correct answer:</label>
          <input
            type="text"
            value={correctAnswer}
            onChange={(event) => setCorrectAnswer(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateQuestion;