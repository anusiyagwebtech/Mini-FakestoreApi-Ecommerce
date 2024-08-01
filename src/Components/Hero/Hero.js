import React from 'react'
import { Link } from 'react-router-dom';
import heroimg from '../../Assets/Images/heroimg.png';

function Hero() {

  return (
    <div className='hero-container'>
        <div className='hero-content'>
          <div className='content'>
            <p>New Arrivals</p>
            <h2>
                AUTUMN SALE STYLISH <br/>
                <span>WOMEN'S</span>
            
            </h2>
            <div className='hero-anchor'>
            <Link to={'/'}>
                DISCOVER MORE
            </Link>
            </div>
           
            </div>
        </div>
        <div className='hero-img'>
          <img src={heroimg} />
        </div>
    </div>
  )
}

export default Hero;