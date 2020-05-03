import React from 'react'
import '../../CSS/AccessUnit/collectionHolder.css'
import Subjects from './collection/Subjects'
import {connect} from 'react-redux'

const CollectionHolder = ({contentTitle}) => {
    return (
        <div className="collection-holder">
            <div className="holder">
                {
                    contentTitle==="Maths" ? <Subjects/> :<Subjects/>
                    // console.log(contentTitle)
                }
            </div>
        </div>
    )
}

const mapStateToProps=({content:{contentTitle}})=>{
    return{
        contentTitle
    }
}
export default connect(mapStateToProps) (CollectionHolder)