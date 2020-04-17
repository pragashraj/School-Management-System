import React, { Component } from 'react'
import '../CSS/root/signUp.css'

class SignUp extends Component {
    state={
        email:'',
        username:'',
        password:'',
        confirmPassword:'',
    }

    handleChange=(e)=>{
        const {value,name}=e.target
        this.setState({
            [name]:value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        this.setState({
            email:'',
            username:'',
            password:'',
            confirmPassword:''
        })
    }
    render() {
        return (
            <div className="sign-up">
                <div className="form-signUp">
                <fieldset>
                <legend>If you Don't have an Acount  !</legend>
                    <form onSubmit={this.handleSubmit}>
                        <div className="inputs">
                            <label className="labels">S-mail</label>
                            <input className="signInput" type="email" name="email" value={this.state.email} required onChange={this.handleChange}/>  
                        </div>

                        <div className="inputs">
                            <label className="labels">User-Name </label>
                            <input  className="signInput" type="text" name="username" value={this.state.username} required onChange={this.handleChange}/>  
                        </div> 
                
                        <div className="inputs">
                            <label className="labels">Password </label>
                            <input  className="signInput" type="password" name="password" value={this.state.password} required onChange={this.handleChange}/>  
                        </div>

                        <div className="inputs">
                            <label className="labels">Confirm-Password </label>
                            <input  className="signInput" type="password" name="confirmPassword" value={this.state.confirmPassword} required onChange={this.handleChange}/>  
                        </div>

                        <div className="submit-btn">
                            <button type="submit" name="submit" className="signUp-btn">SignUp</button>
                        </div>

                    </form>
                    </fieldset>
                </div>
            </div>
        )
    }
}

export default SignUp