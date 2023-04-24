import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

function AssessmentReviewedNotification({assessmentId}) {
    useEffect(() => {
        fetch(`/assessments/${assessmentId}`)
          .then(res => {
            if (res.ok) {
              res.json().then(data => {
                if (data.reviewed) {
                        toast.success(`The ${data.name} assessment has been reviewed.`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
              });
            }
          });
      }, [assessmentId]);
  return null;
}

export default AssessmentReviewedNotification;