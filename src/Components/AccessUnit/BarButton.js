import React,{useState} from 'react'
import '../../CSS/AccessUnit/sideBar.css'
import plusSign from '../../assets/plusSign.png'
import minus from '../../assets/minus.png'

import BarContent from './BarContent'

const BarButton=({barTitle})=>{
    const [pressed,setPressed]=useState(false)
    return (
        <div className="bar-button">
            <div className="bar-button-container">
                <button className="bar-btn" onClick={()=>setPressed(!pressed)}>
                    {barTitle}
                    {
                        pressed ? <img src={minus} alt="plus" className="bar-plus-img"/> :<img src={plusSign} alt="plus" className="bar-plus-img"/>
                    }
                    
                </button>
                {
                    pressed ? <BarContent barTitle={barTitle}/> :null
                }
            </div>
        </div>
    )
}



export default BarButton