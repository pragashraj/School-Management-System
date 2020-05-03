import React from 'react'
import '../../CSS/AccessUnit/sideBar.css'
import Content from './Content'

import {connect} from 'react-redux'

const BarContent=({barTitle,student,common,teacher})=> {

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
                    common.Accessories.map((value,index)=>{
                            return <Content key={index} contentTitle={value}/>
                    })           
                )
            
            case "Upcoming_Events":
                return(
                    common.Upcoming_Events.map((value,index)=>{
                            return <Content key={index} contentTitle={value}/>
                    })           
                )
            
            case "Annual_Works":
                return(
                    teacher.Annual_Works.map((value,index)=>{
                        return <Content key={index} contentTitle={value}/>
                    })
                )

            case "Grades":
                return(
                    teacher.Grades.map((value,index)=>{
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

const mapStateToProps=({content:{student,common,teacher}})=>{
    return{
        student,
        common,
        teacher
    }
}


export default connect(mapStateToProps) (BarContent)