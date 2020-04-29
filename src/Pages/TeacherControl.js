import React from 'react'
import ControlCard from '../Components/ControlCard'
import teacher from '../assets/teacher.png'
import {connect} from 'react-redux'

const TeacherControl=({totalTeachers})=>{
    return (
        <div className="controlBlock">
            <ControlCard image={teacher} total={totalTeachers}/>
        </div>
    )
}



const mapStateToProps=({dashBoard:{totalTeachers}})=>{
    return{
        totalTeachers
    }
}
export default connect(mapStateToProps)(TeacherControl)