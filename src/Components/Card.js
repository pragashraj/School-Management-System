import React from 'react'
import '../CSS/Nav/dashBoard.css'

const Card=({image,profession,total})=> {
    return (
        <div className="card" onClick={()=>console.log("clicked")}>
            <h4>{profession}</h4>
            <img src={image} alt="block" className="block"/>
            <p className="total">{total}</p>
        </div>
    )
}

export default Card