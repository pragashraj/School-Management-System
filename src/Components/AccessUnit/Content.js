import React from 'react'
import '../../CSS/AccessUnit/sideBar.css'
import {connect} from 'react-redux'
import {setCollectionHolder,setContentType} from '../Actions/contentAction'

const Content = ({contentTitle,setCollectionHolder}) => {
    const handleBtnClick=()=>{
        setCollectionHolder()
        setContentType(contentTitle)
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
        setCollectionHolder:()=>dispatch(setCollectionHolder()),
        setContentType:(title)=>dispatch(setContentType(title))
    }
}
export default connect(null,mapDispatchToProps)(Content)