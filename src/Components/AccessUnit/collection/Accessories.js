import React ,{useState} from 'react'
import '../../../CSS/AccessUnit/accessories.css'

import {connect} from 'react-redux'

const Accessories = ({accessoriesTitle,info}) => {
    const [option,setOption]=useState('')

    const handleChange=(e)=>{
        setOption(e.target.value)
    }

    const dropdownOptions=(options)=>{
        return(
            options.map((value,index)=>{
               return <option value={value} key={index}>{value}</option>
            })
        )
    }
    const accessoriesDropDown=(options)=>{
        return(
            <div className="result-container">
                <div className="topic-text-con">
                    <p className="topic-text">Select your Topic </p>
                </div>
                <select value={option} className="select-topics" onChange={(e)=>handleChange(e)}>
                   {
                       dropdownOptions(options)
                   }
                </select>
                <div className="result-block">
                    <p className="result-title">{option ? option.toUpperCase(): options[0]}</p>
                    <fieldset className="result-field-set">
                    </fieldset>
                </div>
            </div>
        )
    }
    const renderAccessories=()=>{
        switch(accessoriesTitle){
            case "Time Table": return accessoriesDropDown(["Term Time Table","Exam Time Table"]) 
                
            case "Results": return accessoriesDropDown(["Term-Exam","Assignment"])

            case "Assignments":return info ==="st" ? accessoriesDropDown(["Maths","Science","English"]) :accessoriesDropDown(["Gr13","Gr12","Gr11"])
                
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


const mapStateToProps=({user:{info}})=>{
    return{
        info
    }
}

export default connect(mapStateToProps) (Accessories)
