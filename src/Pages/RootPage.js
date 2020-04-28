import React from 'react'
import '../CSS/root/RootPage.css'
import AddAccount from '../Components/ControlForms/AddAccount'


const RootPage=(props)=> {

    const handleRoute=()=>{
        props.history.push('/')
    }
    return (
        <div className="root-page">
            {
                //<Login handleRoute={handleRoute}/>
                //<SignUp handleRoute={handleRoute}/>
            }
            <div className="login-component">
                <AddAccount title="Login" addAcc={false}/>
            </div>

            <div className="sign-up-component">
                <AddAccount title="Sign Up" addAcc={true}/>
            </div>
            
            
        </div>
    )
}

export default RootPage