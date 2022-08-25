import React, {Component} from "react";


const Navbar = (props) => {
        return (
            <nav class="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                         Navbar <span className="badge bg-pill bg-secondary">{props.totalCounters}</span>
                        </a>
                 </div>
            </nav>
     );
}
 
export default Navbar;
 
