import React from 'react'
import '../Cart/Cart.scss'
import trash20 from '../../images/trash20.png'
const Later = () => {
    const data = [{
        id: 1,
        img: "https://techcrunch.com/wp-content/uploads/2022/09/apollo-reddit-lockscreen.jpg",
        title: "Applo - Reddit Client for iOS",
        oldPrice: 1999,
        price: 999
    },
    {
        id: 2,
        img: "https://techcrunch.com/wp-content/uploads/2023/07/mastodon-app-android.png?w=1024",
        title: "Mastodon Social",
        disc: "Social Application",
        oldPrice: 999,
        price: 499
    }
]
    return (
        <div className='cart'>
            <h1>Saved for later</h1>
            {data?.map(item => (
                <div className='item' key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <div className="price">
                            ${item.price}
                        </div>
                    </div>
                    <div className="trash">
                        <img src={trash20} />
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total</span>
                <span className='TotalP'>$1498</span>
            </div>
            <button>Add to Bag</button>
            <span className='reset'>Clear Saved</span>
        </div>
    )
}

export default Later
