import React,{useState} from 'react'
import '../CSS/control/ProControl.css'
import DeleteAccount from './ControlForms/DeleteAccount'
import AddAccount from './ControlForms/AddAccount'

const ControlCard=({image,total})=> {
    const [btnType,setType]=useState('')
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
                    <button name="delete" className="pro-btn" onClick={()=>setType('deleteBtn')}>Delete</button>
                </div>

                
            </div>

            <div className="pro-form-container">
                {
                    btnType==='view' ? null:(
                        btnType==='add' ?  <AddAccount/>:(
                            btnType==='deleteBtn' ? <DeleteAccount/> :null
                        )
                    )
                }
                
               
            </div>
        </div>
    )
}
export default ControlCard