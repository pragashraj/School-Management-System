const INITIAL_STATE={
    hidden:true,
    totalStudents:'2408',
    totalTeachers:'0056',
    totalEmployess:'25'
}

const dashBoardReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_DASHBOARD":
            return{
                ...state,
                hidden:!state.hidden
            }
        default :
            return state
    }
}

export default dashBoardReducer