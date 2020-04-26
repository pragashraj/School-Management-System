import React from 'react'
import '../CSS/control/ProControl.css'

const ControlCard=({image,total})=> {
    return (
        <div className="controlCard">
            <div className="pro-block">
                <div className="pro-block-image-container">
                     <img src={image} alt="stu" className="pro-block-image"/>
                </div>
                
                <div className="pro-total-conatiner">
                    <p className="pro-total">{total}</p>
                </div>
                
                <div className="pro-btn-container">
                    <button title="Add" className="pro-btn"/>
                    <button title="Update" className="pro-btn"/>
                    <button title="Delete" className="pro-btn"/>
                </div>
            </div>
        </div>
    )
}
export default ControlCard