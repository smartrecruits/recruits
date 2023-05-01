import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneAssess } from '../../../Features/assessments/assessmentSlice';
import AnswerForm from '../IntervieweesTest/Answers';
import { Link } from 'react-router-dom';
import { getIntervieweeToken } from '../../utils/auth';
function OneAssessmentInterviewee() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [errors,setErrors] = useState([])
  const [fetchFinished, setFetchFinished] = useState(false);
  const assessment  = useSelector(state => state.assessments.assessment);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const [questionsDone,setQuestionsDone]= useState(false)
  const intervieweeToken = getIntervieweeToken()
  let questionList

  useEffect(() => {
    dispatch(fetchOneAssess(id)).then((result)=> {
        if (fetchOneAssess.rejected.match(result)) {
            setErrors([result.payload]);
          }
          setFetchFinished(true);
    })
  }, [dispatch,id]);

  const handleStart = () => {
    setCurrentQuestionIndex(0);
  }

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function handleFinish(){
    setCurrentQuestionIndex(null)
    setQuestionsDone(true)
  }
  const markAssessmentCompleted = () => {
    fetch(`https://recruits.onrender.com/assessments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${intervieweeToken}`,
      },
      body: JSON.stringify({
        done: true
      })
    })
      .then(response => response.json())
      .then(data => {console.log(data)})
      .catch(error => setErrors(error));
  }

  if (fetchFinished) {
    const numQuestions = assessment.questions.length;
     questionList = Array.from({length: numQuestions}, (_, i) => i + 1);
  }
  if (!fetchFinished) {
    return <div>Loading assessment...</div>;
  }

  if (currentQuestionIndex === null) {
    return (
      <center>
        {errors.length > 0 && (
          <div className="text-danger">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <div>
          <h2>{assessment.name}</h2>
          <h4>Questions</h4>
          {questionsDone ? (
            <p>The quiz Has been Done</p>
          ):(
            <div>
            <p>Please Click the start button to start the quiz</p>
            <button onClick={handleStart}>START</button>
            </div>
          )}          
          <h4>Code Challenges</h4>
          <p>Please click on a code to start</p>
          <ul>
          {assessment.code_challenges.map(question => (
            <li key={question.id}>
              <Link to={`/assessment/${id}/code/${question.id}`}><h6>{question.name}</h6></Link>
            </li>
          ))}
         </ul>
        {assessment.done ? (
          <p>This assessment has been marked as completed.</p>
        ) : (
          <button onClick={markAssessmentCompleted}>Mark as completed</button>
        )}
      </div>
      </center>
    );
  }

  const currentQuestion = assessment.questions[currentQuestionIndex];
  const handleClick = (index) => {
    setCurrentQuestionIndex(index);
    window.scrollTo(0, 0);
  };
  return (
    <center>
         {errors.length > 0 && (
          <div className="text-danger">
            {errors.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
         <h2>{assessment.name}</h2>
         <div className='quizlist'  style={{ textAlign: 'right' }}>
            <ul>
              <h4>Questions</h4>
                {questionList.map((q, i) => (
                  <li key={i} onClick={() => handleClick(i)}>Question {q}</li>
                ))}
              </ul>
      </div>
        <div className='quiz'  style={{ textAlign: 'center' }}>
          <h4>Questions {currentQuestionIndex + 1}</h4>
            <AnswerForm question={currentQuestion}/>
            {currentQuestionIndex < assessment.questions.length - 1 ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleFinish}>Finish</button>
          )}
      </div>
     
    </center>
  );
}

export default OneAssessmentInterviewee;