import React,{Component} from 'react'
import {connect} from 'react-redux'
import AccountForm from './AccountForm'

class AccountUpdate extends Component {
    state={
        username:'',
        email:'',
        password:''
    }

    componentDidMount(){
        const details=this.props.userDetails
        this.setState({
            username:details.username,
            email:details.mail,
            password:details.password
        })
    }

    handleTextChange=(e)=>{
        const {value,name}=e.target
        this.setState({
            [name]:value
        })
    }

    handleBtnPress=()=>{
        console.log("btn Pressed")
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
