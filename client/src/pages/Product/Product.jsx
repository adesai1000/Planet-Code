import React, { useState } from 'react'
import './Product.scss'
import bag30 from '../../images/bag30.png'
import fav36 from  '../../images/fav36.png'
import comp36 from '../../images/comp36.png'
import Collapsible from 'react-collapsible';

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
        
        <div className="link">
        <button className="add">
       Add to bag
        </button>
        <button className="later">
        Save for later
        </button>
        </div>
        
        <div className="info">
          <span>Seller: Christian Selig</span>
          <span>Product: Apollo for Reddit</span>
          <span>Tag: iOS Application</span>
          <hr />
        </div>
        
        <div className="detail">
          <Collapsible trigger="Description">
          <p>Apollo was an award-winning free Reddit app for iOS with over 100K 5-star reviews, built with the community in mind, and with a focus on speed, customizability, and best in class iOS features. It started development in late 2014 and ended June 2023. </p>
          </Collapsible>
          <hr />
          <Collapsible trigger="Additional Info">
          <p>This app doesn't fetch data anymore because of the signification price hike of the Reddit API.</p>
          </Collapsible>
          <hr />
          <Collapsible trigger="Need some help?">
          <p>For any questions relating to the product please email me at:- christian@apollo.com</p>
          </Collapsible>
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Product
