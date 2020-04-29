import React from 'react'
import '../CSS/root/RootPage.css'
import AddAccount from '../Components/ControlForms/AddAccount'


const RootPage=(props)=> {

    const handleRoute=()=>{
        props.history.push('/')
    }
    return (
        <div className="root-page">
            <div className="login-component">
                <AddAccount title="Login" addAcc={false} handleRoute={handleRoute}/>
            </div>

            <div className="sign-up-component">
                <AddAccount title="Sign Up" addAcc={true} handleRoute={handleRoute}/>
            </div>
            
            
        </div>
    )
}

export default RootPage