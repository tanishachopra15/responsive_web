import React from 'react'
import './Portfolio.css'
import Navbar from '../../components/StartPage/Navbar'
import Footer from '../../components/StartPage/Footer'
import portfolio1 from '../../images/portfoli-1.png'
import portfolio2 from '../../images/portfolio-2.png'
import portfolio3 from '../../images/portfolio (1).png'
import portfolio4 from '../../images/portfolio (2).png'
import portfolio5 from '../../images/portfolio (3).png'
import portfolio6 from '../../images/portfolio-6.png'
import portfolio7 from '../../images/portfolio (4).png'
import portfolio8 from '../../images/portfolio (5).png'

const Portfolio = () => {
    return (
        <div>
            <div className='portfolio'>
                <div className='portfolio-text-box'>
                    <div className='works-heading'>WORKS</div>
                    <div className='portfolio-heading'>Portfolio</div>
                    <div className='portfolio-subtext'>Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit.</div>
                </div>
                <div className='portfolio-grid'>
                    <img src={portfolio1} alt=''></img>
                    <img src={portfolio2} alt=''></img>
                    <img src={portfolio3} alt=''></img>
                    <img src={portfolio4} alt=''></img>
                    <img src={portfolio5} alt=''></img>
                    <img src={portfolio6} alt=''></img>
                    <img src={portfolio7} alt=''></img>
                    <img src={portfolio8} alt=''></img>
                </div>
                <button className='learn-btn'>Learn More</button>
            </div>
        </div>
    )
}

export default Portfolio