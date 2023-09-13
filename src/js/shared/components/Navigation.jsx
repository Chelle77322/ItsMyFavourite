import React from "react";
import {Link} from "react-router-dom";

function Navigation() {
    return(
        <div className = ".imf navrow">
            <Link to = "/Home">Home</Link>
            <Link to = "/Landing ">Landing</Link>
            <Link to = "/PageMiss">Page Miss</Link>
            </div>
    )
}
export default Navigation