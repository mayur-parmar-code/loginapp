
export const authenticate=(token)=>{
    return {
        type:"AUTH",
        token
    }
}
//now go call to saga.js file bcoz the register case is not define in reducer.js file so as middleware the saga will handle the request
export const register=(user)=>{
    return {
        type:"REGISTER",
        user
    }
}
export const error=()=>{
    return {
        type:"ERROR"
    }
}
export const logout=()=>{
    return{
        type:"LOGOUT"
    }
}
