import React,{useState} from 'react'
import '../CSS/control/ProControl.css'
import AddAccount from './ControlForms/AddAccount'
import DetailView from './ControlForms/DetailView'

const ControlCard=({image,total,pro})=> {
    const [btnType,setType]=useState('')
    const handleRoute=()=>{
       setType('')
    }
    return (
        <div className="controlCard">
            <div className="pro-block">

                <div className="pro-block-image-container">
                     <img src={image} alt="stu" className="pro-block-image"/>
                </div>
                
                <div className="pro-total-conatiner">
                    <p className="pro-total">{total}</p>
                </div>
                
                <div className="pro-btn-container">
                    <button name="view" className="pro-btn" onClick={()=>setType('view')}>View</button>
                    <button name="add" className="pro-btn" onClick={()=>setType('add')}>Add</button>
                </div>

                
            </div>

            <div className="pro-form-container">
                {
                    btnType==='view' ? (
                        <div className="pro-view-compo">
                             <DetailView image={image} pro={pro}/>
                        </div>
                        ):(
                        btnType==='add' ?  <AddAccount title="Add" addAcc={true} handleRoute={handleRoute}/>:null
                    )
                }
                
               
            </div>
        </div>
    )
}
export default ControlCard