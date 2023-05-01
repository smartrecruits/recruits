// import React, { useEffect } from "react";
// import CreateCodeChallenge from "./codechallenges";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCode } from "./codechallengesSlice";
// import { getRecruiterToken } from "../../Components/utils/auth";
// import "./codechallenges.css";
// import parse from "html-react-parser";

// function CodeChallenges({ assessmentId }) {
//   const dispatch = useDispatch();
//   // const recruiterToken = getRecruiterToken();

//   useEffect(() => {
//     dispatch(fetchCode());
//   }, [dispatch]);

//   const codeChallenges = useSelector((state) => state.codes.codes);
//   const status = useSelector((state) => state.codes.status);
//   const errors = useSelector((state) => state.codes.errors);

//   if (status === "loading") {
//     return <div>Loading challenges...</div>;
//   }

//   if (!codeChallenges || codeChallenges.length === 0) {
//     return <div>No challenges found.</div>;
//   }
//   if (errors) {
//     return <div>Error: {errors}</div>;
//   }

//   function addToAssessment(codeChallengeId) {
//     fetch(`https://recruits.onrender.com/assessments_code_challenges`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${recruiterToken}`,
//       },
//       body: JSON.stringify({
//         assessment_id: assessmentId,
//         code_challenge_id: codeChallengeId,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) =>{ console.log(data)})
//       .catch((error) => console.log(error));
//   }

//   const showdown = require("showdown");
//   const githubExtension = require("showdown-github/dist/showdown-github");
//   const converter = new showdown.Converter({ extensions: [githubExtension] });

//   return (
//     <div>
//       <h2>CodeChallenges</h2>
//       <CreateCodeChallenge />
//       <ul>
//         {codeChallenges.map((codeChallenge) => (
//           <li key={codeChallenge.id}>
//             <h6 className="challenge">{codeChallenge.name}</h6>
//             <div>{parse(converter.makeHtml(codeChallenge.description))}</div>
//             <br />
//               <button className="button1" onClick={() => addToAssessment(codeChallenge.id)}>
//                 Add To Assessment
//               </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default CodeChallenges;
