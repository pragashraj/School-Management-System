import React, { Component } from 'react'

class AddAccount extends Component {
    state={
        mail:'',
        password:'',
        confirmPassword:''
    }

    handleTextChange=(e)=>{
        const {value,name}=e.target
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className="add-account">

                    <form onSubmit={()=>{}}>
                    <div className="inputs">
                        <label className="labels">Mail</label>
                        <input className="signInput" type="email" name="mail"  required onChange={this.handleTextChange}/>  
                    </div>

                    <div className="inputs">
                        <label className="labels">Password </label>
                        <input  className="signInput" type="password" name="password" required onChange={this.handleTextChange} />  
                    </div>

                    <div className="inputs">
                        <label className="labels">Confirm-Password </label>
                        <input  className="signInput" type="password" name="confirmPassword" required onChange={this.handleTextChange} />  
                    </div>

                    <div className="submit-btn">
                        <button type="submit" name="submit" className="signUp-btn">Add</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default AddAccount