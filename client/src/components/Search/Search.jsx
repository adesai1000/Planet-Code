import React from 'react';
import './Search.scss';
import search from '../../images/search.png';

const Search = () => {
  return (
    <div className='Search'>
      <input placeholder="Search" />
      <a className='btn'><img src={search} alt="Search" /></a>
    </div>
  );
};

export default Search;
