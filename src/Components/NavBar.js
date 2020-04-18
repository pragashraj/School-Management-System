import React from 'react'
import '../CSS/Nav/navBar.css'
import user from '../assets/users.png'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const NavBar=()=> {
    return (
        <div className="nav-bar">
           <img src={logo} alt="logo" className="logo-image"/>
           <div className="nav-options">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="#"  className="nav-link">SAU</Link>
                <Link to="#"  className="nav-link">TAU</Link>
                <Link to="#"  className="nav-link">About Us</Link>
                <Link to="#"  className="nav-link">Contact Us</Link>
                <Link to="/signin"  className="nav-link">SignIn</Link>
                <img src={user} alt="log-out" className="logout-image"/>
           </div>
           
        </div>
    )
}

export default NavBar