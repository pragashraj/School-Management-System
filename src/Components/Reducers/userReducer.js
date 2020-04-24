const INITIAL_STATE={
    info:'ns',
    userDetails:{}
}

const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_CURRENT_USER":
            return{
                ...state,
                info:action.payload
            }

        case "SIGN_OUT":
            return{
                ...state,
                info:'ns'
            }

        case "SET_CURRENT_USER_DETAIL":
            return{
                ...state,
                userDetails:action.payload
            }
        default: return state
    }
}

export default userReducer