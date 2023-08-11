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
        <h1>Product Purchased!</h1>
        <p className='lol'>
          Thank you for supporting indie developers!<br />
          </p>
          <h3 className='head'>So What's next?</h3>
          <p>
          We have sent you an invoice to your Email.<br />
        Soon the seller will contact you to arrange the trasnfer of the ownership!
        </p>
       
      </div>
      <canvas id="my-canvas" className="confetti-canvas"></canvas>
    </div>
  );
};

export default Success;
