const INITIAL_STATE={
    hideAcc:true
}


const AccReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_ACC_VIEW":
            return{
                ...state,
                hideAcc:!state.hideAcc
            }
        default : return state;
    }
}

export default AccReducer