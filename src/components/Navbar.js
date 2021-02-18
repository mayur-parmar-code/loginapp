import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <Link to="/">Login      </Link>
            <Link to="/register">Register     </Link>
            <Link to="/Dashboard">      Dashboard</Link>
        </div>
    )
}
export default Navbar;