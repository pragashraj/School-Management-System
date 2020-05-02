import React, { Component } from 'react'
import SideBar from '../Components/AccessUnit/SideBar'

class TeacherAccessUnit extends Component {
    state={
        titles:["Grades","Accessories","Upcoming Events","Annual Works"]
    }
    render() {
        return (
            <div className="teacher-access-unit">
                <SideBar titles={this.state.titles}/> 
            </div>
        )
    }
}


export default TeacherAccessUnit