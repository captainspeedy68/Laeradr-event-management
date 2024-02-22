import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import GalleryList from './GalleryList';

const Gallery = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
            {
                services.map(service =>
                    <div className="carousel-item">
                        <img src={service.image_url} className="rounded-box w-96" />

                    </div>)
            }
        </div>
    );
};

export default Gallery;