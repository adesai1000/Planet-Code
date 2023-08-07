import React, { useState } from 'react';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import './Products.scss';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [selectedSC, setSelectedSC] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
    
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSC( 
      isChecked
        ? [...selectedSC, value]
        : selectedSC.filter((item) => item !== value)
    );
  };
console.log(selectedSC)
  return (
    <div className='products'>
      <div className="left">
        <div className="filterItems">
          <h3>Products</h3>
          {data?.map(item => (
            <div className="inputBoxes" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange} />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <List catId={catId} subCats={selectedSC} />
      </div>
    </div>
  );
};

export default Products;
