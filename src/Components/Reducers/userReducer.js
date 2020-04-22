const INITIAL_STATE={
    info:{}
}

const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_CURRENT_USER_INFO":
            return{
                ...state,
                info:action.payload
            }

        default: return state
    }
}

export default userReducer