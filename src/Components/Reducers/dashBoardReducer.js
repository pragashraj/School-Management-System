const INITIAL_STATE={
    hidden:true,
    totalStudents:2408,
    totalTeachers:56,
    totalEmployess:25
}

const dashBoardReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_DASHBOARD":
            return{
                ...state,
                hidden:!state.hidden
            }

        case "INCREASE_STUDENT":
            return{
                ...state,
                totalStudents:state.totalStudents+1
            }

        case "DECREASE_STUDENT":
            return{
                ...state,
                totalStudents:state.totalStudents-1
            }

        case "INCREASE_TEACHER":
            return{
                ...state,
                totalTeachers:state.totalTeachers+1
            }

        case "DECREASE_TEACHER":
            return{
                ...state,
                totalTeachers :state.totalTeachers-1
            }


        default :
            return state
    }
}

export default dashBoardReducer