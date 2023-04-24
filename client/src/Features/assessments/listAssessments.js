import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssess } from "./assessmentSlice";
import CreateAssessment from "./create assessments";
const AssessmentsList = () => {
  const dispatch = useDispatch();
  const assessments = useSelector((state) => state.assessment.assessments);
  const status = useSelector((state) => state.assessment.status);

  useEffect(() => {
    dispatch(fetchAssess());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading assessments...</div>;
  }

  if (!assessments || assessments.length === 0) {
    return <div>No assessments found.</div>;
  }

  return (
    <div>
      <h2>Assessments List</h2>
      <CreateAssessment/>
      <ul>
        {assessments.map((assessment) => (
          <li key={assessment.id}>
            <p>Name: {assessment.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssessmentsList;