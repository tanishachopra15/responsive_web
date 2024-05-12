import React from 'react'
import './StartPage.css'
import Intro from '../components/StartPage/Intro'
import Partners from '../components/StartPage/Partners'
import Features from '../components/StartPage/Features'
import Team from '../components/StartPage/Team'
import Footer from '../components/StartPage/Footer'


const StartPage = () => {
  return (
    <div className='start-page'>
        <Intro></Intro>
        <Partners></Partners>
        <Features></Features>
        <Team></Team>
        <Footer></Footer>
    </div>
  )
}

export default StartPage