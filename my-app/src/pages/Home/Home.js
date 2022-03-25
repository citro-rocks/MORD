import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter } from "react-router-dom";
import MainHeader from "../../components/UI/Navbar";
import Time from "../../components/UI/TimeAndDate";

import classes from './Home.module.css';

const Welcome = (props) => {
    return (
        <div>
            <div>
                <MainHeader></MainHeader>
            </div>
            <div className={classes.clock}>
                <Time />
            </div>
        </div>
    );
};

export default Welcome;