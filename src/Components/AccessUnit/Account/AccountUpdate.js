import React,{Component} from 'react'
import {connect} from 'react-redux'

import Api from '../../../Api/Api'
import AccountForm from './AccountForm'

class AccountUpdate extends Component {
    state={
        username:'',
        mail:'',
        password:'',
        id:''
    }

    componentDidMount(){
        const details=this.props.userDetails
        const info=this.props.info

        this.setState({
            username:details.username,
            mail:details.mail,
            password:details.password
        })
        
        if(info==="st"){
            Api.get('/studentByName/'+details.username).then(
                response=>{
                    this.setState({
                        id:response.data.id
                    })
                }
            )
        }else if(info==="th")
        {
            Api.get('/teacherByName/'+details.username).then(
                response=>{
                    this.setState({
                        id:response.data.id
                    })
                }
            )
        }else{
            return
        }
    }

    handleTextChange=(e)=>{
        const {value,name}=e.target
        this.setState({
            [name]:value
        })
    }

    handleBtnPress=(e)=>{
        e.preventDefault()
        const updated=this.state
        const info=this.props.info

         if(info==="st"){
            Api.put('/StUpdate',updated).then(
                response=>{
                    console.log("success")
                }
            )
         }else if(info==="th"){
            Api.put('/ThUpdate',updated).then(
                response=>{
                    console.log("success")
                }
            )
         }else{
             return
         }

    }

    render(){
        return (
            <div className="account-update">
                <h2 style={{marginLeft:'35%',paddingTop:'2%'}}>Update Your Account</h2>
                <AccountForm 
                    userDetails={this.props.userDetails} 
                    handleTextChange={this.handleTextChange}
                    btnTitle="Update"
                    handleBtnPress={this.handleBtnPress}
                    type="update"
                    
                />
            </div>
        )
    }
}

const mapStateToProps=({user:{info,userDetails}})=>{
    return{
        info,
        userDetails
    }
}

export default connect(mapStateToProps)(AccountUpdate)
