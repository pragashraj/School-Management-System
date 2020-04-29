import React, { Component } from 'react'
import '../../CSS/root/signUp.css'
import Api from '../../Api/Api'
import {connect} from 'react-redux'
import {setCurrentUserInfo,storeCurrentUserDetails} from '../Actions/userAction'
import {increseTotalOfStudent,increseTotalOfTeacher} from '../Actions/dashBoardAction'

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

    handleLoginApi=(endpoint,user,type)=>{
        Api.get(endpoint).then(
            response=>{
                if(response.data===""){
                    console.log("login failed ")
                }else{
                    if(response.status===200){
                        if(user.password===response.data.password){
                            console.log("Login Success")
                            this.props.storeCurrentUserDetails(user)
                            this.props.setCurrentUserInfo(type)
                            console.log(this.props.userDetails)
                            this.props.handleRoute()  
                        }else{
                            console.log("password not match")
                        }
                    }
                }
            }
        )
    }

    handleSignUpApi=(endpoint,user,type)=>{
        Api.post(endpoint,user).then(response=>{
            this.props.storeCurrentUserDetails(user)
            this.props.setCurrentUserInfo(type)
            if(type==="st"){
                this.props.increseTotalOfStudent()
            }if(type==="th"){
                this.props.increseTotalOfTeacher()
            }
            this.props.handleRoute()                
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {mail,password,confirmPassword}=this.state

        const user={
            mail,
            username:mail.split('@')[0],
            password,      
        }

        const  type=mail.split('@')[1].split('.')[0]

        if(this.props.addAcc){
            if(password!==confirmPassword){
                return(
                    console.log("passsword not match")
                )
            }
            try{
                switch(type){
                    case "st": return this.handleSignUpApi('/student',user,type)
                    case "th": return  this.handleSignUpApi('/teacher',user,type)
                    case "ad": return  this.handleSignUpApi('/admin',user,type)
                    default : return
                }

            }catch(err){
                console.log(err)
            }
           
        }else{
            try{
                switch(type){
                    case "st": return this.handleLoginApi('/studentByName/'+user.username,user,type)
                    case "th": return this.handleLoginApi('/teacherByName/'+user.username,user,type)
                    case "ad": return  this.handleLoginApi('/adminByName/'+user.username,user,type)
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
        storeCurrentUserDetails:user=>dispatch(storeCurrentUserDetails(user)),
        increseTotalOfStudent:()=>dispatch(increseTotalOfStudent()),
        increseTotalOfTeacher:()=>dispatch(increseTotalOfTeacher())
    }
}

const mapStateToProps=({user:{userDetails}})=>{
    return{
        userDetails
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddAccount)