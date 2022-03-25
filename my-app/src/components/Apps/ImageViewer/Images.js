
import React from "react";
import classes from './Images.module.css';


const Images = ({images}) => {
    return (
        <div>
            <h2>{Title}</h2>
            {images.map((img) => (
                <div key={img.id}>
                    <h2>{ img.title }</h2>
                </div>
            ))}
        </div>
    )
}

export default Images;