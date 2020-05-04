import React ,{useState} from 'react'
import '../../../CSS/AccessUnit/accessories.css'
import timetable from '../../../assets/timetable.jpg'

const Accessories = ({accessoriesTitle}) => {
    const [option,setOption]=useState('term-exam')

    const handleChange=(e)=>{
        setOption(e.target.value)
    }

    // const accessories=()=>{

    // }
    const renderAccessories=()=>{
        switch(accessoriesTitle){
            case "Time Table": 
                return(
                    <div className="time-table-continer">
                        <img src={timetable} alt="time table" className="time-table-img"/>
                    </div>
                )
            case "Results":
                return(
                    <div className="result-container">
                        <div className="topic-text-con">
                            <p className="topic-text">Select your Topic </p>
                        </div>
                        <select value={option} className="select-topics" onChange={(e)=>handleChange(e)}>
                            <option value="term-exam" >Term-Exam</option>
                            <option value="assignments" >Assignments</option>
                        </select>
                        <div className="result-block">
                            <p className="result-title">{option.toUpperCase()}</p>
                            <fieldset className="result-field-set">

                            </fieldset>
                        </div>
                    </div>
                )
            default :return null 
        }
    }
    return (
        <div className="accessories">
             {
                 renderAccessories()
             }
        </div>
    )
}

export default Accessories
