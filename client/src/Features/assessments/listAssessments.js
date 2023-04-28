import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssess } from "./assessmentSlice";
import CreateAssessment from "./create assessments";
import { Link } from "react-router-dom";
import "./styles.css"; // import the CSS file

const AssessmentsList = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const assessments = useSelector((state) => state.assessments.assessments);
  const status = useSelector((state) => state.assessments.status);
  useEffect(() => {
    dispatch(fetchAssess()).then((result) => {
      if (fetchAssess.rejected.match(result)) {
        setErrors([result.payload]);
      }
    });
  }, [dispatch]);

  return (
    <div className="container"> {/* add the container class to the outer div */}
      <h2 className="tite">Assessments List</h2>
      <CreateAssessment />
      {status === "loading" && <div>Loading assessments...</div>}
      {!assessments || assessments.length === 0 ? (
        <div>No assessments found.</div>
      ) : (
        <ul>
          {assessments.map((assessment) => (
            <li key={assessment.id}>
              <Link to={`/RecruiterAssessList/${assessment.id}`}>
                <p>Name: {assessment.name}</p>
              </Link>
            </li>
          ))}
        </ul>
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
