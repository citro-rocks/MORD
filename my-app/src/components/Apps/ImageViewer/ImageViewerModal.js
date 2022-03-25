import React from "react";
import classes from './ImageViewerModal.module.css'

const ImageViewer = (props) => {
    return (
        <div className={classes.modal}>
            {props.children}
            <h1>Here goes some images</h1>
        </div>
    )
        
}

export default ImageViewer;