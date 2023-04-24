// import React, { useState } from 'react';
// import { useParams } from "react-router-dom";
// import QuestionList from '../questions/questionlist';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   background: linear-gradient(90deg, #FF6B8A, #C93C80);
//   padding: 20px;
// `;

// const Header = styled.h2`
//   color: #FFF;
// `;

// const Subheader = styled.h4`
//   color: #FFF;
// `;

// const QuestionButton = styled.button`
//   margin-bottom: 10px;
//   padding: 5px 10px;
//   background-color: #FFF;
//   color: #C93C80;
//   border: none;
//   border-radius: 3px;
//   cursor: pointer;
// `;

// const ErrorText = styled.div`
//   color: #FF0000;
// `;

// function OneAssessment() {
//   const [assessment, setAssessment] = useState({
//     name: 'Example Assessment',
//     questions: [
//       { id: 1, content: 'Question 1' },
//       { id: 2, content: 'Question 2' },
//       { id: 3, content: 'Question 3' }
//     ],
//     code_challenges: [
//       { id: 1, content: 'Challenge 1' },
//       { id: 2, content: 'Challenge 2' },
//       { id: 3, content: 'Challenge 3' }
//     ]
//   });
//   const { id } = useParams()
//   const [errors,setErrors] = useState([])
//   const [showPopup, setShowPopup] = useState(false);

//   function handleAddQuestionClick() {
//     setShowPopup(true);
//   }

//   return (
//     <Wrapper>
//       {errors.length > 0 && (
//         <ErrorText>
//           {errors.map((error, index) => (
//             <p key={index}>{error}</p>
//           ))}
//         </ErrorText>
//       )}
//       <Header>{assessment.name}</Header>
//       <Subheader>Questions</Subheader>
//       <QuestionButton onClick={handleAddQuestionClick}>Add Question</QuestionButton>
//       <ul>
//         {assessment.questions.map(question => (
//           <li key={question.id}>
//             <h6>{question.content}</h6>
//           </li>
//         ))}
//       </ul>
//       <Subheader>Assessments</Subheader>
//       <ul>
//         {assessment.code_challenges.map(question => (
//           <li key={question.id}>
//             <h6>{question.content}</h6>
//           </li>
//         ))}
//       </ul>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <button onClick={() => setShowPopup(false)}>Close</button>
//             <QuestionList assessmentId={id} />
//           </div>
//         </div>
//       )}
//     </Wrapper>
//   );
// }

// export default OneAssessment;


import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import QuestionList from '../questions/questionlist';
import styled from 'styled-components';
import Invoices from '../../Invoices';

const Wrapper = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  margin: 20px;
  padding: 30px;
  max-width: 400px;
`;

const Header = styled.h2`
  color: #333;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const Subheader = styled.h4`
  color: #333;
  font-size: 1.2rem;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const QuestionButton = styled.button`
  background-color: #c93c80;
  border: none;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 20px;
  padding: 10px 20px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #ff6b8a;
  }
`;

const ErrorText = styled.div`
  color: #ff0000;
  margin-top: 20px;
`;

const QuestionListWrapper = styled.div`
  margin-top: 20px;
`;

function OneAssessment() {
  const [showPopup, setShowPopup] = useState(false);
  const { id } = useParams();

  function handleAddQuestionClick() {
    setShowPopup(true);
  }

  return (
    <>
    <InvoiceContainer>
    <TitleText>Recent Assessments </TitleText>
    <Invoices />
  </InvoiceContainer>
    <Wrapper>

      <Header>Assessment Name</Header>
      <Subheader>Questions</Subheader>
      <QuestionButton onClick={handleAddQuestionClick}>Add Question</QuestionButton>
      <ul>
        <li>Question 1</li>
        <li>Question 2</li>
        <li>Question 3</li>
      </ul>
      <Subheader>Assessments</Subheader>
      <ul>
        <li>Assessment 1</li>
        <li>Assessment 2</li>
        <li>Assessment 3</li>
      </ul>
      {showPopup && (
        <QuestionListWrapper>
          <QuestionList assessmentId={id} />
        </QuestionListWrapper>
      )}
    </Wrapper>
    </>
  );
};

const TitleText = styled.h3`
  height: 20%;
  /* padding-top */
`;


const InvoiceContainer = styled.div`
  height: 40%;
  width: 100%;
  margin-left: 5%;
  margin-bottom: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;


export default OneAssessment;





// import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
// import QuestionList from '../questions/questionlist'
// function OneAssessment() {
//   const [assessment, setAssessment] = useState(null);
//   const { id } = useParams()
//   const [errors,setErrors] = useState([])
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     fetch(`http://127.0.0.1:3000/assessments/${id}`)
//       .then(response => response.json())
//       .then(data => setAssessment(data))
//       .catch(error => setErrors(error));
//   }, [id]);

//   if (!assessment) {
//     return <div>Loading assessment...</div>;
//   }

//   function handleAddQuestionClick() {
//     setShowPopup(true);
//   }
//   return (
//     <div>
//          {errors.length > 0 && (
//           <div className="text-danger">
//             {errors.map((error, index) => (
//               <p key={index}>{error}</p>
//             ))}
//           </div>
//         )}
//       <h2>{assessment.name}</h2>
//       <h4>Questions</h4>
//       <button onClick={handleAddQuestionClick}>AddQuestion</button>
//       <ul>
//         {assessment.questions.map(question => (
//           <li key={question.id}>
//             <h6>{question.content}</h6>
//           </li>
//         ))}
//         </ul>
//         <h4>Assessments</h4>
//         <ul>
//          {assessment.code_challenges.map(question => (
//           <li key={question.id}>
//             <h6>{question.content}</h6>
//           </li>
//         ))}
//       </ul>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content">
//             <button onClick={() => setShowPopup(false)}>Close</button>
//             <QuestionList assessmentId={id} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default OneAssessment;