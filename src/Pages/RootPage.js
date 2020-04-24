import React from 'react'
import '../CSS/root/RootPage.css'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'

const RootPage=(props)=> {

    const handleRoute=()=>{
        props.history.push('/')
    }
    return (
        <div className="root-page">
            <Login handleRoute={handleRoute}/>
            <SignUp handleRoute={handleRoute}/>
        </div>
    )
}

export default RootPage