import axios from 'axios';
import React, { useEffect } from 'react'
import {useState} from 'react';
import { connect } from 'react-redux';
import { authenticate, register } from '../redux/actions/actions';


function Register(props) {

    const [user, setUser] = useState({email:'eve.holt@reqres.in',password:'pistol'});

    const handleRegister=(e)=>{
        e.preventDefault();
        //now go to saga bcoz the register action in action.js file
       props.register(user);
    }
    
    useEffect(() => {
        console.log(props.token);
    })
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Email or Phone" value={user.email} onChange={(e)=>{setUser({...user, email:e.target.value})}}/><br />
                <input type="password" placeholder="Passwrd" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} /><br />
                <button>Register</button>
            </form>
        </div>
    )
}
const mapStatetoProps =({token})=> {
    return {
        token
    }
}

// const mapDispatchtoProps=(dispatch) =>{
//     return {
//         registers: token => {
//             dispatch({type: 'AUTH', token})
//         }
//     }
// }

const mapDispatchtoProps = {
    register
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Register);