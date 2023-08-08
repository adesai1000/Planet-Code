import React, { useState } from 'react';
import favourite from '../../images/favourite.png';
import search from '../../images/search.png'; 
import cart from '../../images/cart.png';
import user from '../../images/user.png';
import home from '../../images/home.svg';
import PlanetCode from '../../images/PlanetCode.png';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import Cart from '../Cart/Cart';
import Later from '../Later/Later'
import Profile from '../Profile/Profile';
import Search from '../Search/Search';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const [later, setLater] = useState(false);
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const products = useSelector(state => state.cart.products)

  const handleSellClick = () => {
    window.open('https://forms.gle/yJJmWs8gaoiXTDtj8', '_blank');
  };

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="link">
            <Link to="/"><img src={home} alt="Home" /></Link>
          </div>
        </div>
        <div className="center">
          <Link to="/"><img src={PlanetCode} alt="PlanetCode" /></Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className='item' to="/products/1">Buy</Link>
          </div>
          <div className="item">
            <div className="item" onClick={handleSellClick}>Sell</div>
          </div>
          <div className="icons">
            <a onClick={() => setShowSearch(!showSearch)}>
              <img src={search} alt="Search" />
            </a>
            <a onClick={() => setProfile(!profile)}>
              <img src={user} alt="User" />
            </a>
            <div className='later' onClick={() => setLater(!later)}>
              <img src={favourite} alt="Favourite" />
            </div>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <img src={cart} alt="Cart" />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {showSearch && <Search />}
      {later && <Later />}
      {open && <Cart />}
      {profile && <Profile />}
    </div>
  );
}

export default Navbar;
