import React from "react";
import './navbar.css';
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.jpg';
import { Link } from 'react-scroll';

const navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offdet={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offdet={-100} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offdet={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
          </div>
            
        </nav>
    )
            }

            


export default navbar;