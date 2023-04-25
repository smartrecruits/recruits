import React, { useEffect } from "react";
import CreateCodeChallenge from "./codechallenges";
import { useDispatch, useSelector } from "react-redux";
import { fetchCode } from "./codechallengesSlice";
import { getRecruiterToken } from "../../Components/utils/auth";

function CodeChallenges({ assessmentId }) {
  const dispatch = useDispatch();
  const recruiterToken = getRecruiterToken()

  useEffect(() => {
    dispatch(fetchCode());
  }, [dispatch]);

  const codeChallenges = useSelector((state) => state.codes.codes);
  const status = useSelector((state) => state.codes.status);
  const errors = useSelector((state) => state.codes.errors);

  if (status === "loading") {
    return <div>Loading challenges...</div>;
  }

  if (!codeChallenges || codeChallenges.length === 0) {
    return <div>No challenges found.</div>;
  }
  if (errors) {
    return <div>Error: {errors}</div>;
  }

  function addToAssessment(codeChallengeId) {
    fetch(`/assessments_code_challenges`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${recruiterToken}`,
      },
      body: JSON.stringify({
        assessment_id: assessmentId,
        code_challenge_id: codeChallengeId
      })
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  function removeFromAssessment(codeChallengeId) {
    fetch(`/assessments_code_challenges/${codeChallengeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${recruiterToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <h2>CodeChallenges</h2>
      <CreateCodeChallenge />
      <ul>
        {codeChallenges.map((codeChallenge) => (
          <li key={codeChallenge.id}>
            <h6>{codeChallenge.name}</h6>
            <h6>{codeChallenge.description}</h6>
             {codeChallenges.some((code) => code.id === codeChallenge.id) ? (
              <button onClick={() => removeFromAssessment(codeChallenge.id)}>
                Remove from Assessment
              </button>
            ) : (
              <button onClick={() => addToAssessment(codeChallenge.id)}>
                Add To Assessment
              </button>
               )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CodeChallenges;
