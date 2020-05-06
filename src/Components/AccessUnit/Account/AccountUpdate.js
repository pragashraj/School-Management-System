import React,{Component} from 'react'
import {connect} from 'react-redux'
import AccountForm from './AccountForm'

class AccountUpdate extends Component {
    state={
        username:'',
        email:'',
        password:''
    }

    handleTextChange=(e)=>{
        const {value,name}=e.target
        this.setState({
            [name]:value
        })
    }

    render(){
        return (
            <div className="account-update">
                <AccountForm userDetails={this.props.userDetails} handleTextChange={this.handleTextChange}/>
                <p>{this.state.username}</p>
                <p>{this.state.email}</p>
                <p>{this.state.password}</p>
                {
                    console.log(this.props.userDetails)                  
                }
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
