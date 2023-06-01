import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
        <div className='banner-container'>
            <div className='banner'>
                <h2>It's time for some cocktails</h2>
                <Link to='/products'></Link>
            </div>
        </div>
    </div>
  )
}

export default Home