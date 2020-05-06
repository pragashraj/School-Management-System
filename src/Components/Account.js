import React from 'react'
import userAcc from '.././assets/userAcc.png'
import '../CSS/AccessUnit/account.css'
import st from '../assets/st.png'
import th from '../assets/th.png'

import {connect} from 'react-redux'
import {setContent} from './Actions/contentAction'
import {setAccView} from './Actions/AccAction'

const Account=({info,setContent,setAccView,userDetails})=> {

    const handleBtnPress=(type)=>{
        setContent({type, contentTitle:''})
        setAccView()
    }

    return (
        <div className="account">
            <div className="aac-header">
                <fieldset className="acc-field">
                    <div className="acc-image-container">
                        <img src={userAcc} alt="user-account" className="acc-image" />  
                    </div>
                    <p className="acc-title">My Account</p> 
                </fieldset>
                
            </div>
           

            <div className="acc-block">
                <div className="acc-block-img-container">
                    {
                       info==='st' ? <img src={st} alt="st" className="acc-block-img"/> :<img src={th} alt="st" className="acc-block-img"/>
                    }
                </div>
                <pre className="acc-block-info">Username : {userDetails.username}</pre>
                <pre className="acc-block-info">Email    : {userDetails.mail}</pre>
                <pre className="acc-block-info">Password : {userDetails.password} </pre>
                <pre className="acc-block-info">House    : Green </pre>

                <div className="acc-btn">
                    <button className="acc-btn-title" onClick={()=>handleBtnPress("Account_Update")} >Update</button>
                </div>
                <div className="acc-btn">
                    <button className="acc-btn-title" onClick={()=>console.log("click")} >Add Info</button>
                </div>
                {
                    console.log({userDetails})
                }
            </div>
        </div>
    )
}


const mapStateToProps=({user:{info,userDetails}})=>{
    return{
        info,
        userDetails
    }
}

const mapDispatchtoProps=dispatch=>{
    return{
        setContent:contents=>dispatch(setContent(contents)),
        setAccView:()=>dispatch(setAccView())
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Account)