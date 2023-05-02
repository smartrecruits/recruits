import React, { useState } from "react";
import {  useSelector, useDispatch } from "react-redux";
import CreateAssessment from "./create assessments";
import { Link } from "react-router-dom";
import "./styles.css"; // import the CSS file
import { FaTrash } from "react-icons/fa";
import { deleteAssessment } from "./assessmentSlice";

const AssessmentsList = () => {
  const [errors, setErrors] = useState([]);
  const assessments = useSelector((state) => state.assessments.assessments);
  const status = useSelector((state) => state.assessments.status);
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    // if (window.confirm("Are you sure you want to delete this assessment?")) {
      dispatch(deleteAssessment(id)); // dispatch the deleteAssessment action with the assessment ID
    // }
  };

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
            <li key={assessment.id} className="assess-list">
              <Link to={`/RecruiterAssessList/${assessment.id}`}>
                <p className="assess-name">Name: {assessment.name}</p>
              </Link>
              <button onClick={() => handleDelete(assessment.id)} className="delete-button">
                <FaTrash />
              </button>
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
