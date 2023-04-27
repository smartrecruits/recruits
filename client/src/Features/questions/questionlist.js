import React, { useEffect } from 'react';
import CreateQuestion from './questions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from './questionsSlice';
import { getRecruiterToken } from '../../Components/utils/auth';

function QuestionList({assessmentId}) {
  const dispatch = useDispatch()
  const recruiterToken = getRecruiterToken()

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const questions = useSelector((state) => state.questions.questions);
  const status = useSelector((state) => state.questions.status);
  const errors = useSelector((state) => state.questions.errors);

  if (status === "loading") {
    return <div>Loading questions...</div>;
  }

  if (!questions || questions.length === 0) {
    return <div>No questions found.</div>;
  }
  if (errors) {
    return <div>Error: {errors}</div>;
  }

  function addToAssessment(questionId) {
    fetch(`https://recruits.onrender.com/assessments_questions`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${recruiterToken}`,
      },
      body: JSON.stringify({
        assessment_id: assessmentId,
        question_id: questionId
      }),

    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
  function removeFromAssessment(questionId) {
    fetch(`https://recruits.onrender.com/assessments_questions/${questionId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }

  return (
    <div>
      <h2>Questions</h2>
      <CreateQuestion/>
      <ul>
        {questions.map(question => (
          <li key={question.id}>
            <h6>{question.content}</h6>
            {/* {questions.some((code) => code.id === question.id) ? ( */}
              <button onClick={() => removeFromAssessment(question.id)}>
                Remove from Assessment
              </button>
            {/* ) : ( */}
              <button onClick={() => addToAssessment(question.id)}>
                Add To Assessment
              </button>
               {/* )} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
