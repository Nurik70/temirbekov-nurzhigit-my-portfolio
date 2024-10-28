import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'
import myPhoto from '../images/my-foto-home.jpg';


const Navbar = () => {
    return (
        <nav>
            <div className='photo-and-portfolio'>
            <img src={myPhoto} className='img-my-foto-nav' alt='Temirbekov Nurzhigit' />
            <h1>Portfolio</h1>

            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/achivement">Achivement</Link>
                <Link to="/contacts">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
