import React, { Component } from 'react'
import Api from '../../../Api/Api'
import {connect} from 'react-redux'

import AccountForm from './AccountForm'

class AccountInfo extends Component {
    state={
        id:'',
        name:'',
        grade:'',
        house:'',
        subject:''
    }

    componentDidMount(){
        const username=this.props.userDetails.username
        const info=this.props.info
        if(info==="st"){
            Api.get('/studentByName/'+username).then(
                response=>{
                    this.setState({
                        id:response.data.id
                    })
                }
            )
        }else if(info==="th")
        {
            Api.get('/teacherByName/'+username).then(
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
        const infos=this.state
        const info=this.props.info

        if(info==="st"){
            Api.post('/studentInfo',infos).then(
                response=>{
                    console.log("sucess")
                }
            )
        }else if(info==="th"){
            Api.post('/teacherInfo',infos).then(
                response=>{
                    console.log("sucess")
                }
            )
        }else{
            return
        }

    }

    render() {
        return (
            <div className="account-info">
                <h2 style={{marginLeft:'35%',paddingTop:'2%'}}>Add Information </h2>
                <AccountForm 
                    handleTextChange={this.handleTextChange}
                    btnTitle="Add"
                    handleBtnPress={this.handleBtnPress}
                    type="add"  
                    user={this.props.info} 
                />
            </div>
        )
    }
}

const mapStateToProps=({user:{userDetails,info}})=>{
    return{
        userDetails,
        info
    }
}

export default connect(mapStateToProps)(AccountInfo)