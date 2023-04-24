import React, { useEffect } from 'react';
import CreateQuestion from './questions';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestions } from './questionsSlice';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: linear-gradient(90deg, #FF6B8A, #C93C80);
  padding: 20px;
`;

const Question = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const QuestionText = styled.h6`
  flex: 1;
  margin: 0;
  color: #FFF;
`;

const AddButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #FFF;
  color: #C93C80;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const RemoveButton = styled(AddButton)`
  background-color: #C93C80;
  color: #FFF;
`;

function QuestionList({assessmentId}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const questions = useSelector((state) => state.question.questions);

  const status = useSelector((state) => state.question.status);

  if (status === "loading") {
    return <div>Loading assessments...</div>;
  }

  if (!questions || questions.length === 0) {
    return <div>No questions found.</div>;
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
    <Wrapper>
      <h2 style={{color: "#FFF"}}>Questions</h2>
      <CreateQuestion/>
      <ul>
        {questions.map(question => (
          <Question key={question.id}>
            <QuestionText>{question.content}</QuestionText>
            <AddButton onClick={() => addToAssessment(question.id)}>Add To Assessment</AddButton>
            <RemoveButton onClick={() => removeFromAssessment(question.id)}>Remove from Assessment</RemoveButton>
          </Question>
        ))}
      </ul>
    </Wrapper>
  );
}

export default QuestionList;
