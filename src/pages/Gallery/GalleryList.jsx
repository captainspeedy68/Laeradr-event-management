import React from 'react';

const GalleryList = ({src}) => {
    return (
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
                <img src={src} className="rounded-box" />
            </div>
        </div>
    );
};

export default GalleryList;