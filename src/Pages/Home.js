import React from 'react'

 const Home=()=> {

    return (

         <div className="home-page">
            <div className="home-head-block">
                <div className="home-head"></div>
            </div>

            <div className="home-statement-block">
                <div className="home-vision">
                    <h1 className="vision-title">Vision</h1>
                    <p className="vision-content">
                            Our vision is for each child to develop a curiosity of learning,
                            We also desire to have strong families through parent 
                            support/fellowship and skills training.
                     </p>
                </div>

                <div className="home-mission">
                    <h1 className="mission-title">Mission</h1>
                    <p className="mission-content">
                        Our Kindergarten aims to provide a meaningful child centered, 
                        play based curriculum that builds life skills, independence, confidence 
                        and resilience to support each child in achieving their potential 
                        and to make a smooth transition to school and society itself.
                     </p>
                </div>
            </div>


            <div className="home-footer">
            </div>
        </div>

    )
}

export default Home