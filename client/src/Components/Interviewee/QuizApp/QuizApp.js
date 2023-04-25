import { useState } from 'react';
// import { quiz } from '../../data/questions';
import './quiz.css';
import {quiz} from './quiz';
// import Link from 'antd/es/typography/Link';
import styled from 'styled-components';
import Badge from '../everything/Badge';
import AvatarImage from "../assets/avatarImage4.jpg";
import { cardShadow,hoverEffect } from "../../utils/Interview";
import { useNavigate } from "react-router-dom";
import Timer from './Timer';



const QuizApp = () => {
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })

  const { questions } = quiz
  const { question, choices, correctAnswer } = questions[activeQuestion]

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
     
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)


  

  return (
    <>
    <div className="quiz-container">
    <Timer time={600} />
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="total-question">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={
                  selectedAnswerIndex === index ? 'selected-answer' : null
                }>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}>
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h3>Whoooo You Are done!! <br/> Here Are the Results!</h3>
          <p>
            Total Question: <span>{questions.length}</span>
          </p>
          <p>
            Total Score:<span> {result.score}</span>
          </p>
          <p>
            Correct Answers:<span> {result.correctAnswers}</span>
          </p>
          <p>
            Wrong Answers:<span> {result.wrongAnswers}</span>
          </p>
        </div>
      )}
    </div>

    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>From Twitter</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Test" />
        </Detail>
        <Title>
          This a Test for programmers to check there skill sets.
        </Title>
        <ProjectInfo>
        Success in your code test,<br/>
          Looking for a talented Programmer to join the family of my new startup.
        </ProjectInfo>
        <PriceContainer onClick={() => navigate("/QuizApp")}>
          <Price>Success</Price>
          <Badge content="Start Code-Challenge" clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>

    </>
  )
      }

const RecommendProject = styled.div`
  border-radius: 1rem;
  margin-bottom: 20%;
  margin-top: 5%;
  margin-left: 5%;
  height: 50%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem 0;
  }
`;

const CardContent = styled.div`
  margin: 0.4rem;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.5em;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;
const Price = styled.div``;


export default QuizApp