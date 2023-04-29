import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import QuestionList from '../questions/questionlist'
import { getRecruiterToken } from '../../Components/utils/auth';
import CodeChallenges from '../codechallenges/codechallengeslist';
import { fetchOneAssess, updateAssessment } from './assessmentSlice';
import { useDispatch, useSelector } from 'react-redux';

function OneAssessment() {
  // const [assessment, setAssessment] = useState(null);
  const { id } = useParams()
  const [errors,setErrors] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [Popup,setPopup] = useState(false);
  const [questions,setQuestions]= useState([])
  const [codes, setCodes] =useState([])
  const recruiterToken = getRecruiterToken()
  const dispatch = useDispatch()
  const [fetchFinished, setFetchFinished] = useState(false);
  const assessment  = useSelector(state => state.assessments.assessment);

console.log(assessment);
  useEffect(() => {
    dispatch(fetchOneAssess(id)).then((result)=> {
        if (fetchOneAssess.rejected.match(result)) {
            setErrors([result.payload]);
          }
          setFetchFinished(true);
    })
  }, [dispatch,id]);

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
  
  if (!fetchFinished) {
    return <div>Loading assessment...</div>;
  }

  function removeFromAssessment(questionId) {
    let assessquestId = null;
    questions.forEach((question) => {
      if((question.question.id === questionId)){
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
      dispatch(updateAssessment({
        assessmentId: id,
        updateData: updatedAssessment
      }))
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        setErrors([err.payload] || [err.message])
      })
    })
    .catch(error => console.log(error));
  }
  function removeCodeFromAssessment(codeChallengeId) {
    let assessquestId = null;
    codes.forEach((question) => {
      if((question.code_challenge.id === codeChallengeId)){
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
        // setAssessment(updatedAssessment)
        dispatch(updateAssessment({
          assessmentId: id,
          updateData: updatedAssessment
        }))
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          setErrors([err.payload] || [err.message])
        })
      })
      .catch((error) => console.log(error));
  }

  function handleAddQuestionClick() {
    setShowPopup(true);
  }
  function handleAddCodeClick() {
    setPopup(true);
  }
 
  return (
    <div className='oneassess'>
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
      <button className='button1' onClick={handleAddQuestionClick}>Add Question</button>
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
        <button className='button1' onClick={handleAddCodeClick}>Add Code challenge</button>

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
           <div className="overlay" onClick={()=>setShowPopup(false)}></div>
            <div className="popup-content">
              <button onClick={() => setShowPopup(false)}>Close</button>
              <QuestionList assessmentId={id}/>
            </div>
        </div>
      )}
      {Popup && (
        <div className="popup">
           <div className="overlay" onClick={()=>setPopup(false)}></div>
            <div className="popup-content">
              <button onClick={() => setPopup(false)}>Close</button>
              <CodeChallenges assessmentId={id} />
            </div>
        </div>
      )}
      </center>
    </div>
  );
}

export default OneAssessment;