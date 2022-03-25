import React from "react";
import classes from './Files.module.css';

import filesIcon from '../assets/files-icon.png';

const Files = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.files}>
                <img src={filesIcon} alt="" />
                <p>Your files</p>
            </div>
        </div>
    )
}

export default Files;