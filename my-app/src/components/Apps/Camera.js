import React from "react";
import classes from './Camera.module.css';

import CameraIcon from '../assets/camera-icon.png';

const WebCamera = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.camera}>
                <img src={CameraIcon} alt="" />
                <div>
                    <p>Web Camera</p>
                </div>
            </div>
        </div>
    )
}

export default WebCamera;