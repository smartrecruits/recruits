import React, { useState } from 'react';
import { getRecruiter } from '../Components/utils/auth';

function CreateAssessment() {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([])
  const  recruiterId = getRecruiter()

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/assessments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        recruiter_id: recruiterId
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => setErrors([error.errors]));
  }

  return (
    <div>
      <h1>Create Assessment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Create Assessment" />
        {errors.length > 0 && (
                <div className="text-danger">
                {errors.map((error, index) => (
                    <p key={index}>{error}</p>
                ))}
                </div>
            )}
      </form>
    </div>
  );
}

export default CreateAssessment;