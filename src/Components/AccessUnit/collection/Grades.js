import React from 'react'
import '../../../CSS/AccessUnit/grades.css'

const Grades = () => {
    return (
        <div className="grades">
            <div className="content-text-con">
                 <p className="content-text">Subject-Contents</p>
            </div>
            <div className="content-field-con">
                <fieldset className="content-field-set">
                </fieldset>
            </div>

            <div className="grd-btn-container">
                <p className="grd-btn-text">Lessons</p>
            </div>
            <div className="grd-btn-container">
                <p className="grd-btn-text">Home Works</p>
            </div>
        </div>
    )
}

export default Grades
