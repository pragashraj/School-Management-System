import React from 'react'

const UpcomingEvents = ({eventTitle}) => {

    const renderevents=()=>{
        switch(eventTitle){
            case "SportSmeet" :return(
                    <p style={{fontSize:'1.2em',marginLeft:'30%'}}>Currently UnAvailable</p>
            )
            default :return null
        }
    }
    return (
        <div className="upcoming-events">
            <div className="event-block">
            {
                renderevents()
            }
            </div>
        </div>
    )
}

export default UpcomingEvents
