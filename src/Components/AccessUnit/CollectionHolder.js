import React from 'react'
import '../../CSS/AccessUnit/collectionHolder.css'
import Subjects from './collection/Subjects'
import {connect} from 'react-redux'
import Accessories from './collection/Accessories'
import UpcomingEvents from './collection/UpcomingEvents'
import Grades from './collection/Grades'

const CollectionHolder = ({contents,user}) => {

    const renderCollection=()=>{
        switch(contents.type){
            case "Subjects":
                return(
                    <Subjects subjectTitle={contents.contentTitle}/>
                )
            case "Accessories":
                return <Accessories accessoriesTitle={contents.contentTitle}/>

            case "Upcoming_Events":
                return <UpcomingEvents eventTitle={contents.contentTitle}/>

            case "Grades": return <Grades/>
                
            case "Annual_Works":return

            default : return(
                user==="st" ? <Subjects subjectTitle={"Maths"}/> : <Grades/>
            )
        }
    }
    return (
        <div className="collection-holder">
            <div className="holder">
                {
                    renderCollection()
                }
                {
                    console.log(contents.type)
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