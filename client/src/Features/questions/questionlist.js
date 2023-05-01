import React, { useEffect } from "react";
import CreateQuestion from "./questions";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "./questionsSlice";
import { getRecruiterToken } from "../../Components/utils/auth";
import { updateAssessment } from "../assessments/assessmentSlice"

function QuestionList({assessmentId}) {
  const dispatch = useDispatch()
  const recruiterToken = getRecruiterToken()
  const questions = useSelector((state) => state.questions.questions);
  const status = useSelector((state) => state.questions.status);
  const errors = useSelector((state) => state.questions.errors);
  const assessment = useSelector((state) => state.assessments.assessment)
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
        question_id: questionId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        const updatedAssessment = { ...assessment, questions: [...assessment.questions, data.question] };

        console.log(updatedAssessment)
        dispatch(updateAssessment({
          assessmentId: assessmentId,
          updateData: updatedAssessment
        }))
        .then((result) => {
          console.log(result)
        })
        .catch((err) => {
          console.log(err);
        })
        console.log(data)
      })
      .catch(error => console.log(error));
  }
 

  return (
    <div>
      <h2>Questions</h2>
      <CreateQuestion />
      <div>
        {questions.map((question) => (
          <div key={question.id}>
            <p className="question">{question.content}</p>
            {/* {questions.some((code) => code.id === question.id) ? ( */}
           
            {/* ) : ( */}
              <button className="button1" onClick={() => addToAssessment(question.id)}>
                Add To Assessment
              </button>
               {/* )} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
