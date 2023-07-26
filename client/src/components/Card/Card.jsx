import React from 'react'
import './Card.scss'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
  return (
    <Link className='Link' to={'/product/${item.id}'} style={{textDecoration: 'none'}}>
     <div className='Card'>
    <div className="image">
       <img src={item.img} alt='Product Image' className='mainImg'/>
        </div>
        <h2>{item.title}
        <div className="prices">
            <h3 className='newPrice'>${item.price}</h3>
            <h3 className='oldPrice' > ${item.oldPrice}</h3>
        </div>
        </h2>
    </div>
    </Link>
   
  )
}

export default Card
