import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import QuestionList from '../questions/questionlist'
import { getRecruiterToken } from '../../Components/utils/auth';
import CodeChallenges from '../codechallenges/codechallengeslist';

function OneAssessment() {
  const [assessment, setAssessment] = useState(null);
  const { id } = useParams()
  const [errors,setErrors] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [Popup,setPopup] = useState(false);

  const recruiterToken = getRecruiterToken()

  useEffect(() => {
    fetch(`https://recruits.onrender.com/assessments/${id}`,{
      headers: {
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
      .then(response => response.json())
      .then(data => setAssessment(data))
      .catch(error => setErrors(error));
  }, [id,recruiterToken]);

  if (!assessment) {
    return <div>Loading assessment...</div>;
  }

  function removeFromAssessment(questionId) {
    fetch(`https://recruits.onrender.com/assessments_questions/${questionId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
      .then(() => {
        const updatedQuestions = assessment.questions.filter(question => question.id !== questionId);
        const updatedAssessment = { ...assessment, questions: updatedQuestions };
        setAssessment(updatedAssessment);
        console.log(assessment)

      })
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  function removeCodeFromAssessment(codeChallengeId) {
    fetch(`https://recruits.onrender.com/assessments_code_challenges/${codeChallengeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
      .then(() => {
        const updatedCodeChallenges = assessment.code_challenges.filter(codeChallenge => codeChallenge.id !== codeChallengeId);
        const updatedAssessment = { ...assessment, code_challenges: updatedCodeChallenges };
        setAssessment(updatedAssessment);
        console.log(assessment)
      })
      .catch((error) => console.log(error));
  }

  function handleAddQuestionClick() {
    setShowPopup(true);
  }
  function handleAddCodeClick() {
    setPopup(true);
  }
  function updateAssessment(newAssessment){
    // setAssessment([...assessment,newAssessment])
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
            <button onClick={() => removeFromAssessment(question.id)}>
                Remove from Assessment
              </button>
          </li>
        ))}
        </ul>
        <h4>Code Challenges</h4>
        <button onClick={handleAddCodeClick}>AddQuestion</button>

        <ul>
         {assessment.code_challenges.map(question => (
          <li key={question.id}>
            <h6>{question.content}</h6>
            <button onClick={() => removeCodeFromAssessment(question.id)}>
                Remove from Assessment
              </button>
          </li>
        ))}
      </ul>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={() => setShowPopup(false)}>Close</button>
            <QuestionList assessmentId={id}  updateAssessment={updateAssessment}/>
          </div>
        </div>
      )}
      {Popup && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={() => setPopup(false)}>Close</button>
            <CodeChallenges assessmentId={id}  updateAssessment={updateAssessment} />
          </div>
        </div>
      )}
    </div>
  );
}

export default OneAssessment;