import React from 'react';
import { Link } from 'react-router-dom';

const IndividualService = ({ service }) => {
    const { name, description, image_url, id } = service;
    // console.log(service);
    return (

        <div className="group hero min-h-44 m-0 p-0 w-auto hover:cursor-pointer" style={{ backgroundImage: `url(${image_url})` }}>
            <div className="hero-overlay bg-opacity-60 group-hover:bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white h-full w-full opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <Link to={`/service/${id}`}>
                    <div className="">
                        <h1 className="mb-2 font-bold text-white">{name}</h1>
                        {/* <p className="mb-5 text-white h-40">{description}</p> */}
                        <button className="btn nav-clickable text-white">View Details</button>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default IndividualService;