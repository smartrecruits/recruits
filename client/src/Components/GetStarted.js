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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} className='started'>
      <div className='button-about'>
        <button style={{padding:'10px 20px', margin:'20px',border:'none',background: '#ee52ad',borderRadius: '50px', fontSize: '16px', cursor: 'pointer',  ':hover': { backgroundColor: '#ff96ad', boxShadow: '0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 50px #ff96ad, 0 0 200px #ff96ad' }}} onClick={handleRecruiterClick} id='button-about'>Recruiter</button>
        <button style={{padding:'10px 20px', margin:'20px',border:'none', background: '#ee52ad', borderRadius: '50px', fontSize: '16px', cursor: 'pointer',  ':hover': { backgroundColor: '#ff96ad', boxShadow: '0 0 5px #ff96ad, 0 0 25px #ff96ad, 0 0 50px #ff96ad, 0 0 200px #ff96ad' }}} onClick={handleClientClick} id='button1-about'>Client</button>
      </div>
    </div>
  );
}

export default UserTypeSelection;