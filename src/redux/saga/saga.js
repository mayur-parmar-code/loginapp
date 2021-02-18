import {call,put,takeEvery} from 'redux-saga/effects';
import axios from 'axios';

async function fetchApi(user){
    const data =await axios.post("https://reqres.in/api/register", user);
    localStorage.setItem("auth-token",data.data.token)
    return data.data;
}

function* fetchUser(){
    
    yield takeEvery("REGISTER",function* ({user}){
        try {
            const data = yield call(fetchApi, user);
            yield put({type:"AUTH",token:data.token}) 
        } catch (error) {
            yield put({type:"ERROR",message:error.message});
        }
    })
}

export default fetchUser
