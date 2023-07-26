import React from 'react'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import './Home.scss'
import Contact from '../../components/Contact/Contact'
const Home = () => {
  return (
    <div className='Home'>
      <FeaturedProducts type="Featured"/>
      <FeaturedProducts type="Trending"/>
      <Contact />
    </div>
  )
}

export default Home
