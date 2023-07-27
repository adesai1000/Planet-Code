import React, { useState } from 'react';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';
import './Products.scss'
const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItems">
          <h3>Products</h3>
          <div className="inputBoxes">
            <input type="checkbox" id='1'  value={1}/>
            <label htmlFor='1'>All</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='2'  value={2}/>
            <label htmlFor='2'>iOS Apps</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='3'  value={3}/>
            <label htmlFor='3'>Android Apps</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='4'  value={4}/>
            <label htmlFor='4'>React Native Apps</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='5'  value={5}/>
            <label htmlFor='5'>Flutter Apps</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='6'  value={6}/>
            <label htmlFor='6'>APIs</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='7'  value={7}/>
            <label htmlFor='7'>Websites</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='8'  value={8}/>
            <label htmlFor='8'>Electron Apps</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='9'  value={9}/>
            <label htmlFor='9'>Browser Extensions</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='10'  value={10}/>
            <label htmlFor='10'>VS Code Themes</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='11'  value={11}/>
            <label htmlFor='11'>VS Code Extensions</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='12'  value={12}/>
            <label htmlFor='12'>JavaScript Framworks</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='13'  value={13}/>
            <label htmlFor='13'>Node.js Packages</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='14'  value={14}/>
            <label htmlFor='14'>CSS Frameworks</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='15'  value={15}/>
            <label htmlFor='15'>Smart Contracts</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='16'  value={16}/>
            <label htmlFor='16'>Rust Crates</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='17'  value={17}/>
            <label htmlFor='17'>Python Libraries</label>
          </div>
          <div className="inputBoxes">
            <input type="checkbox" id='18'  value={18}/>
            <label htmlFor='18'>Unity Resources</label>
          </div>
        </div>
        <div className="filterItem">
          <h3>Filter</h3>
          <div className="inputItem">
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItems">
          <h3>Price</h3>
          <div className="inputItem">
            <input type='radio' id='lowToHigh' value="lowToHigh" name="lowToHigh" onChange={e=>setSort("lowToHigh")}/>
            <label htmlFor='highToLow'>Low to High</label>
          </div>
          <div className="inputItem">
            <input type='radio' id='highToLow' value="highToLow" name="highToLow" onChange={e=>setSort("highToLow")}/>
            <label htmlFor='highToLow'>High to Low</label>
          </div>
        </div>
      </div>
      <div className="right">
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Products
