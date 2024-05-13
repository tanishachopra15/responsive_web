import React from 'react'
import './Team.css'
import ceo from '../../images/ceo.png'
import cto from '../../images/cto.png'
import designer from '../../images/designer.png'
import developer from '../../images/devloper.png'

const Team = () => {
    return (
        <div className='teams'>
            <div className='team-text-box'>
                <div className='team-heading'>TEAM</div>
                <div className='team-text-heading'>Our Talents</div>
                <div className='team-text-subtext'>Lorem ipsum, dolor sit amet consectetur
                    <br /> Suscipit nemo hic quos, ab,</div>
            </div>
            <div className='team-member'>
                <div className='member-details'>
                    <img src={ceo} alt=''></img>
                    <div className='member-name'>Peg Legge
                    </div>
                    <div className='member-position'>CEO</div>
                </div>
                <div className='member-details'>
                    <img src={cto} alt=''></img>
                    <div className='member-name'>Richard Guerra
                    </div>
                    <div className='member-position'>CTO</div>
                </div>
                <div className='member-details'>
                    <img src={designer} alt=''></img>
                    <div className='member-name'>Alexandra Stolz
                    </div>
                    <div className='member-position'>DESIGNER</div>
                </div>
                <div className='member-details'>
                    <img src={developer} alt=''></img>
                    <div className='member-name'>Janet Bray
                    </div>
                    <div className='member-position'>DEVELOPER</div>
                </div>
            </div>
            <button className='learn-btn'>View Team</button>
        </div>
    )
}

export default Team