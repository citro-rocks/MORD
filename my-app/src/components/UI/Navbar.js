import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

const MainHeader = (props) => {
    return (
        <header className={classes.header}>
            <nav>
                <div className={classes.container}>
                    <a className={classes.logo}>MORD</a>
                </div>
                <div className={classes.container}>
                    <button className={classes.button}>Log In</button>
                </div>
            </nav>
        </header>
    );
};

export default MainHeader;