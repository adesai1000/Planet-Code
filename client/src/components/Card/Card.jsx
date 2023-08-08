import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const formattedPrice = item?.attributes.price?.toLocaleString();

  return (
    <Link className='Link' to={`/product/${item.id}`} style={{ textDecoration: 'none' }}>
      <div className='Card'>
        <div className='image'>
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.image?.data?.attributes?.url}
            alt=''
            className='mainImg'
          />
          <img
            src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.image2?.data?.attributes?.url}
            alt=''
            className='secondImg'
          />
        </div>
        <h2>
          {item?.attributes.title}
          <div className='prices'>
            <h3 className='newPrice'>${formattedPrice}</h3>
          </div>
        </h2>
      </div>
    </Link>
  );
};

export default Card;
