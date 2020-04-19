import React from 'react'
import '../CSS/Nav/navBar.css'
import {Link} from 'react-router-dom'

import user from '../assets/users.png'
import logo from '../assets/logo.png'
import reorder from '../assets/reorder.png'

import {connect} from 'react-redux'

const NavBar=({currentUser})=> {  
    return (
        <div className="nav-bar">

                <div className="reorder-image">
                    <img src={reorder} alt="admin-Dash-board"/>
                </div>
            
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

const mapStateToProps=({user:{currentUser}})=>{
    return{
        currentUser
    }
}
export default connect(mapStateToProps)(NavBar)