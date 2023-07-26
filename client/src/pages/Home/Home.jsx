import React from 'react'
import Slider from '../../components/Carousel/Carousel'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import './Home.scss'
const Home = () => {
  return (
    <div className='Home'>
      <Slider />
      <FeaturedProducts type="Featured"/>
      <FeaturedProducts type="Trending"/>
    </div>
  )
}

export default Home
