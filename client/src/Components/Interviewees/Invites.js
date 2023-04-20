import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState,useEffect } from 'react';

function InviteModal({onClose,intervieweeId,inviteId}) {
    const [invite, setInvite] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const isInviteAccepted = localStorage.getItem(`invite-${inviteId}-accepted`);
        if (isInviteAccepted === 'true') {
          onClose();
        }
      }, [inviteId, onClose]);

    function handleAcceptClick() {
        setLoading(true);
        fetch(`/interviewees/${intervieweeId}/invites/${inviteId}/accept_assessment`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
         })
        .then(response => response.json())
        .then(data => {
            setLoading(false);
          setInvite(data.invite);
          toast.success('Invitation accepted successfully');
          localStorage.setItem(`invite-${inviteId}-accepted`, 'true');
          window.location.href = `/assessments/${data.assessment.id}`;
          // Do something else with the invite data if needed
        })
        .catch(error => {
            setLoading(false);
            setError('An error occurred while accepting the invitation. Please try again later.');
            console.error('Error:', error);
            toast.error('Error accepting invitation');
        });
    }
  
    function handleCloseClick() {
      setInvite(null);
      onClose()
    }
  
    return (
      <div className="modal">
        <ToastContainer />
        {invite ?
          <div className="modal-content">
            <h1>You have been invited to undertake an assessment</h1>
            <p>Do you want to accept the invitation?</p>
            <button onClick={handleAcceptClick} disabled={loading}>
               {loading ? 'Loading...' : 'Accept'}
            </button>
            <button onClick={handleCloseClick}>Close</button>
          </div>
          :
          null
        }
      </div>
    );
  }

  export default InviteModal