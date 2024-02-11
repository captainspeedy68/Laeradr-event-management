import React from 'react';

const IndividualEvents = ({ event }) => {
    const { name, description } = event;
    return (
        <div className='event-border'>
            <div className="card w-96 bg-base-100 shadow-xl rounded-none event-hover">
                <figure className="px-10 pt-10">
                    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions">
                        <button className="btn w-72 rounded-full event-btn">Ticket & Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndividualEvents;