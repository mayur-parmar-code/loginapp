import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { authenticate } from '../redux/actions/actions';


function Login(props) {

    const [user,setUser]=useState({email:'eve.holt@reqres.in',password:'cityslicka'})
    const history=useHistory();
    const handleLogin =(e)=>{
        e.preventDefault();
        axios.post("https://reqres.in/api/login",user)
            .then(data=>{
                localStorage.setItem('auth-token',data.data.token)
                props.authenticate(data.data.token)
            })
    }

    useEffect(() => {
        if(props.token !== null){
            history.push("/dashboard");
        }
    })

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Email or Phone" value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}/><br />
                <input type="password" placeholder="Password" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} /><br />
                <button>Login</button><br />
                Not Register click here??<Link to="/register">Register</Link>
            </form>
        </div>
    )
}

const mapStatetoProps=({token})=>{
    return{
        token
    }
}

const mapDispatchtoProps={
    authenticate
}
export default connect(mapStatetoProps,mapDispatchtoProps)(Login)