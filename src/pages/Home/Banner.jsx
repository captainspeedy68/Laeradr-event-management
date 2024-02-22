import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import GoogleButton from '../../shared/GoogleButton/GoogleButton';
const Banner = ({ services }) => {
    const imageUrl = services[7]?.image_url;
    const {user} = useContext(AuthContext)
    return (
        <div className='mx-auto my-10'>
            {imageUrl && (
                <div
                    className='absolute inset-0 z-0 bg-cover bg-center max-h-96 mx-auto'
                    style={{ backgroundImage: `url(${imageUrl})` }}
                >
                    <div className="hero-overlay bg-opacity-65 bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white h-full w-full opacity-40">
                        {/* Overlay content goes here */}
                    </div>

                    <div className="absolute flex justify-center items-center top-1/2 lg:-translate-y-1/2 left-1/2 transform -translate-x-1/2 overflow-hidden">
                        <div className="flex flex-col justify-center items-center space-y-4 text-center">
                            <h1 className="text-3xl lg:text-5xl font-bold text-white my-8">Manage Your Events!</h1>
                            {
                                !user && <GoogleButton></GoogleButton>
                            }

                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Banner;
