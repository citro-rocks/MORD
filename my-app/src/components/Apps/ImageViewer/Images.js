
import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Images.module.css';

import ImageIcon from '../../assets/image-icon.png'
import ImageViewer from "./ImageViewerModal";

const Images = (props) => {
    return (
        <div className={classes.container}>
            <NavLink to="/ImageViewer"className={classes.images}>
                <img src={ImageIcon} alt="" />
                <div>
                    <p>Image Viewer</p>
                </div>
            </NavLink>
        </div>
    )
}

export default Images;