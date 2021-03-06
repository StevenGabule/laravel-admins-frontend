import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div className="sidebar-sticky pt-3">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to={'/'} className="nav-link">
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/users"} className="nav-link">
                        Users
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
)

export default Menu;