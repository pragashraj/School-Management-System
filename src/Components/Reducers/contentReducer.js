const INITIAL_STATE={
    student:{
        Subjects:["Maths","Science","English"],
        Accessories:["Time Table","Exam"],
        Upcoming_Events:["SportSmeet"]
    }
}

const contentReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default: return state
    }
}

export default contentReducer