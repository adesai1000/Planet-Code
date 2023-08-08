import React from 'react'
import './Cart.scss'
import trash20 from '../../images/trash20.png'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, resetCart } from '../../redux/cartReducer'
const Cart = () => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.price))
        return total.toLocaleString()
    }
    return (
        <div className='cart'>
            <h1>Items in your bag</h1>
            {products?.map(item => (
                <div className='item' key={item.id}>
                    <img src={process.env.REACT_APP_UPLOAD_URL + item.image} alt={item.title} />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.description?.substring(0, 30)}...</p>
                        <div className="price">
                            ${item.price.toLocaleString()}
                        </div>
                    </div>
                    <div className="trash"  onClick={() =>{
                         console.log('Removing item:', item.id);
                         dispatch(removeItem(item.id))}
                    }>
                        <img src={trash20} />
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total</span>
                <span className='TotalP'>${totalPrice()}</span>
            </div>
            <button>Check Out</button>
            <span className='reset' onClick={() => dispatch(resetCart())}>Clear Bag</span>
        </div>
    )
}

export default Cart
