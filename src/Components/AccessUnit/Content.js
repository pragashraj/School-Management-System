import React from 'react'
import '../../CSS/AccessUnit/sideBar.css'

const Content = ({contentTitle}) => {
    return (
        <div className="content">
            <div className="content-value">
                <button className="content-btn" onClick={()=>console.log("subject btn")}>
                   {contentTitle}
                </button>
            </div>
        </div>
    )
}

export default Content