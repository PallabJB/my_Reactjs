import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' >
        <div className="hero-text">
            <h1>We Ensure the Best Education For You </h1>
            <p>This institute stands out as a beacon of excellence due to its unwavering commitment to fostering academic and personal growth. With a distinguished faculty comprising leading experts in various fields, students receive top-tier education and mentorship. The state-of-the-art facilities provide an ideal environment for learning and research, ensuring that students have access to the latest tools and technologies.</p>
            <button className='btn' >Explore more<img src={dark_arrow} alt='' ></img></button>
        </div>
    </div>
  )
}

export default Hero