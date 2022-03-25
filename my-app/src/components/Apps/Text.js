import React from "react";
import classes from './Text.module.css';

import textIcon from '../assets/text-icon.png';

const TextEditor = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.text}>
                <img src={textIcon} alt="" />
                <div>
                    <p>Text editor</p>
                </div>
            </div>
        </div>
    )
}

export default TextEditor;