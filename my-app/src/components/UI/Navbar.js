import React from "react";
import { Routes, Route, Link, NavLink } from 'react-router-dom';

// import Authentication from "../../pages/AuthPage/AuthPage";
// import Router from 'react-router-dom'
import { useState } from "react";

import classes from "./Navbar.module.css";

const MainHeader = (props) => {
    const [openAuth, setOpenAuth] = useState(false);

    return (
        <header className={classes.header}>
            <nav>
                <div className={classes.container}>
                    <NavLink className={classes.logo} to="/home">MORD</NavLink>
                </div>
                <div className={classes.container}>
                    <NavLink className={classes.button} to="/login">Login</NavLink>
                    {/* <button className={classes.button} onClick={() => {setOpenAuth(true)}}>Log In</button> */}
                </div>
            </nav>
        </header>
    );
};

export default MainHeader;