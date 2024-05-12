import React from 'react'
import './Features.css'
import feature1 from '../../images/feature1.png'
import feature2 from '../../images/feature2.png'

const Features = () => {
    return (
        <div className='features'>
            <div className='features-box'>
                <img src={feature1} alt=''></img>
                <div className='features-text-box'>
                    <div className='features-text-heading'>Lorem ipsum dolor sit amet consectetur </div>
                    <div className='features-text-subtext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                        Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos<br />
                        error ipsum, voluptate culpa nesciunt delectus iste?</div>
                    <button className='learn-btn'>Learn More</button>
                </div>
            </div>
            <div className='features-box'>
                <div className='features-text-box'>
                    <div className='features-text-heading'>Lorem ipsum dolor sit amet consectetur </div>
                    <div className='features-text-subtext'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
                        Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos<br />
                        error ipsum, voluptate culpa nesciunt delectus iste?</div>
                    <button className='learn-btn'>Learn More</button>
                </div>
                <img src={feature2} alt=''></img>
            </div>
        </div>
    )
}

export default Features