import React from 'react';
import google from '../google.png';
import github from '../github.png';
import placeholderLogo from '../placeholderLogo.png';
import huawei from '../huawei.jpg';
import apple from '../apple.png';
import amazon from '../amazon.jpg';
import './CompanyLogo.css'

const CompanyLogos = () => {
  return (
    <div className="all">
        <p className="text">Some of the companies we work with are</p>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <img src={placeholderLogo} alt="Placeholder Logo" style={{ width: '120px', height: 'auto', marginRight: '20px' }} />
      <img src={github} alt="github Logo" style={{ width: '120px', height: 'auto', marginRight: '20px' }} />
      <img src={google} alt="google Logo" style={{ width: '120px', height: 'auto' }} />
      <img src={huawei} alt="huawei Logo" style={{ width: '120px', height: 'auto',borderRadius: '100px' }} />
      <img src={apple} alt="apple Logo" style={{ width: '120px', height: 'auto' }} />
      <img src={amazon} alt="amazon Logo" style={{ width: '120px', height: 'auto',borderRadius: '100px' }} />


    </div> {/* Add as many logos as you need */}
    </div>
  );
};

export default CompanyLogos;
