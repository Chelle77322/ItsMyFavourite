import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return(
        <div className = ".imf navrow">
            <Link to = "../login">Login</Link>
            <Link to = "/register">Register</Link>
          
            </div>
    )
}
export default Navigation