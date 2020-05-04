import React, { Component } from 'react'
import SideBar from '../Components/AccessUnit/SideBar'
import CollectionHolder from '../Components/AccessUnit/CollectionHolder'

class StudentAccessUnit extends Component {
    state={
        titles:["Subjects","Accessories","Upcoming_Events"]
    }
    render() {
        return (
            <div className="student-access-unit" >
                <SideBar titles={this.state.titles}/>
                <CollectionHolder/> 
            </div>          
        )
    }
}

export default StudentAccessUnit