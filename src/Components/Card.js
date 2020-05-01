import React from 'react'
import '../CSS/Nav/dashBoard.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {setdashBoard} from './Actions/dashBoardAction'

const Card=({image,profession,totalStudents,totalTeachers,history,setdashBoard})=> {
    return (
        <div className="card" onClick={()=>{
            profession==="Students" ? history.push('/studentControl') : history.push('/teacherControl')       
            setdashBoard()
        }}>
            <h4>{profession}</h4>
            <img src={image} alt="block" className="block"/>
            {
                 profession==="Students" ? <p className="total">{totalStudents}</p>:<p className="total">{totalTeachers}</p>
            }
        </div>
    )
}

const mapStateToProps=({dashBoard:{totalStudents,totalTeachers}})=>{
    return{
        totalStudents,
        totalTeachers
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        setdashBoard:()=>dispatch(setdashBoard())
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Card))