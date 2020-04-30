import React from 'react'
import userAcc from '.././assets/userAcc.png'
import '../CSS/AccessUnit/account.css'

const Account=()=> {
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
                <pre className="acc-block-info">Username : Test01</pre>
                <pre className="acc-block-info">Email    : Test01@st.com</pre>
                <pre className="acc-block-info">Password : 123456 </pre>
                <pre className="acc-block-info">House    : Green </pre>

                <div className="acc-link">
                    <p className="acc-link-title">Link 01 For Student</p>
                </div>

                <div className="acc-link">
                    <p className="acc-link-title">Link 01 For Student</p>
                </div>
            </div>
        </div>
    )
}


export default Account