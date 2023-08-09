import React, { useEffect } from 'react';
import ConfettiGenerator from 'confetti-js';
import './Success.scss';
import { Link } from 'react-router-dom';
const Success = () => {
  useEffect(() => {
    const confettiSettings = { target: 'my-canvas' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    const confettiCleanupTimeout = setTimeout(() => {
      confetti.clear();
    }, 5000);

    return () => {
      clearTimeout(confettiCleanupTimeout); 
      confetti.clear();
    };
  }, []);

  return (
    <div className="container">
      <div className="box">
        <h1>Buy Request Sent!</h1>
        <p className='lol'>
          You are so close we can feel it! <br />
          </p>
          <h3 className='head'>So What's next?</h3>
          <p>
          We have sent your information to the user.<br />
        They will review and either accept or decline your offer and reach out accordingly!
        </p>
       
      </div>
      <canvas id="my-canvas" className="confetti-canvas"></canvas>
    </div>
  );
};

export default Success;
