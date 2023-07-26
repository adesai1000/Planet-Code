import React from 'react';
import banner from '../../images/banner.png';
import './Carousel.scss'; 

const Carousel = () => {
  return (
    <div className='carousel'>
      <img src={banner} alt='banner' />
    </div>
  );
};

export default Carousel;
