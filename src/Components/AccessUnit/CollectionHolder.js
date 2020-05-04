import React from 'react'
import '../../CSS/AccessUnit/collectionHolder.css'
import Subjects from './collection/Subjects'
import {connect} from 'react-redux'
import Accessories from './collection/Accessories'

const CollectionHolder = ({contents}) => {

    const renderCollection=()=>{
        switch(contents.type){
            case "Subjects":
                return(
                    <Subjects subjectTitle={contents.contentTitle}/>
                )
            case "Accessories":
                return <Accessories accessoriesTitle={contents.contentTitle}/>

            case "Upcoming_Events":
                return

            case "Grades":
                return
            
            case "Annual_Works":return

            default : return <Subjects/>
        }
    }
    return (
        <div className="collection-holder">
            <div className="holder">
                {
                    renderCollection()
                }
            </div>
        </div>
    )
}

const mapStateToProps=({content:{contents}})=>{
    return{
        contents
    }
}
export default connect(mapStateToProps) (CollectionHolder)