import React, { useState } from 'react';
import { getRecruiter } from '../../Components/utils/auth';
import { useDispatch } from 'react-redux';
import { createAssessment } from './assessmentSlice';
import './create-assessment.css';

function CreateAssessment() {
  let dispatch = useDispatch();
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);
  const recruiterId = getRecruiter();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createAssessment({
        name: name,
        recruiter_id: recruiterId,
      })
    )
      .then((result) => {
        // handle successful createAssessment action
        console.log(result);
        setName('')
      })
      .catch((error) => {
        // handle createAssessment error
        console.log([error.payload])
        setErrors([error.payload]);
        setName('')
      });
  };

  console.log(errors);

  return (
    <div className="create-assessment-container">
      <div className="create-assessment-card">
        <h1 className="create-assessment-heading">Create Assessment</h1>
        <form onSubmit={handleSubmit} className="create-assessment-form">
          <label className="create-assessment-label">
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <button type="submit" className="create-assessment-button">
            Create Assessment
          </button>
          {errors.length > 0 && (
            <div className="create-assessment-error-container">
              {errors.map((error, index) => (
                <p key={index} className="create-assessment-error">
                  {error}
                </p>
              ))}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateAssessment;
