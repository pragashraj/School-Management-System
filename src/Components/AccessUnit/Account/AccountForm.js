import React, { Component } from 'react'

class AccountForm extends Component {
    handleChange=(e)=>{
        this.props.handleTextChange(e)
    }

    renderInput=(value)=>{
        return(
            <div className="">
                <label>{value} : </label>
                <input type="text" name={value} defaultValue="name" onChange={this.handleChange}/>
            </div>
        )
    }

     renderInputs=(inputs)=>{
            return(
                inputs.map(
                    (value,index)=>{
                        return(
                            <div className="" key={index}>
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
            </div>
        )
    }



}


export default AccountForm