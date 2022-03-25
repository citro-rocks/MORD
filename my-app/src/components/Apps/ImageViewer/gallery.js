import React, { useEffect, useState } from "react";
import Images from "./Images";

const Gallery = (props) => {

    const [images, setImages] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res =>{
            return res.json()
        })

        .then(data => {
            setImages(data)
        });
    }, []);

    return (
        <div>
            {images && <Images images={images} title="All images!" />}
        </div>
    )
}

export default Gallery;