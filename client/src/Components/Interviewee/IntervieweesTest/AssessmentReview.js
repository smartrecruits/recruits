import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { getIntervieweeToken } from '../../utils/auth';

function AssessmentReviewedNotification({assessmentId}) {
  const intervieweeToken =  getIntervieweeToken()

    useEffect(() => {
        fetch(`https://recruits.onrender.com/assessments/${assessmentId}`,{
            headers: {
                'Authorization': `Bearer ${intervieweeToken}`,
              },
        })
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
      }, [assessmentId, intervieweeToken]);
  return null;
}

export default AssessmentReviewedNotification;