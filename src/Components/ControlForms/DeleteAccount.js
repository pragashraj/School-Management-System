import React, { Component } from 'react'
import '../../CSS/control/Delete.css'

class DeleteAccount extends Component {
    state={
        id:''
    }

    handleTextChange=(e)=>{
        this.setState({
            id:e.target.value
        })
    }

    render() {
        return (
            <div className="delete-account">

                    <div className="delete-block-inputs">
                        <label className="delete-block-labels">Id</label>
                        <input  className="delete-block-Input" type="text" name="username" required onChange={this.handleTextChange}/>
                        <button className="delete-block-btn" type="submit" name="submit">Delete</button>  
                    </div> 
            </div>
        )
    }
}

export default DeleteAccount