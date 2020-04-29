import React from 'react'
import student from '../assets/student.png'
import ControlCard from '../Components/ControlCard'
import {connect} from 'react-redux'

const StudentControl=({totalStudents})=> {
    return (
        <div className="controlBlock">
            <ControlCard image={student} total={totalStudents} pro="student"/>
        </div>
    )
}


const mapStateToProps=({dashBoard:{totalStudents}})=>{
    return{
        totalStudents
    }
}
export default connect(mapStateToProps)(StudentControl)