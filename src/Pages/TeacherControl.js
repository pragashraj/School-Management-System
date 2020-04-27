import React from 'react'
import ControlCard from '../Components/ControlCard'
import teacher from '../assets/teacher.png'

const TeacherControl=()=>{
    return (
        <div className="controlBlock">
            <ControlCard image={teacher} total="0056"/>
        </div>
    )
}

export default  TeacherControl