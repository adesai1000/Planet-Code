import React, { useState } from 'react';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import './Products.scss';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const id = useParams().id;
  const catId = parseInt(useParams().id);

  const [selectedSC, setSelectedSC] = useState([]);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSC((prevSelectedSC) =>
      isChecked ? [...prevSelectedSC, value] : prevSelectedSC.filter((item) => item !== value)
    );
  };

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
