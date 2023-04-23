import React from 'react';
import { useNavigate } from "react-router-dom";

function UserTypeSelection() {
    let navigate = useNavigate();

  const handleRecruiterClick = () => {
    // handle recruiter button click
    navigate('/signing')
  }

  const handleClientClick = () => {
    // handle client button click
    navigate('/Client')
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <button onClick={handleRecruiterClick}>Recruiter</button>
        <button onClick={handleClientClick}>Client</button>
      </div>
    </div>
  );
}

export default UserTypeSelection;