import React from 'react';
import './List.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const List = ({ subCats, catId }) => {

  const subCatsArray = Array.isArray(subCats) ? subCats : [];

  const { data, loading, error } = useFetch(
    `/products?populate=*${subCatsArray.map((item) => `&[filters][id][$eq]=${item}`)}`
  );

  return (
    <div className='List'>
      {loading ? 'Loading...' : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
