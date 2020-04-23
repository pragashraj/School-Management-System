import React, { Component } from 'react'
import '../CSS/root/signUp.css'
import Api from '.././Api/Api'
import {connect} from 'react-redux'
import { setCurrentUserInfo} from './Actions/userAction'

class SignUp extends Component {
    state={
        mail:'',
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
        const {mail,username,password,confirmPassword}=this.state
        if(password!==confirmPassword){
            return(
                console.log("passsword not match")
            )
        }
        
        const user={
            mail:mail,
            username:username,
            password:password,
            type:mail.split('@')[1].split('.')[0]
        }
        try{
            const userType=mail.split('@')[1].split('.')[0];
            if(userType==="st"){
                Api.post('/student',user).then(
                    response=>{
                        console.log(response.data)
                    }
                )
            }else if(userType==="th"){
                Api.post('/teacher',user).then(
                    response=>{
                        console.log(response.data)
                    }
                )

            }else if(userType==="ad"){
                Api.post('/admin',user).then(
                    response=>{
                        console.log(response.data)
                    }
                )

            }else{
                return;
            }
            this.props.setCurrentUserInfo(user)
            
        }catch(err){
            console.log(err)
        }

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
                            <input className="signInput" type="email" name="mail" value={this.state.mail} required onChange={this.handleChange}/>  
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

export default connect(mapStateToProps,mapDispatchToProps) (SignUp)