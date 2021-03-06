import React from 'react'
import '../../../CSS/AccessUnit/subjects.css'
import maths from '../../../assets/maths.png'
import science from '../../../assets/science.png'
import english from '../../../assets/english.png'

const Subjects = ({subjectTitle}) => {

    const renderSubjects=()=>{
        switch(subjectTitle){
            case "Maths":return subjects(maths)
            case "Science":return subjects(science)
            case "English" :return subjects(english)
            default :return null
        }
    }
    
    const subjects=(Simage)=>{
        return(
            <div className="subjects">
                <div className="sub-image-container">
                    <img src={Simage} alt="maths" className="sub-image"/> 
                </div>
                <div className="sub-intro-container">
                    <p className="sub-intro">Mathematicians seek and use patterns to formulate new conjectures;
                    they resolve the truth or falsity of conjectures by mathematical proof. 
                    When mathematical structures are good models of real phenomena, mathematical 
                    reasoning can be used to provide insight or predictions about nature. 
                    Through the use of abstraction and logic, mathematics developed from counting, calculation, measurement, 
                    and the systematic study of the shapes and motions of physical objects. 
                    Practical mathematics has been a human activity from as far back as written records exist. 
                    </p>
                </div>
                <div className="sub-btn-container">
                    <p className="sub-btn-text">Lessons</p>
                </div>
                <div className="sub-btn-container">
                    <p className="sub-btn-text" style={{marginLeft:'25%'}}>Home Works</p>
                </div>
        </div>
        )
    }


    return (
       <div>
            {
                 renderSubjects()
            }
       </div>
    )
}

export default Subjects