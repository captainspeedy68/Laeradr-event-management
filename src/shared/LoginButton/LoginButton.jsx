import React from 'react';
import { FaUserLarge } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const LoginButton = () => {
    return (
        <div title='Login' className='flex justify-center items-center md:mx-3 relative'>
            <Link className='block' to={"/login"}>
                <summary className='icon bg-[#FFBE31] text-white'><FaUserLarge className='h-7 w-7' /></summary></Link>
        </div>
    );
};

export default LoginButton;