import React, { Component } from 'react'
import SideBar from '../Components/AccessUnit/SideBar'
import CollectionHolder from '../Components/AccessUnit/CollectionHolder'

class TeacherAccessUnit extends Component {
    state={
        titles:["Grades","Accessories","Upcoming_Events","Annual_Works"]
    }
    render() {
        return (
            <div className="teacher-access-unit">
                <SideBar titles={this.state.titles}/> 
                <CollectionHolder user="th"/>
            </div>
        )
    }
}


export default TeacherAccessUnit