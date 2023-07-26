import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'
const FeaturedProducts = ({type}) => {
  const data = [
    {
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
      oldPrice: 999,
      price: 499
    },
    {
      id: 3,
      img: "https://2984022599-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FfJjIdV9cuW6K8asJjTPJ%2Fuploads%2FI4D8jYsLyhrZV5LUUsdm%2FBlue%20Pink%20Gradient%20Fashion%20Banner.png?alt=media&token=0dec188c-bbf1-4bec-aaa1-3f0f37c73724",
      title: "Supabase",
      oldPrice: 29999,
      price: 19999
    },
    {
      id: 4,
      img: "https://i.ibb.co/XsTgrCh/boost-for-reddit-removebg-preview.png",
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
