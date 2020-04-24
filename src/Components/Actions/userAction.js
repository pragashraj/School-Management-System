export const setCurrentUserInfo=info=>({
    type:"SET_CURRENT_USER",
    payload:info
})

export const signOut=()=>({
    type:"SIGN_OUT"
})

export const storeCurrentUserDetails=user=>({
    type:"SET_CURRENT_USER_DETAIL",
    payload:user
})