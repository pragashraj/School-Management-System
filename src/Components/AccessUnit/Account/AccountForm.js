import React, { Component } from 'react'
import '../../../CSS/AccountEdit/accountForm.css'

class AccountForm extends Component {
    handleChange=(e)=>{
        this.props.handleTextChange(e)
    }

    renderInput=(value)=>{
        const details=this.props.userDetails
        switch(value){
            case "username":return <input type="text" name={value} defaultValue={details.username} className="acc-input-input" onChange={this.handleChange}/>
            case "email":return <input type="text" name={value} defaultValue={details.mail} className="acc-input-input" onChange={this.handleChange}/>
            case "password":return <input type="text" name={value} defaultValue={details.password} className="acc-input-input" onChange={this.handleChange}/>
            default :return null
        }
    }

     renderInputs=(inputs)=>{
            return(
                inputs.map(
                    (value,index)=>{
                        return(
                            <div className="acc-input-container" key={index}>
                                <div className="acc-input-label-container">
                                    <label className="acc-input-label">{value.toUpperCase()}  </label>
                                </div>
                                {
                                    this.renderInput(value)
                                }
                            </div>
                        )
                    }
                )
            )
    }

     renderForm=()=>{
        return(
            <div className="account-form-container">
                <form>
                    {
                        this.renderInputs(["username","email","password"])
                    }
                </form>
            </div>
        )
    }

   
    render() {
        return (
            <div className="account-form">
                {
                    this.renderForm()
                }
                <div className="acc-form-btn">
                    <button className="form-btn" onClick={this.props.handleBtnPress}>{this.props.btnTitle}</button>
                </div>
            </div>
        )
    }



}


export default AccountForm