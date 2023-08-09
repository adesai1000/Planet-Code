import React, { useState } from 'react';
import './BuyNow.scss'
import { Link } from 'react-router-dom';
const BuyNow = () => {
    
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    position: '',
    email: '',
    priceOffer: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='Buy'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Appleseed"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Appleseed Inc."
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Acquisitions Manager"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@appleseed.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="priceOffer">Offer Price ($USD)</label>
          <input
            type="text"
            id="priceOffer"
            name="priceOffer"
            placeholder="$xyz"
            value={formData.priceOffer}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Terms and Conditions</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="checkbox1"
                checked={formData.checkbox1}
                onChange={handleChange}
              />{' '}
              You agree to pay the seller if your offer is accepted.
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="checkbox2"
                checked={formData.checkbox2}
                onChange={handleChange}
              />{' '}
              Once the request is sent it cannot be cancelled.
            </label>
          </div>
          <div>
          </div>
        </div>
        <Link className='button'  to="/success/">Send Request</Link>
      </form>
    </div>
  );
};

export default BuyNow;
