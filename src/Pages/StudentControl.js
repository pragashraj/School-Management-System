import React from 'react'
import student from '../assets/student.png'
import ControlCard from '../Components/ControlCard'

const StudentControl=()=> {
    return (
        <div className="controlBlock">
            <ControlCard image={student} total="2048"/>
        </div>
    )
}
export default StudentControl