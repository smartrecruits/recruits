import React, { useState } from "react";
import { createCode } from "./codechallengesSlice";
import { useDispatch } from "react-redux";
import "./codechallenges.css";

function CreateCodeChallenge() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [totalAttempts, setTotalAttempts] = useState("");
  const [totalCompleted, setTotalCompleted] = useState("");
  let dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createCode({
        name: name,
        description: description,
        totalAttempts: totalAttempts,
        totalCompleted: totalCompleted,
      })
    )
      .then((result) => {
        // handle successful createAssessment action
        console.log(result);
      })
      .catch((error) => {
        // handle createAssessment error
        setErrors([error.payload] || [error.message]);
      });
  };

  return (
    <div>
      <h2>Create a new challenge!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Code challenge name:
            <br />
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <br />
            <textarea
              type="text"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
        </div>
        <div>
          <label>Total Attempts: {totalAttempts}</label>
        </div>
        <div>
          <label>Total Completed: {totalCompleted}</label>
        </div>
        <br />
        <button type="submit" className="button1">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateCodeChallenge;
