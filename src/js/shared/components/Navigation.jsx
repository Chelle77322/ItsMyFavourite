import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return(
        <div className = ".imf navrow">
            <Link to = "/Login">Login</Link>
            <Link to = "/Register ">Register</Link>
            </div>
    )
}
export default Navigation