import React from 'react'
import '../CSS/Nav/navBar.css'
import {Link,withRouter} from 'react-router-dom'

import user from '../assets/users.png'
import logo from '../assets/logo.png'
import reorder from '../assets/reorder.png'
import profile from '.././assets/profile.png'

import {connect} from 'react-redux'
import {signOut} from './Actions/userAction'

import {setdashBoard} from './Actions/dashBoardAction'
import {setAccView} from './Actions/AccAction'

const NavBar=({info,signOut,setdashBoard,setAccView,history})=> {  

   const handleAccView=()=>{
        return(
            <div className="reorder-image">
                <img src={profile} alt="admin-Dash-board" onClick={
                    ()=>{
                        setAccView()
                    }
                } />
            </div>
        )
    }

    const handleDashBoard=()=>{
        return(
            <div className="reorder-image">
                <img src={reorder} alt="admin-Dash-board" onClick={
                    ()=>{
                        setdashBoard()
                    }
                } />
            </div>
        )
    }
    return (
        <div className="nav-bar">
                {
                    info==="ad" ? (
                       handleDashBoard()
                    ):null
                }

                {
                    info==='st' ? (
                        handleAccView()
                    ): (
                        info==='th' ? handleAccView():handleAccView()
                    )
                }

                <img src={logo} alt="logo" className="logo-image"/>

            <div className="nav-options">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about"  className="nav-link">About Us</Link>

                    {
                        info==="st" ? (<Link to="/sau"  className="nav-link">SAU</Link>):null
                    }

                    {
                        info==="th" ? (<Link to="/tau"  className="nav-link">TAU</Link>):null
                    }

                       
                    {
                        info==="ns"  ? (<Link to="/signin"  className="nav-link" >Sign-In</Link>)
                                     :(<img src={user} alt="log-out" className="logout-image" onClick={
                                                ()=>{
                                                    signOut()
                                                    history.push('/')
                                                } 
                                            }/>
                                      )
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
        setdashBoard:()=>dispatch(setdashBoard()),
        setAccView:()=>dispatch(setAccView())
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar))
