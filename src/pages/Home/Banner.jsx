import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ services }) => {
    const imageUrl = services[7]?.image_url;

    return (
        <div className='mx-auto my-10'>
            {imageUrl && (
                <div
                    className='absolute inset-0 z-0 bg-cover bg-center h-96 mx-auto'
                    style={{ backgroundImage: `url(${imageUrl})` }}
                >
                    <div className="hero-overlay bg-opacity-65 bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white h-full w-full opacity-40">
                        {/* Overlay content goes here */}
                    </div>

                    <div className="absolute flex justify-center items-center top-1/2 transform -translate-y-1/2 left-1/2 transform -translate-x-1/2 overflow-hidden">
                        <div className="flex flex-col space-y-4 text-center">
                            <h1 className="text-5xl font-bold text-white">Manage Your Events!</h1>
                            <button className="p-3 bg-[#ff530a] text-white font-bold h-full rounded-2xl shadow-lg hover:bg-[#FF7418]">Button 1</button>
                            <button className="p-3 h-full bg-[#ff530a] text-white font-bold rounded-2xl shadow-lg hover:bg-[#FF7418]">Button 2</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Banner;
