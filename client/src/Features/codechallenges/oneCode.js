import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCodeChallenge} from './codechallengesSlice';
import { useParams } from 'react-router-dom';
import { createAnswer } from '../answers/answersSlice';
import parse from "html-react-parser";
import { useNavigate } from 'react-router-dom';
const CodeChallenge = () => {
    const [answerContent, setAnswerContent] = useState('')
    const { id } = useParams()
    const { assessment_id } = useParams()
    const dispatch = useDispatch();
    const { codeChallenge } = useSelector((state)=> state.codes.code);
    const [errors, setErrors] = useState([])
    const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
    const navigate = useNavigate()
    const [redirect, setRedirect] = useState(false);
     let intervalId

     useEffect(() => {
      const handleBeforeUnload = (e) => {
        clearInterval(intervalId); // Stop the timer
        e.preventDefault();
        e.returnValue = '';
      };
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => {
        clearInterval(intervalId);
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, [intervalId]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setRedirect(true);
    }
     let intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
    dispatch(fetchCodeChallenge(id)).then((result)=> {
      if (fetchCodeChallenge.rejected.match(result)) {
          setErrors([result.payload]);
        }
  })
    return () => clearInterval(intervalId);
  }, [navigate,assessment_id, timeLeft,dispatch,id]);

  const handleSubmit = (e) => {
    e.preventDefault()
    clearInterval(intervalId); // Stop the timer when submitting
    dispatch(createAnswer({ content: answerContent, code_challenge_id: id }))
      .then((result) => {
        if (createAnswer.fulfilled.match(result)) {
          setAnswerContent('')
          setRedirect(true);
        } else if (createAnswer.rejected.match(result)) {
          setErrors([result.payload])
        }
      })
  }

  useEffect(() => {
    if (redirect) {
      navigate(`/assessment/${assessment_id}`);
    }
  }, [redirect,navigate,assessment_id]);
  const showdown = require("showdown");
  const githubExtension = require("showdown-github/dist/showdown-github");
  const converter = new showdown.Converter({ extensions: [githubExtension] });

  const formatTime = (timeLeft) => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return (
    <div>
         {errors.length > 0 && (
            <div className="text-danger" id="errors">
            {errors.map((error, index) => (
                <p key={index}>{error}</p>
            ))}
            </div>
            )}
      <h6>{codeChallenge.name}</h6>
      <p>Time left: {formatTime(timeLeft)}</p>
      <div>{parse(converter.makeHtml(codeChallenge.description))}</div>
      <p>{codeChallenge.languages}</p>
      <p>{codeChallenge.totalAttempts}</p>
      <p>{codeChallenge.totalCompleted}</p>

      <form onSubmit={handleSubmit}>
      <input type='hidden' name='assessment_id' value={assessment_id} />
      <textarea
          value={answerContent}
          onChange={(e) => setAnswerContent(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button> 
      </form>
    </div>
  );
};

export default CodeChallenge;