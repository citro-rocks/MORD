import React from "react";
import classes from './StartPage.module.css';

import MainHeader from "../../components/UI/Navbar";
import Search from "../../components/Search/Search";

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
        </div>
    )
}

export default  Start