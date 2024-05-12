import React from 'react'
import './Footer.css'
import social from '../../images/social.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img src={social}></img>
        <div>© Start, 2022. All rights reserved.</div>
    </div>
  )
}

export default Footer