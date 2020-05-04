import React from 'react'
import '../../CSS/AccessUnit/sideBar.css'
import {connect} from 'react-redux'
import {setContent} from '../Actions/contentAction'

const Content = ({type,contentTitle,setContent}) => {
    const handleBtnClick=()=>{
        setContent({type,contentTitle})
    }
    return (
        <div className="content">
            <div className="content-value">
                <button className="content-btn" onClick={()=>handleBtnClick()}>
                   {contentTitle}
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps=dispatch=>{
    return{
        setContent:contents=>dispatch(setContent(contents))
    }
}
export default connect(null,mapDispatchToProps)(Content)