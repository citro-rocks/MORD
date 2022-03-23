import React from "react";
import MainHeader from "../../components/UI/Navbar";
import Search from "../../components/Search/Search";
import Files from "../../components/Cards/Files";

import classes from './StartPage.module.css';

const Start = (props) => {
    return (
        <div>
            <div>
                <MainHeader />
            </div>
            <div className={classes.container}>
                <div>
                    <Search />
                </div>
            </div>
            <div className={classes.container}>
                <div>
                    <Files />
                </div>
            </div>
        </div>
    )
}

export default  Start