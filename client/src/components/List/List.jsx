import React from 'react'
import './List.scss'
import Card from '../Card/Card'
const List = () => {
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
        },
        {
          id: 5,
          img: "https://techcrunch.com/wp-content/uploads/2023/07/mastodon-app-android.png?w=1024",
          title: "Mastodon Social",
          oldPrice: 999,
          price: 499
        },
        {
          id: 6,
          img: "https://techcrunch.com/wp-content/uploads/2023/07/mastodon-app-android.png?w=1024",
          title: "Mastodon Social",
          oldPrice: 999,
          price: 499
        },
        {
          id: 7,
          img: "https://techcrunch.com/wp-content/uploads/2023/07/mastodon-app-android.png?w=1024",
          title: "Mastodon Social",
          oldPrice: 999,
          price: 499
        }
      ] 
  return (
    <div className='List'>
      {data?.map(item=>(
        <Card item={item} key={item.id} />
      ))}
    </div>
  )
}

export default List
