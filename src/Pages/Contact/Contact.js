import React from 'react'
import './Contact.css'
import map from '../../images/map.png'

const Contact = () => {
    return (
        <div className='contact-us'>
            <div className='text-heading'>Contact Us</div>
            <div className='text-subtext'>Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.</div>
            <div className='contact-details'>
                <form>
                    <label>Name</label>
                    <input type='text'></input>
                    <label>Email</label>
                    <input type='email'></input>
                    <label>Message</label>
                    <textarea cols={4} rows={3}></textarea>
                    <input type='submit'className='submit-btn'></input>
                </form>
                <img src={map} alt=''></img>
            </div>
        </div>
    )
}

export default Contact