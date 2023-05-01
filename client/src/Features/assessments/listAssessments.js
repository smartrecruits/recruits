import React, { useState } from "react";
import {  useSelector } from "react-redux";
import CreateAssessment from "./create assessments";
import { Link } from "react-router-dom";
import "./styles.css"; // import the CSS file

const AssessmentsList = () => {
  const [errors, setErrors] = useState([]);
  const assessments = useSelector((state) => state.assessments.assessments);
  const status = useSelector((state) => state.assessments.status);
 

  return (
    <div className="container"> {/* add the container class to the outer div */}
      <h2 className="tite">Assessments List</h2>
      <CreateAssessment />
      {status === "loading" && <div>Loading assessments...</div>}
      {!assessments || assessments.length === 0 ? (
        <div>No assessments found.</div>
      ) : (
        <ol>
          {assessments.map((assessment) => (
            <li key={assessment.id}>
              <Link to={`/RecruiterAssessList/${assessment.id}`}>
                <p>Name: {assessment.name}</p>
              </Link>
            </li>
          ))}
        </ol>
      )}
      {errors.length > 0 && (
        <div className="text-danger" id="errors">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssessmentsList;
