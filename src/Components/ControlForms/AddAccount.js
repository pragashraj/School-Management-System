import React, { Component } from 'react'
import '../../CSS/root/signUp.css'
import Api from '../../Api/Api'
import {connect} from 'react-redux'
import {setCurrentUserInfo,storeCurrentUserDetails} from '../Actions/userAction'

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

    handleApi=({endpoint,user})=>{
        Api.get(endpoint).then(
            response=>{
                if(response.data===""){
                    console.log("login failed ")
                }else{
                    if(response.status===200){
                        if(user.password===response.data.password){
                            console.log("Login Success")
                        }else{
                            console.log("password not match")
                        }
                    }
                }
            }
        )
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {mail,password,confirmPassword}=this.state

        const user={
            mail,
            username:mail.split('@')[0],
            password,
            type:mail.split('@')[1].split('.')[0]
        }

        if(this.props.addAcc){
            if(password!==confirmPassword){
                return(
                    console.log("passsword not match")
                )
            }
            try{
                switch(user.type){
                    case "st": return Api.post('/student',user).then(response=>{console.log(response.data)})
                    case "th": return  Api.post('/teacher',user).then(response=>{console.log(response.data)})
                    case "ad": return  Api.post('/admin',user).then(response=>{console.log(response.data)})
                    default : return
                }
            }catch(err){
                console.log(err)
            }

        }else{
            try{
                switch(user.type){
                    case "st": return this.handleApi('/studentByName/'+user.username,user)
                    case "th": return this.handleApi('/teacherByName/'+user.username,user)
                    case "ad": return  this.handleApi('/adminByName/'+user.username,user)
                    default : return
                }
               
            }catch(err){
                console.log(err)
            }
        }


    }
    

    render() {
        return (
            <div className="add-account">

                    <form onSubmit={this.handleSubmit}>
                    <div className="inputs">
                        <label className="labels">Mail</label>
                        <input className="signInput" type="email" name="mail"  required onChange={this.handleTextChange}/>  
                    </div>

                    <div className="inputs">
                        <label className="labels">Password </label>
                        <input  className="signInput" type="password" name="password" required onChange={this.handleTextChange} />  
                    </div>
                {
                    this.props.addAcc ? (
                        <div className="inputs">
                            <label className="labels">Confirm-Password </label>
                            <input  className="signInput" type="password" name="confirmPassword" required onChange={this.handleTextChange} />  
                        </div>)
                    :null
                }
                    

                    <div className="submit-btn">
                        <button type="submit" name="submit" className="signUp-btn">{this.props.title}</button>
                    </div>

                </form>
            </div>
        )
    }
}



const mapDispatchToProps=dispatch=>{
    return{
        setCurrentUserInfo:info=>dispatch(setCurrentUserInfo(info)),
        storeCurrentUserDetails:user=>dispatch(storeCurrentUserDetails(user))
    }
}


export default connect(null,mapDispatchToProps)(AddAccount)