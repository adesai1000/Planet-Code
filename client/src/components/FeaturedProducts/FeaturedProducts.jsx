import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  if (loading) {
    return <div className='Loading'>Loading...</div>;
  }

  if (error) {
    return <div className='Error'>Error occurred while fetching data</div>;
  }

  return (
    <div className='FeaturedProducts'>
      <div className='top'>
        <h1>{type} Products</h1>
        <p>
          Welcome to Planet Code! Explore and purchase exceptional code creations from skilled developers worldwide.
          Find the perfect solution with detailed descriptions, previews, and developer information. Our robust review
          system ensures high quality and secure transactions.
        </p>
      </div>
      <div className='bottom'>
        {data && data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
