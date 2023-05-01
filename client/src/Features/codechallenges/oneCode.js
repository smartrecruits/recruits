import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCodeChallenge} from './codechallengesSlice';
import { useParams } from 'react-router-dom';
import { createAnswer } from '../answers/answersSlice';
import parse from "html-react-parser";
import { useNavigate } from 'react-router-dom';
import './codechallenges.css'
import { getInterviewee } from '../../Components/utils/auth';
const CodeChallenge = () => {
    const [answerContent, setAnswerContent] = useState('')
    const { id } = useParams()
    const { assessment_id } = useParams()
    const dispatch = useDispatch();
    const code  = useSelector((state) => state.codes.code);
    const [errors, setErrors] = useState([])
    const [timeLeft, setTimeLeft] = useState(60 * 60); 
    const navigate = useNavigate()
    const [redirect, setRedirect] = useState(false);
    const [fetchFinished, setFetchFinished] = useState(false);
    const IntervieweeId = getInterviewee()
     let intervalId
    //  console.log(code);
    //  console.log(assessment)
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
   
  useEffect(()=>{
    dispatch(fetchCodeChallenge(id)).then((result)=> {
      if (fetchCodeChallenge.rejected.match(result)) {
          setErrors([result.payload]);
        }
        setFetchFinished(true);
  })
  },[dispatch,id])  

  useEffect(() => {
    if (timeLeft <= 0) {
      setRedirect(true);
    }
     let intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);
   
    return () => clearInterval(intervalId);
  }, [navigate,assessment_id, timeLeft]);

  const handleSubmit = (e) => {
    e.preventDefault()
    clearInterval(intervalId); // Stop the timer when submitting
    dispatch(createAnswer({ 
      content: answerContent, 
      code_challenge_id: id,
      assessment_id: assessment_id,
      interviewee_id: IntervieweeId,
      done: true 
     }))
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
  if (!fetchFinished) {
    return <div>Loading code challenge...</div>;
  }

  return (
    <div className='contain'>
         {errors.length > 0 && (
            <div className="text-danger" id="errors">
            {errors.map((error, index) => (
                <p key={index}>{error}</p>
            ))}
            </div>
            )}
           <center>
            <h3>{code.name}</h3>
            <em>Time left: {formatTime(timeLeft)}</em>
          </center> 
        <div className='onecode'>
          <div className='left'>
                <center><h4>Description</h4></center>
                <div>{parse(converter.makeHtml(code.description))}</div>
                <p>{code.languages}</p>
                <p>{code.totalAttempts}</p>
                <p>{code.totalCompleted}</p>
          </div>
          <form onSubmit={handleSubmit} className='right' >
            <textarea
                id='answerarea'
                value={answerContent}
                onChange={(e) => setAnswerContent(e.target.value)}
              ></textarea>
              <br/>
              <center><button type="submit" className='button1'>Submit</button> </center>
          </form>
        </div>
    </div>
  );
};

export default CodeChallenge;