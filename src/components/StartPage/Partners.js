import React from 'react'
import './Partners.css'
import goggle from '../../images/goggle.png'
import microsoft from '../../images/microsoft.png'
import airbnb from '../../images/airbnb.png'
import facebook from '../../images/facebook.png'
import spotify from '../../images/spotify.png'

const Partners = () => {
  return (
    <div className='partners'>
      <div className='partners-text-box'>
        <div className='partners-heading'>PARTNERS</div>
        <div className='partners-text-heading'>Lorem Ipsum Dolor</div>
        <div className='partners-text-subtext'>Lorem ipsum, dolor sit amet consectetur
          <br/>adipisicing elit.</div>
      </div>
      <div className='partners-logo'>
        <img src={goggle} alt=''></img>
        <img src={microsoft} alt=''></img>
        <img src={airbnb} alt=''></img>
        <img src={facebook} alt=''></img>
        <img src={spotify} alt=''></img>
      </div>
      <button className='learn-btn'>Learn More</button>
    </div>
  )
}

export default Partners