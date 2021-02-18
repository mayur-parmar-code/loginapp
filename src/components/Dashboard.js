import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/actions/actions';

function Dashboard(props) {

    const handleLogout=()=>{
        localStorage.removeItem('auth-token')
        props.logout();
    }
    const history=useHistory();
    useEffect(() => {
        if(props.token === null){
            history.push("/");
        }
    })
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

const mapStatetoProps=({token})=>{
    return{
        token
    }
}
const mapDispatchtoProps={
    logout
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Dashboard);