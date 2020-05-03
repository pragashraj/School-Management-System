import React, { Component } from 'react'
import SideBar from '../Components/AccessUnit/SideBar'
import CollectionHolder from '../Components/AccessUnit/CollectionHolder'
import {connect} from 'react-redux'

class StudentAccessUnit extends Component {
    state={
        titles:["Subjects","Accessories","Upcoming_Events"]
    }
    render() {
        return (
            <div className="student-access-unit" >
                <SideBar titles={this.state.titles}/>
                {
                    this.props.collectionHolder ? <CollectionHolder/> : null
                }
            </div>          
        )
    }
}
const mapStateToProps=({content:{collectionHolder}})=>{
    return{
        collectionHolder
    }
}

export default connect(mapStateToProps)(StudentAccessUnit)