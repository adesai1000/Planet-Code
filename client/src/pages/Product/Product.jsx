import React, { useState } from 'react'
import './Product.scss'
import bag30 from '../../images/bag30.png'
import fav36 from  '../../images/fav36.png'
import comp36 from '../../images/comp36.png'
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quant, setQaunt] = useState(1)
  const images = [
    "https://images.unsplash.com/photo-1554672408-17407e0322ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80 ",
    "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
  ]
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={images[0]} onClick={e=>setSelectedImg(0)}/>
          <img src={images[1]} onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImage">
          <img src={images[selectedImg]}/>
        </div>
      </div>
      <div className="right">
        <h1>Apollo - Reddit Client for iOS</h1>
        <span className='price'>$999</span>
        <p>Apollo is an award-winning free Reddit app for iOS with over 100K 5-star reviews, built with the community in mind, and with a focus on speed, customizability, and best in class iOS features.</p>
        <button className="add">
        <img src={bag30}/> Add to bag
        </button>
        <div className="link">
          <div className="item">
            <img src={fav36}/> Save for later
          </div>
          <div className="item">
            <img src={comp36}/> Compare
          </div>
        </div>
        <div className="info">
          <span>Seller: Christian Selig</span>
          <span>Product: Apollo for Reddit</span>
          <span>Tag: iOS Application</span>
          <hr />
        </div>
        
        <div className="detail">
          <span>Description</span>
          <hr />
          <span>Additional Info</span>
          <hr />
          <span>Need some help?</span>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Product
