import React, { useState } from 'react';
import { getRecruiter } from '../../Components/utils/auth';
import { useDispatch } from 'react-redux';
import { createAssessment } from './assessmentSlice';
function CreateAssessment() {
  let dispatch = useDispatch()
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([])
  const  recruiterId = getRecruiter()
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
      })
      .catch((error) => {
        // handle createAssessment error
        setErrors(error.payload || [error.message]);
      });
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