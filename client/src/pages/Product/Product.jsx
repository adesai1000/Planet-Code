import React, { useState } from 'react'
import './Product.scss'
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const images = [
    "https://techcrunch.com/wp-content/uploads/2022/09/apollo-reddit-lockscreen.jpg",
    "https://techcrunch.com/wp-content/uploads/2023/07/mastodon-app-android.png?w=1024"
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
      <div className="right"></div>
    </div>
  )
}

export default Product
