import React, { useState } from 'react'
import favourite from '../../images/favourite.png';
import search from '../../images/search.png';
import cart from '../../images/cart.png';
import user from '../../images/user.png';
import home from '../../images/home.svg';
import PlanetCode from '../../images/PlanetCode.png'
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import Cart from '../Cart/Cart';
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className="wrapper">
        <div className="left">
        <div className="link">
          <Link to="/"><img src={home}/></Link>
          </div>
        </div>
        <div className="center">
        <Link to="/"><img src={PlanetCode}/></Link>
        </div>
        <div className="right">
        <div className="item">
          <Link className='item' to="/products/1">Buy</Link>
          </div>
          <div className="item">
          <Link className="item" to="/products/2">Sell</Link>
          </div>
          <div className="icons">
          <Link to="/"><img src={search}/></Link>
          <Link to="/"><img src={user}/></Link>
          <Link to="/"><img src={favourite}/></Link>
          <div className="cartIcon" onClick={()=>setOpen(!open)}><img src={cart}/>
          <span>0</span>
          </div>
          </div>
        </div>
    </div>
    {
      open && <Cart />
    }
    </div>
  )
}

export default Navbar
