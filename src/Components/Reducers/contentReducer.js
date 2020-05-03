const INITIAL_STATE={
    student:{
        Subjects:["Maths","Science","English"],
    },

    common:{
        Accessories:["Time Table","Results","Assignments"],
        Upcoming_Events:["SportSmeet"]
    },

    teacher:{
        Grades:["Gr-13","Gr-12","Gr-11"],
        Annual_Works:["Exam"]
    },

    collectionHolder:false,
    contentTitle:"maths"
}

const contentReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_COLLECTION_HOLDER":
            return{
                ...state,
                collectionHolder:!state.collectionHolder
            }
        case "SET_CONTENT_TYPE":
           
            return{
                ...state,
                contentTitle:action.payload,
            }
        default: return state
    }
}

export default contentReducer