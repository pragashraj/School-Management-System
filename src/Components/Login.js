import React, { Component } from 'react'
import '../CSS/root/login.css'


class Login extends Component {
    state={
        username:'',
        password:'',
        profession:''
    }

    handleChange=(e)=>{
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="login">
                <div className="form">
                <fieldset>
                <legend>If you Aldready have an Acount !</legend>
                    <form onSubmit={this.handleSubmit}>
                        <div className="inputField">
                            <label className="label">User-Name </label>
                            <input type="text" name="username" value={this.state.username} required onChange={this.handleChange}/>  
                        </div> 
                        
                        <div className="inputField">
                            <label className="label">Password </label>
                            <input type="password" name="password" value={this.state.password} required onChange={this.handleChange}/>  
                        </div>

                        <div >
                            <label className="label">I'am a ? </label>
                            <input type="radio" name="profession" required value="student" required onChange={this.handleChange}/>Student  <br></br>
                            <input type="radio" name="profession" required value="teacher" required onChange={this.handleChange}/>Teacher  
                        </div>

                        <div className="submit-btn">
                            <button type="submit" name="submit" className="btn" >Login</button>
                        </div>
                    </form>
                    </fieldset>
                </div>
               
            </div>
        )
    }
}
export default Login