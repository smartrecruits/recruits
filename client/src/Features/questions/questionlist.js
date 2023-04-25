import React, { useEffect } from 'react';
import CreateQuestion from './questions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from './questionsSlice';

function QuestionList({assessmentId}) {
  // const [questions, setQuestions] = useState([]);
  const dispatch = useDispatch()

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
    fetch(`/assessments/${assessmentId}/questions/${questionId}`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
  function removeFromAssessment(questionId) {
    fetch(`/assessments/${assessmentId}/questions/${questionId}`, {
      method: 'DELETE'
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
            <button onClick={() => addToAssessment(question.id)}>Add To Assessment</button>
            <button onClick={() => removeFromAssessment(question.id)}>Remove from Assessment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
