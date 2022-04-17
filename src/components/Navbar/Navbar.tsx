import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

// type navPropsType = {
//     discription: string
// }

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink>
            </div>
            <div className={classes.item}>
                <a href="/news">News</a>
            </div>
            <div className={classes.item}>
                <a href="/music">Music</a>
            </div>
            <div className={classes.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;