import React from 'react';
import { FaClock, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const IndividualEvents = ({ event }) => {
    const { name, description, id, image_url, time, location } = event;
    return (
        <div className="card md:w-96 max-md:mx-3 bg-base-100 max-md:border-2 max-md:hover:border-4 shadow-xl rounded-none event-hover hover:border hover:shadow-2xl border-orange-400 max-md:my-3">
            <figure className="px-5 pt-5">
                <img src={image_url} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div>
                    <h2 className="card-title">{name}</h2>
                    <div>
                        <div className='flex items-center my-1'><div className='bg-[#FFBE31] p-1 h-6 w-6 rounded-full mr-2 flex justify-center items-center'><FaRegClock className=' text-white h-3 w-3' /></div>{time}</div>
                        <div className='my-1 flex items-center'><div className='bg-[#FFBE31] p-1 h-6 w-6 rounded-full mr-2 flex justify-center items-center'><FaLocationDot className='text-white' /></div>{location}</div>
                    </div>
                </div>


                <p>{description}</p>
                <div className="card-actions">
                    <Link to={`/event/${id}`}>
                        <button className="btn w-72 rounded-full event-btn">Ticket & Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default IndividualEvents;