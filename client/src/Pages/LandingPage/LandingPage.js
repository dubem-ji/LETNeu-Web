import React from 'react';
import './LandingPage.css';

// #images
import brain from '../../Components/images/brain.png'


const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="tab">
        <div className="brand">
          <h3>The <span>Neuro-Lab</span></h3>
        </div>
        <div className="nav">
          <h3>Research</h3>
          <h3>Techniques</h3>
          <h3>About</h3>
        </div>
      </div>
      <div className="main">
        <div className="copy">
          <h1>
            the Brain 
          </h1>
          <h2>and</h2>
          <h1>the Environment</h1>
        </div>
        <div className="image">
          <img src={brain} alt="" srcset="" />
        </div>
      </div>
      <div className="bottom">

      </div>
    </div>
  );
};

export default LandingPage;