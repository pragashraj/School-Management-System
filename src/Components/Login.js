import React, { Component } from 'react'
import '../CSS/root/login.css'
import Api from '../Api/Api'
import {connect} from 'react-redux'
import {setCurrentUserInfo} from './Actions/userAction'

class Login extends Component {
    state={
        username:'',
        password:'',
        type:'ad'
    }

    handleChange=(e)=>{
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })
    }

    handleOptionChange=(e)=>{
        this.setState({
            type:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const user=this.state
        try{
            if(user.type==="st"){
                Api.get('/studentByName/'+user.username).then(
                    response=>{
                        if(response.data===""){
                            console.log("login failed ")
                        }else{
                            if(response.status===200){
                                if(user.password===response.data.password){
                                    console.log("Login Success")
                                    this.props.setCurrentUserInfo(user)
                                }else{
                                    console.log("password not match")
                                }
                            }
                        }
                    }
                )
            }

            if(user.type==="th"){
                Api.get('/teacherByName/'+user.username).then(
                    response=>{
                        if(response.data===""){
                            console.log("login failed ")
                        }else{
                            if(response.status===200){
                                if(user.password===response.data.password){
                                    console.log("Login Success")
                                    this.props.setCurrentUserInfo(user)
                                }else{
                                    console.log("password not match")
                                }
                            }
                        }
                    }
                )
            }

            if(user.type==="ad"){
                Api.get('/adminByName/'+user.username).then(
                    response=>{
                        if(response.data===""){
                            console.log("login failed ")
                        }else{
                            if(response.status===200){
                                if(user.password===response.data.password){
                                    console.log("Login Success")
                                    this.props.setCurrentUserInfo(user)
                                }else{
                                    console.log("password not match")
                                }
                            }
                        }
                    }
                )
            }
            
        }catch(err){
            console.log(err)
        }
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
                            <input type="radio" name="type"  value="st"  onChange={this.handleOptionChange}/>Student  <br></br>
                            <input type="radio" name="type"  value="th"  onChange={this.handleOptionChange}/>Teacher  
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

const mapDispatchToProps=dispatch=>{
    return{
        setCurrentUserInfo:user=>dispatch(setCurrentUserInfo(user))
    }
}


const mapStateToProps=({user:{info}})=>{
    return{
        info
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)