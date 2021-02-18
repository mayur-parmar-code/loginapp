 const initialState={
    token:localStorage.getItem('auth-token')
 }

 const reducer=(state=initialState, action)=>{
    switch(action.type){
        case "AUTH" :
            return {
                ...state,
                token: action.token
            }
        case "LOGOUT" :
            return{
                ...state,
                token:null
            }
        default: 
            return {
                ...state
            }
    }
 }

 export default reducer