import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Us = () => {
    return (
        <div className='mx-5 md:mx-auto border-3 relative z-10 mt-80 max-md:text-center'>
            <h2 className='text-[#878787] text-center text-lg uppercase tracking-widest'>We are Læraðr</h2>
            <h2 className='font-normal text-5xl mt-5 mb-11'><span className='font-black'>No.1</span> Events Management </h2>
            <h3 className='text-[#878787] tracking-wide font-normal text-md'>Welcome to Læraðr, where seamless and unforgettable corporate events come to life. Our dedicated team specializes in orchestrating every aspect of your event, from meticulous planning to flawless execution. With a keen eye for detail and a passion for innovation, we transform your vision into reality, ensuring a memorable and impactful experience for you and your guests. Whether it's a grand product launch, an engaging team-building retreat, or an elegant gala dinner, trust us to elevate your corporate events to new heights.</h3>
            <NavLink to={"/about"}><button className='btn bg-[#FFA328] my-5'>About Us</button></NavLink>
        </div>
    );
};

export default Us;