import React from "react";
import Gallery from "./gallery";
import classes from './ImageViewer.module.css'


const ImageViewer = (props) => {
    return (
        <div className={classes.modal}>
            {props.children}
            <Gallery />
        </div>
    )
        
}

export default ImageViewer;