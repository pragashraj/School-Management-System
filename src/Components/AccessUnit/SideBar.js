import React from 'react'
import '../../CSS/AccessUnit/sideBar.css'
import BarButton from './BarButton'

const SideBar=({titles})=> {
    const renderButtons=()=>{
        return(
            titles.map((value,index)=>{
                return <BarButton key={index} barTitle={value}/>
            })           
        )
    }
    
    return (
        <div className="side-bar">
           {
              renderButtons()
           }
        </div>
    )
}

export default SideBar