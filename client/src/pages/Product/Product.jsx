import React, { useState } from 'react'
import './Product.scss'
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const images = [
    "https://crast.net/img/2023/06/4-reasons-very-personal-to-get-the-iPhone-14-Pro.jpg",
    "https://th-i.thgim.com/public/sci-tech/technology/1xi2mw/article66043533.ece/alternates/FREE_1200/iPhone%2014%20Pro%20image.png"
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
