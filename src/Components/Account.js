import React from 'react'
import userAcc from '.././assets/userAcc.png'
import '../CSS/AccessUnit/account.css'
import st from '../assets/st.png'
import th from '../assets/th.png'

import {connect} from 'react-redux'

const Account=({info})=> {
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
                <pre className="acc-block-info">Username : Test01</pre>
                <pre className="acc-block-info">Email    : Test01@st.com</pre>
                <pre className="acc-block-info">Password : 123456 </pre>
                <pre className="acc-block-info">House    : Green </pre>

                <div className="acc-link">
                    <p className="acc-link-title">Link 01 For St/Th</p>
                </div>

                <div className="acc-link">
                    <p className="acc-link-title">Link 01 For St/Th</p>
                </div>

                <div className="acc-btn">
                    <button className="acc-btn-title" onClick={()=>console.log("click")} >Update</button>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps=({user:{info}})=>{
    return{
        info
    }
}

export default connect(mapStateToProps)(Account)