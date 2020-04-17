import React from 'react'
import '../CSS/root/RootPage.css'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'

const RootPage=()=> {
    return (
        <div className="root-page">
            <Login/>
            <SignUp/>
        </div>
    )
}

export default RootPage