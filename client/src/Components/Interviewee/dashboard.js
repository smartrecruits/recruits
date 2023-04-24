import React, { useState } from 'react';
// import InviteModal from './InviteModal';
import './dashboard.css'
function Dashboard() {
  const [showInviteModal, setShowInviteModal] = useState(false);

  function handleShowInviteClick() {
    setShowInviteModal(true);
  }

  function handleCloseInvite() {
    setShowInviteModal(false);
  }

  return (
    <div className="dashboard">
      <h1>Welcome to your dashboard</h1>
      <button onClick={handleShowInviteClick}>Show Invite</button>
      {showInviteModal &&
        <div className="modal-overlay">
         
        </div>
      }
    </div>
  );
}

export default Dashboard;