import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import QuestionList from '../questions/questionlist'
function OneAssessment() {
  const [assessment, setAssessment] = useState(null);
  const { id } = useParams()
  const [errors,setErrors] = useState([])
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch(`https://recruits.onrender.com/assessments/${id}`)
      .then(response => response.json())
      .then(data => setAssessment(data))
      .catch(error => setErrors(error));
  }, [id]);

  if (!assessment) {
    return <div>Loading assessment...</div>;
  }

  function handleAddQuestionClick() {
    setShowPopup(true);
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
      <h2>{assessment.name}</h2>
      <h4>Questions</h4>
      <button onClick={handleAddQuestionClick}>AddQuestion</button>
      <ul>
        {assessment.questions.map(question => (
          <li key={question.id}>
            <h6>{question.content}</h6>
          </li>
        ))}
        </ul>
        <h4>Assessments</h4>
        <ul>
         {assessment.code_challenges.map(question => (
          <li key={question.id}>
            <h6>{question.content}</h6>
          </li>
        ))}
      </ul>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={() => setShowPopup(false)}>Close</button>
            <QuestionList assessmentId={id} />
          </div>
        </div>
      )}
    </div>
  );
}

export default OneAssessment;