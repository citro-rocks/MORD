import React from "react";
import classes from './Images.module.css';

import ImagesIcon from '../assets/image-icon.png';

const ImageViewer = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.images}>
                <img src={ImagesIcon} alt="" />
                <div>
                    <p>Image Viewer</p>
                </div>
            </div>
        </div>
    )
}

export default ImageViewer;