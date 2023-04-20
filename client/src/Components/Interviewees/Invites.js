import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';

function InviteModal(props) {
    const [invite, setInvite] = useState(null);
  
    function handleAcceptClick() {
      fetch(`/interviewees/${props.intervieweeId}/invites/${props.inviteId}/accept_assessment`, { method: 'PUT' })
        .then(response => response.json())
        .then(data => {
          setInvite(data.invite);
          toast.success('Invitation accepted successfully');
          // Do something else with the invite data if needed
        })
        .catch(error => {
          console.error('Error:', error);
          toast.error('Error accepting invitation');
        });
    }
  
    function handleCloseClick() {
      setInvite(null);
    }
  
    return (
      <div className="modal">
        <ToastContainer />
        {invite ?
          <div className="modal-content">
            <h1>You have been invited to undertake an assessment</h1>
            <p>Do you want to accept the invitation?</p>
            <button onClick={handleAcceptClick}>Accept</button>
            <button onClick={handleCloseClick}>Close</button>
          </div>
          :
          null
        }
      </div>
    );
  }

  export default InviteModal