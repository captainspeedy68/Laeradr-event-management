import React from 'react';
import { Link } from 'react-router-dom';

const IndividualOrders = ({ service }) => {
    const { image_url, id, name, description } = service;

    return (
        <div className="rounded-lg md:flex w-5/6 overflow-hidden bg-white shadow-md my-5 mx-auto">
            <img src={image_url} alt="Movie" className=" h-56 w-72 object-cover" />
            <div className="md:flex px-10 flex-col space-y-2 p-2">
                <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                <p className="text-gray-600">{description}</p>
                <div className="flex justify-between items-center">
                    <Link to={`/service/${id}`}>
                        <button className="btn nav-clickable text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IndividualOrders;
