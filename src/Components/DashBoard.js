import React from 'react'
import '../CSS/Nav/dashBoard.css'
import admin from '../assets/admin.png'
import st from '../assets/st.png'
import th from '../assets/th.png'
import Card from './Card'

const DashBoard=()=> {
    return (
        <div className="dash-board">
            <div className="header">
                <div className="image-container">
                    <img src={admin} alt="admin" className="image" />
                </div>
                <h3>DashBoard</h3>
            </div>

            <div className="block-container">
                <Card image={st} profession="Students" total="2408"/>
            </div>
            <div className="block-container">
                <Card image={th} profession="Teachers" total="0056"/>
            </div>

            <div className="link-container">
                <div className="link">
                    <p className="link-name">School Mangement</p>
                </div>
                <div className="link">
                    <p className="link-name">Employees Control</p>
                </div>
                <div className="link">
                    <p className="link-name" style={{marginLeft:'24%'}}>Administrative Control</p>
                </div>
            </div>
        </div>
    )
}
export default DashBoard