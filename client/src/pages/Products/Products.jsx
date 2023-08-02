import React, { useState } from 'react';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import './Products.scss';
import useFetch from '../../hooks/useFetch';

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSC, setSelectedSC] = useState([]);
  const { data, loading, error } = useFetch(`/categories/`);

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
        <div className="filterItem">
          <h3>Filter</h3>
          <div className="inputItem">
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItems">
          <h3>Price</h3>
          <div className="inputItem">
            <input type='radio' id='lowToHigh' value="lowToHigh" name="lowToHigh" onChange={e => setSort("lowToHigh")} />
            <label htmlFor='lowToHigh'>Low to High</label>
          </div>
          <div className="inputItem">
            <input type='radio' id='highToLow' value="highToLow" name="highToLow" onChange={e => setSort("highToLow")} />
            <label htmlFor='highToLow'>High to Low</label>
          </div>
        </div>
      </div>
      <div className="right">
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSC} />
      </div>
    </div>
  );
};

export default Products;
