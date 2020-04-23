import React from 'react'
import '../CSS/Nav/navBar.css'
import {Link} from 'react-router-dom'

import user from '../assets/users.png'
import logo from '../assets/logo.png'
import reorder from '../assets/reorder.png'

import {connect} from 'react-redux'

const NavBar=({info})=> {  
    return (
        <div className="nav-bar">
                {
                    info.type==="ad" ? (
                        <div className="reorder-image">
                            <img src={reorder} alt="admin-Dash-board"/>
                        </div>
                    ):null
                }
               
            
                <img src={logo} alt="logo" className="logo-image"/>

            <div className="nav-options">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="#"  className="nav-link">About Us</Link>

                    {
                        info.type==="st" ? (<Link to="#"  className="nav-link">SAU</Link>):null
                    }

                    {
                        info.type==="th" ? (<Link to="#"  className="nav-link">TAU</Link>):null
                    }

                    
                       
                    {
                        info.type  ? (<img src={user} alt="log-out" className="logout-image"/>)
                             :(<Link to="/signin"  className="nav-link">Sign-In</Link>)
                    }
                    
                    
            </div>
           
        </div>
    )
}

const mapStateToProps=({user:{info}})=>{
    return{
        info
    }
}
export default connect(mapStateToProps)(NavBar)
