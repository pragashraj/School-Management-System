import React, { Component } from 'react'
import '../../CSS/control/detailView.css'
import Api from '../../Api/Api'
import Detail from './Detail'

class DetailView extends Component {
    state={
        mail:'',
        details:null,
        error:''
    }

    handleTextChange=(e)=>{
        this.setState({
            mail:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const pro=this.props.pro
        const name=this.state.mail.split('@')[0]
        if(pro==="student"){
            this.handleApi('studentByName/'+name)
        }else{
            this.handleApi('teacherByName/'+name)
        }
        
    }

    handleApi=(endpoint)=>{
        Api.get(endpoint).then(
            response=>{
                if(response.data===""){
                    console.log("Oops!! No Data Found")
                    this.setState({
                        error:"Oops!! No Data Found"
                    })
                }else{
                    if(response.status===200){
                        this.setState({
                            details:response.data   
                        })
                    }
                }
            }
        )
    }

    render() {
        return (
            <div className="detail-view">
                <div className="detail-block">

                    <div className="detail-block-search">
                        <form onSubmit={this.handleSubmit}>
                            <label className="detail-label">Email</label>
                            <input type="email"  name="mail"  required onChange={this.handleTextChange} className="detail-input"/>
                            <input type="submit" name="submit" className="detail-btn"/>
                        </form>
                    </div>

                    {
                        this.state.error ? <p className="detail-error">{this.state.error}</p> :null
                    }

                    {
                        this.state.details ? (<Detail image={this.props.image} details={this.state.details}/>):null
                    }

                   
                   
                </div>
            </div>
        )
    }
}

export default DetailView