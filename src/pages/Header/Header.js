import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css'
import navlogo from '../../Images/icon/logo-footer-img-1-300x78.png'
const Header = () => {
    return (
        <>
        <div className="header">
            <div>
                <img width="50%" src={navlogo} alt="" />
            </div>
            <div pt-3>
                <Link to="/home">Home</Link>
                <Link to="/Services">Services</Link>
                <Link to="/doctors">Doctors</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
        </>
    );
};

export default Header;