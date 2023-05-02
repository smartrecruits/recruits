import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function IntervieweeScoreList() {
  const [interviewees, setInterviewees] = useState([]);
  const [errors, setErrors]  = useState([])
  useEffect(() => {
    fetch('https://recruits.onrender.com/interviewees/completed')
      .then(res => res.json())
      .then(data => setInterviewees(data))
      .catch(err => setErrors([err.errors]))
  }, []);

  return (
    <div>
      <h1>Interviewee List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {interviewees.map(interviewee => (
            <tr key={interviewee.id}>
              <Link to={`/intervieweescorelist/${interviewee.id}`}><td>{interviewee.name}</td></Link>
              <td>{interviewee.email}</td>
              <td>{interviewee.total_score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default IntervieweeScoreList;