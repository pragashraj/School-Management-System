import React, { Component } from 'react'
import SideBar from '../Components/AccessUnit/SideBar'

class StudentAccessUnit extends Component {
    state={
        titles:["Subjects","Accessories","Upcoming_Events"]
    }
    render() {
        return (
            <div className="student-access-unit" >
                <SideBar titles={this.state.titles}/>
            </div>
        )
    }
}


export default StudentAccessUnit