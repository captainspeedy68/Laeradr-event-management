import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = ({ isHome = false }) => {
    const [services, setServices] = useState([]);
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    useEffect(() => {
        fetch("/events.json")
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    return (
        <section className={`${isHome ? 'card hover:shadow-2xl mx-3 max-md:hidden md:w-auto bg-base-100 shadow-xl pb-5 my-4' : ""}`}>

            <div className={`carousel ${isHome ? "w-full h-96" : "carousel-center space-x-4 bg-neutral my-20 p-4 rounded-box"}`}>
                {
                    services.map(service =>
                        <div id={`${service.id}`} className={`carousel-item  ${isHome ? "w-full h-full" : ""}`}>
                            <img src={service.image_url} className={`${isHome ? "w-full h-full" : "rounded-box w-96"}`}/>

                        </div>)
                }
                {
                    events.map(event =>
                        <div className= {`${isHome ? "hidden" : "carousel-item"}`}>
                            <img src={event.image_url} className="rounded-box w-96" />

                        </div>)
                }

            </div>
            {
                isHome && <div className="flex justify-center w-full py-2 gap-2">{


                    services.map(service => <a href={`#${service.id}`} className="btn btn-xs">{service.id}</a> )
                }

                </div>
            }
            {
                isHome && <div className='card-actions justify-center p-5'>
                    <Link to={"/gallery"}><button className='btn nav-clickable text-white '>All Gellary</button> </Link>
                </div>
            }
        </section>
    );
};

export default Gallery;