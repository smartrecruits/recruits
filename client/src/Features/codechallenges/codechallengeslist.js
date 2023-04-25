import React, { useEffect } from "react";
import CreateCodeChallenge from "./codechallenges";
import { useDispatch, useSelector } from "react-redux";
import { fetchCode } from "./codechallengesSlice";

function CodeChallenges({ assessmentId }) {
  const dispatch = useDispatch();

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
    fetch(`/assessments/${assessmentId}/code_challenges/${codeChallengeId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }
  function removeFromAssessment(codeChallengeId) {
    fetch(`/assessments/${assessmentId}/code_challenges/${codeChallengeId}`, {
      method: "DELETE",
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
            <button onClick={() => addToAssessment(codeChallenge.id)}>
              Add To Assessment
            </button>
            <button onClick={() => removeFromAssessment(codeChallenge.id)}>
              Remove from Assessment
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CodeChallenges;
