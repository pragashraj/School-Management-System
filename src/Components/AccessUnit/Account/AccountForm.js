import React, { Component } from 'react'
import '../../../CSS/AccountEdit/accountForm.css'

class AccountForm extends Component {
    handleChange=(e)=>{
        this.props.handleTextChange(e)
    }

    renderInput=(value)=>{
        const details=this.props.userDetails
        console.log(details)
        switch(value){
            case "username":return <input type="text" name={value} defaultValue={details.username} className="acc-input-input" onChange={this.handleChange}/>
            case "mail":return <input type="text" name={value} defaultValue={details.mail} className="acc-input-input" onChange={this.handleChange}/>
            case "password":return <input type="text" name={value} defaultValue={details.password} className="acc-input-input" onChange={this.handleChange}/>
            case "name":return <input type="text" name={value} required className="acc-input-input" onChange={this.handleChange}/>
            case "grade":return <input type="text" name={value} required className="acc-input-input" onChange={this.handleChange}/>
            case "house":return <input type="text" name={value} required className="acc-input-input" onChange={this.handleChange}/>
            case "subject":return <input type="text" name={value} required className="acc-input-input" onChange={this.handleChange}/>
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
                        this.props.type ==="update" ? this.renderInputs(["username","mail","password"]) 
                        : (
                            this.props.user ==="st" ? this.renderInputs(["name","grade","house"]) : this.renderInputs(["name","subject","house"])
                        ) 
                    }
                    <div className="acc-form-btn">
                        <button className="form-btn" onClick={this.props.handleBtnPress}>{this.props.btnTitle}</button>
                    </div>
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
            </div>
        )
    }



}


export default AccountForm