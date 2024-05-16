import React from 'react'
import introimage from '../../images/introimage.png'
import './Intro.css'
import Navbar from './Navbar'

const Intro = () => {
  return (
    <div className='intro-page'> 
      <div className='introduction'>
        <div className='introduction-text-box'>
          <div className='introduction-text-greet'>WELCOME</div>
          <div className='introduction-text-heading'>Lorem ipsum dolor sit<br />
            amet consectetur </div>
          <div className='introduction-text-subtext'>Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Suscipit nemo hic quos, ab, dolor aperiam nobis
            cum est eos error ipsum, voluptate culpa nesciunt
            delectus iste?</div>
          <button className='explore-btn'>Explore</button>
        </div>
        <img src={introimage} className='introimage' alt=''></img>
      </div>
    </div>
  )
}

export default Intro