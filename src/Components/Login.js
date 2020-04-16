import React, { Component } from 'react'
import '../CSS/root/login.css'


class Login extends Component {
    state={
        username:'',
        password:''
    }

    handleChange=(e)=>{
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div className="login">
                <div className="form">
                    <form>
                        <div className="inputField">
                            <label className="label">User-Name </label>
                            <input type="text" name="username" value={this.state.username} required onChange={this.handleChange}/>  
                        </div> 
                        
                        <div className="inputField">
                            <label className="label">Password </label>
                            <input type="password" name="password" value={this.state.password} required onChange={this.handleChange}/>  
                        </div>

                        <button type="submit" name="submit" className="btn">Login</button>
                    </form>
                </div>
               
            </div>
        )
    }
}
export default Login