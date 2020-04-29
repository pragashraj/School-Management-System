import React from 'react'
import '../../CSS/control/detailView.css'

const Detail=({image,details})=> {
    return (
        <div className="detail">
            <div className="detail-block-img">
                <img src={image} alt="student" className="detail-img"/>
                <p className="detail-name">{details.username.toUpperCase()}</p>
            </div>
      
            <div className="detail-block-infos">
                <pre className="detail-infos">Email    : {details.mail}</pre>
                <pre className="detail-infos">UserName : {details.username}</pre>
            </div>
        </div>
    )
}

export default Detail