import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: "https://media.cnn.com/api/v1/images/stellar/prod/230601124453-01-apollo-for-reddit-app.jpg?c=4x3",
      title: "Applo - Reddit Client for iOS",
      oldPrice: 1999,
      price: 999
    },
    {
      id: 2,
      img: "https://hips.hearstapps.com/hmg-prod/images/mastodon-what-is-mastodon-is-it-really-the-new-twitter-1668515957.jpg?crop=0.670xw:1.00xh;0.0691xw,0&resize=1200:*",
      title: "Mastodon Social",
      oldPrice: 999,
      price: 499
    },
    {
      id: 3,
      img: "https://miro.medium.com/v2/resize:fit:1400/1*xOqCfciF90c8nH0HhMpapQ.png",
      title: "Supabase",
      oldPrice: 29999,
      price: 19999
    },
    {
      id: 4,
      img: "https://b.thumbs.redditmedia.com/N4p0uZaKXDqoQEtUQL3jYyxiL5U44l-PZtHlfh_NiDQ.png",
      title: "Boost - Reddit Client for Android",
      oldPrice: 999,
      price: 499
    }
  ]
  return (
    <div className='FeaturedProducts'>
      <div className="top">
        <h1>{type} Products</h1>
        <p>Welcome to Planet Code! Explore and purchase exceptional code 
          creations from skilled developers worldwide. Find the perfect solution with detailed 
          descriptions, previews, and developer information. Our robust review system ensures high quality, 
          and secure transactions offer instant downloads. Showcase your talent and gain recognition in our 
          vibrant coding community. Revolutionize the way you approach coding projects today!
        </p>
      </div>
      <div className="bottom">
        {data.map(item=>(
          <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
