import React from 'react'
import '../CSS/About/about.css'
import school from '../assets/school.png'

 const About=()=> {
  
    return (
        <div className="about">
            <div className="about-block">
                <div className="about-header">
                    <div className="about-header-image-con">
                        <img src={school} alt="school" className="about-header-image"/>
                    </div>
                    <p className="about-content" style={{color:'black'}}>
                    * We are committed to recognizing the importance of communication and to encouraging dialogue among all constituencies; 
                    to promoting intellectual and social growth and development within the school community; to providing a safe, 
                    supportive setting so that students have the opportunity to explore and to clarify their own beliefs and values, 
                    to take risks, and to think and speak for themselves; and to recognizing and responding to individual 
                    and institutional prejudices, both overt and subtle, based on gender, race, religion, ethnicity, 
                    sexual orientation, socio-economic status, age, and physical and mental ability.
                    </p>
                </div>
                <div className="about-content-body">
                <div className="about-body">
                    <p className="about-title">WE DO</p>
                    <p className="about-content">
                    * Our vision is to prepare and motivate our students for a rapidly changing world by instilling in them critical 
                    thinking skills, a global perspective, and a respect for core values of honesty, loyalty, perseverance, 
                    and compassion. Students will have success for today and be prepared for tomorrow.
                    </p>

                    <p className="about-content">
                    * Our mission is to provide a safe haven where everyone is valued and respected. 
                    All staff members, in partnership with parents and families are fully committed to students’ 
                    college and career readiness. Students are empowered to meet current and future challenges to develop social 
                    awareness, civic responsibility, and personal growth.
                    </p>
                </div>
                </div>
                
            </div>

          
            
        </div>
    )
}



export default About