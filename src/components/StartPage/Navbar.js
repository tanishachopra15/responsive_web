import React from 'react'
import startlogo from '../../images/start.png'
import menu from '../../images/menu.png'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    function showMenu() {
        const menu = document.querySelector('.navbar-options');
        menu.classList.toggle('show');
    }

    return (
        <div className='navbar'>
            <div className='navbar-logo'><img src={startlogo} alt=''/></div>
            <div className='navbar-options'>
                <NavLink className='navbar-options-item' to='/'><div>Home</div></NavLink>
                <NavLink className='navbar-options-item' to='/portfolio'><div>Portfolio</div></NavLink>
                <NavLink className='navbar-options-item' to='/services'><div>Services</div></NavLink>
                <NavLink  className='navbar-options-item'to='/contact'><div>Contact</div></NavLink>
            </div>
            <div className='menu-icon-wrapper' onClick={showMenu}>
                <img src={menu} className='menu-icon' alt=''></img>
            </div>
        </div>
    )
}

export default Navbar