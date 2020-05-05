import React ,{useState} from 'react'
import '../../../CSS/AccessUnit/accessories.css'

const Accessories = ({accessoriesTitle}) => {
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
                    <p className="result-title">{option.toUpperCase()}</p>
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

            case "Assignments":return accessoriesDropDown(["Maths","Science","English"])
                
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
