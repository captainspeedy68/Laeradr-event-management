import React from 'react';

const IndividualService = ({ service }) => {
    const { name, description } = service;
    return (
        <div className='mx-auto'>
            <div className="group hero min-h-44" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay group-hover:bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white h-full w-full opacity-90"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 font-bold text-white">{name}</h1>
                        <p className="mb-5 text-white">{description}</p>
                        <button className="btn nav-clickable text-white">Purchase</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default IndividualService;