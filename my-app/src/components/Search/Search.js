import React from "react";
import classes from './Search.module.css';

const Search = (props) => {
    return (
        <div>
            <input className={classes.search} type="text" placeholder="Search" />
        </div>
    );
};

export default Search