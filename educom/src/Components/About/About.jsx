import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
                <img src={about_img} alt='' className='about-img' ></img>
               
                <img src={play_icon} alt='' className='play-icon' onClick={() => {setPlayState(true)}}></img>

                
                
        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>This institute stands out as a beacon of excellence due to its unwavering commitment to fostering academic and personal growth. With a distinguished faculty comprising leading experts in various fields, students receive top-tier education and mentorship. The state-of-the-art facilities provide an ideal environment for learning and research, ensuring that students have access to the latest tools and technologies.</p>
            <p>This institute stands out as a beacon of excellence due to its unwavering commitment to fostering academic and personal growth. With a distinguished faculty comprising leading experts in various fields, students receive top-tier education and mentorship. The state-of-the-art facilities provide an ideal environment for learning and research, ensuring that students have access to the latest tools and technologies.</p>
            <p>This institute stands out as a beacon of excellence due to its unwavering commitment to fostering academic and personal growth. With a distinguished faculty comprising leading experts in various fields, students receive top-tier education and mentorship. The state-of-the-art facilities provide an ideal environment for learning and research, ensuring that students have access to the latest tools and technologies.</p>

            

        </div>
    </div>
  )
}

export default About