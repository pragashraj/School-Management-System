import React from 'react'
import '../CSS/Nav/navBar.css'
import {Link} from 'react-router-dom'

import user from '../assets/users.png'
import logo from '../assets/logo.png'
import reorder from '../assets/reorder.png'

import {connect} from 'react-redux'
import {signOut} from './Actions/userAction'

import {setdashBoard} from './Actions/dashBoardAction'

const NavBar=({info,signOut,setdashBoard})=> {  
    return (
        <div className="nav-bar">
                {
                    info==="ad" ? (
                        <div className="reorder-image">
                            <img src={reorder} alt="admin-Dash-board"/>
                        </div>
                    ):(  <div className="reorder-image">
                            <img src={reorder} alt="admin-Dash-board" onClick={
                                ()=>{
                                    setdashBoard()
                                }
                            }/>
                         </div>)
                }

                <img src={logo} alt="logo" className="logo-image"/>

            <div className="nav-options">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about"  className="nav-link">About Us</Link>

                    {
                        info==="st" ? (<Link to="#"  className="nav-link">SAU</Link>):null
                    }

                    {
                        info==="th" ? (<Link to="#"  className="nav-link">TAU</Link>):null
                    }

                       
                    {
                        info==="ns"  ? (<Link to="/signin"  className="nav-link" >Sign-In</Link>)
                                     :(<img src={user} alt="log-out" className="logout-image" onClick={()=>signOut()}/>)
                    }
                    
                   
            </div>

           
           
        </div>
    )
}

const mapStateToProps=({user:{info}})=>{
    return{
        info,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        signOut:()=>dispatch(signOut()),
        setdashBoard:()=>dispatch(setdashBoard())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar)
