import React, {useContext} from 'react'
import { QuizContext } from '../../Helpers/Contexts'
import './Code.css'
import { Questions } from '../../Helpers/QuestionBank'

function EndScreen() {
  const {score, setScore, setCodeState} = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setCodeState("menu");
  };

  return (
    <div className='EndScreen'>
    <h1>  Quiz Finished </h1>
    <h3> {score} / {Questions} </h3>
    <button onClick={restartQuiz}> Restart Quiz </button>
    </div>
  )
}

export default EndScreen
