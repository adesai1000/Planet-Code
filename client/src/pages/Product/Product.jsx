import React, { useState } from 'react'
import './Product.scss'
import bag30 from '../../images/bag30.png'
import fav36 from  '../../images/fav36.png'
import comp36 from '../../images/comp36.png'
import Collapsible from 'react-collapsible';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom'

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("image")
  const { data, loading, error } = useFetch(
    `/products/${id}`
  );

  return (
    <div className='product'>
      <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.image?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("image")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.image2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("image2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
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
