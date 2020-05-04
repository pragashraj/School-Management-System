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

    contents:{
        type:'Subjects',
        contentTitle:'Maths'
    }
}

const contentReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_CONTENT":
            return{
                ...state,
                contents:action.payload,
            }
        default: return state
    }
}

export default contentReducer