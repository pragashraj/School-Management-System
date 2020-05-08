import React from 'react'
import '../../CSS/AccessUnit/collectionHolder.css'

import {connect} from 'react-redux'

import Subjects from './collection/Subjects'
import Accessories from './collection/Accessories'
import UpcomingEvents from './collection/UpcomingEvents'
import Grades from './collection/Grades'
import AccountUpdate from './Account/AccountUpdate'
import AccountInfo from './Account/AccountInfo'


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

            case "Account_Update": return <AccountUpdate/>

            case "Account_Info" : return <AccountInfo/>

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