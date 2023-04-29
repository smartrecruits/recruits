import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCodeChallenge} from './codechallengesSlice';
import { useParams } from 'react-router-dom';
import { createAnswer } from '../answers/answersSlice';
import parse from "html-react-parser";

const CodeChallenge = () => {
    const [answerContent, setAnswerContent] = useState('')
    const { id } = useParams()
    const dispatch = useDispatch();
    const { codeChallenge } = useSelector((state)=> state.codes.code);
    const [errors, setErrors] = useState([])

  useEffect(() => {
    dispatch(fetchCodeChallenge(id)).then((result)=> {
        if (fetchCodeChallenge.rejected.match(result)) {
            setErrors([result.payload]);
          }
    })
  }, [dispatch,id]);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createAnswer({ content: answerContent, code_challenge_id: id }))
      .then((result) => {
        if (createAnswer.fulfilled.match(result)) {
          setAnswerContent('')
        } else if (createAnswer.rejected.match(result)) {
          setErrors([result.payload])
        }
      })
  }
  const showdown = require("showdown");
  const githubExtension = require("showdown-github/dist/showdown-github");
  const converter = new showdown.Converter({ extensions: [githubExtension] });

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
      <div>{parse(converter.makeHtml(codeChallenge.description))}</div>
      <p>{codeChallenge.languages}</p>
      <p>{codeChallenge.totalAttempts}</p>
      <p>{codeChallenge.totalCompleted}</p>

      <form onSubmit={handleSubmit}>
      <input type='hidden' name='assessment_id' value={codeChallenge.assessment_id} />
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