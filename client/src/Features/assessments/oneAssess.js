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
  const [questions,setQuestions]= useState([])
  const [codes, setCodes] =useState([])
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

  useEffect(() => {
    fetch(`https://recruits.onrender.com/assessments_questions/`,{
      headers: {
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => setErrors(error));
  }, [id,recruiterToken]);

  useEffect(() => {
    fetch(`https://recruits.onrender.com/assessments_code_challenges/`,{
      headers: {
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
      .then(response => response.json())
      .then(data => setCodes(data))
      .catch(error => setErrors(error));
  }, [id,recruiterToken]);
  
  if (!assessment) {
    return <div>Loading assessment...</div>;
  }


  function updateAssessmentInDB(updatedAssessment) {
    fetch(`https://recruits.onrender.com/assessments/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${recruiterToken}`,
      },
      body: JSON.stringify(updatedAssessment),
    })
      .then(response => {
        console.log("Response:", response);
        return response.json();
      })
      .then(data => {
        console.log("Data:", data);
        setAssessment(data)
      })
      .catch(error => {
        console.error("Error:", error);
        setErrors(error)
      });
  }

  function removeFromAssessment(questionId) {
    let assessquestId = null;
    questions.forEach((question) => {
      if((question.question.id === questionId)&&(question.assessment.id=== id)){
        assessquestId = question.id
      }
    })
    fetch(`https://recruits.onrender.com/assessments_questions/${assessquestId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
    .then(() => {
      const updatedQuestions = assessment.questions.filter(question => question.id !== questionId);
      const updatedAssessment = { ...assessment, questions: updatedQuestions };
      setAssessment(updatedAssessment); // update the assessment in the state
      fetch(`https://recruits.onrender.com/assessments/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${recruiterToken}`,
        },
        body: JSON.stringify(updatedAssessment),
      })
      .then(response => {
        console.log("Response:", response);
        return response.json();
      })
      .then(data => {
        console.log("Data:", data);
        setAssessment(data)
      })
      .catch(error => {
        console.error("Error:", error);
        setErrors(error)
      });
    })
    .catch(error => console.log(error));
  }
  function removeCodeFromAssessment(codeChallengeId) {
    let assessquestId = null;
    codes.forEach((question) => {
      if((question.question.id === codeChallengeId)&&(question.assessment.id=== id)){
        assessquestId = question.id
      }
    })
    fetch(`https://recruits.onrender.com/assessments_code_challenges/${assessquestId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
      .then(() => {
        const updatedCodeChallenges = assessment.code_challenges.filter(codeChallenge => codeChallenge.id !== codeChallengeId);
        const updatedAssessment = { ...assessment, code_challenges: updatedCodeChallenges };
        updateAssessmentInDB(updatedAssessment)
        .then(() => setAssessment(updatedAssessment))
        .catch(error => console.log(error));
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
      <center>
         {errors.length > 0 && (
          <div className="text-danger">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
      <h2>{assessment.name}</h2>
      <h4>Questions</h4>
      <br/>
      <button className='button1' onClick={handleAddQuestionClick}>AddQuestion</button>
      <center>
        {assessment.questions.map(question => (
          <div className='questcont' key={question.id}>
            <p className='question'>{question.content}</p>
            <button className='button3'style={{ marginLeft: 'auto' }} onClick={() => removeFromAssessment(question.id)}>
                Delete 
              </button>
          </div>
        ))}
        </center>
        <h4>Code Challenges</h4>
        <br/>
        <button className='button1' onClick={handleAddCodeClick}>AddQuestion</button>

        <ul>
         {assessment.code_challenges.map(question => (
          <div className='questcont' key={question.id}>
            <p className="question">{question.name}</p>
            <button className='button3' onClick={() => removeCodeFromAssessment(question.id)}>
                Delete
              </button>
          </div>
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
      </center>
    </div>
  );
}

export default OneAssessment;