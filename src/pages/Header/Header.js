import React from 'react';
import { Link } from 'react-router-dom';
import'./Header.css'
import navlogo from '../../Images/icon/logo-footer-img-1-300x78.png'
import useAuth from '../../hooks/useAuth';
const Header = () => {
    const {user, logOut} = useAuth();
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
                <span style={{color:"white"}}>{user.displayName} </span>
               { 
               user.email ?
               <button onClick={logOut}>Log Out</button>
               :
               <Link to ="login">LogIn</Link>}
            </div>
        </div>
        </>
    );
};

export default Header;