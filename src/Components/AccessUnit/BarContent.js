import React from 'react'
import '../../CSS/AccessUnit/sideBar.css'
import Content from './Content'

import {connect} from 'react-redux'

const BarContent=({barTitle,info,student})=> {

    const renderContent=()=>{
        switch(barTitle){
            case "Subjects":
                return(
                    student.Subjects.map((value,index)=>{
                        return <Content key={index} contentTitle={value}/>
                    })           
                )
            
            case "Accessories":
                return(
                    student.Accessories.map((value,index)=>{
                            return <Content key={index} contentTitle={value}/>
                    })           
                )
            
            case "Upcoming_Events":
                return(
                    student.Upcoming_Events.map((value,index)=>{
                            return <Content key={index} contentTitle={value}/>
                    })           
                )

            default : return null
        }
    }

    return (
        <div className="Bar-content">
            {
                renderContent()
            }
        </div>
    )
}

const mapStateToProps=({content:{student},user:{info}})=>{
    return{
        student,
        info
    }
}


export default connect(mapStateToProps) (BarContent)