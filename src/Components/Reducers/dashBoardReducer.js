const INITIAL_STATE={
    hidden:true
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