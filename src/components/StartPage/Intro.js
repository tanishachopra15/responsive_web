import React from 'react'
import startlogo from '../../images/startlogo.png'
import introimage from '../../images/introimage.png'
import './Intro.css'

const Intro = () => {
  return (
    <div className='intro-page'>
      <div className='navbar'>
        <nav className='navbar-logo'><img src={startlogo} alt=''></img>Start</nav>
        <div className='navbar-options'>
          <nav>Home</nav>
          <nav>Portfolio</nav>
          <nav>Services</nav>
          <nav>Contact</nav>
        </div>
      </div>
      <div className='introduction'>
        <div className='introduction-text-box'>
          <div className='introduction-text-greet'>WELCOME</div>
          <div className='introduction-text-heading'>Lorem ipsum dolor sit<br />
            amet consectetur </div>
          <div className='introduction-text-subtext'>Lorem ipsum, dolor sit amet consectetur adipisicing<br />
            elit. Suscipit nemo hic quos, ab, dolor aperiam nobis<br />
            cum est eos error ipsum, voluptate culpa nesciunt<br />
            delectus iste?</div>
          <button className='explore-btn'>Explore</button>
        </div>
        <img src={introimage} alt=''></img>
      </div>
    </div>
  )
}

export default Intro