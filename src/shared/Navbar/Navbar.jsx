import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserLarge } from "react-icons/fa6";
import Logout from '../Logout/Logout';
import RegisterButton from '../RegisterButton/RegisterButton';
import LoginButton from '../LoginButton/LoginButton';
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isSticky, setIsSticky] = useState(false);
    const [userWithGoogle, setUserWithGoogle] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset; // Calculate scroll position
            setIsSticky(offset > 0); // Set sticky based on scroll position
        };

        window.addEventListener('scroll', handleScroll); // Add scroll event listener

        return () => {
            window.removeEventListener('scroll', handleScroll); // Remove listener on unmount
        };
    }, []);
    // console.log("from navbar", user)

    const [isBannerVisible, setIsBannerVisible] = useState(false);
    const [clicked, setClicked] = useState(false);
    // const notify = toast("Logged Out!");
    // const handleClick = () => {
    //     setClicked(!clicked);
    //     setTimeout(() => {
    //         setClicked(false);
    //     }, 75);
    // };

    const links = <>
        <li onClick={() => setIsBannerVisible(true)}><NavLink className={` nav-btn ${location.pathname === "/" ? "active " : ""}`} to={"/"} >
            Home
        </NavLink>
        </li>
        <li ><NavLink className={`nav-btn ${location.pathname === "/events" ? "active" : ""}`} to={"/events"}>Events</NavLink></li>
        <li ><NavLink className={`nav-btn ${location.pathname === "/about" ? "active" : ""}`} to={"/about"}>About</NavLink></li>
        <li ><NavLink className={`nav-btn ${location.pathname === "/blogs" ? "active" : ""}`} to={"/blogs"}>Blogs</NavLink></li>
        {
            user && <li ><NavLink className={`nav-btn ${location.pathname === "/orders" ? "active" : ""}`} to={"/orders"}>Orders</NavLink></li>
        }
        {
            user && <li ><NavLink className={`nav-btn ${location.pathname === "/gallery" ? "active" : ""}`} to={"/gallery"}>Gallery</NavLink></li>
        }
    </>;
    return (
        <div className={`navbar my-3 z-50 relative top-3 max-lg:bg-white mx-auto max-lg:justify-between rounded-full ${isSticky ? 'sticky top-0 md:bg-[#707070]' : ''}`}>
            <div className={`navbar-start`}>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 menu menu-sm">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="px-4 py-2 font-bold border-none text-xl text-[#FF5733] flex justify-around items-center md:bg-white rounded-full">
                    <img className='h-10 w-10 mr-2 max-md:hidden' src='/ygg.png'></img>
                    <span className='uppercase'>Læraðr</span></a>
            </div>
            <div className="navbar-center hidden lg:flex align-middle items-center">
                <ul className="menu-horizontal xl:px-10 flex justify-between ">
                    {
                        links
                    }
                </ul>
            </div>

            <div className={`flex xl:navbar-end items-center`}>

                {
                    user ?
                        <>
                            {
                                (user && !user.displayName) ?
                                    <div className='nav-user'>
                                        <p className='text-[#FF5733] text-xl font-bold max-md:hidden'>{user.email}</p>
                                        <Logout nav={false}></Logout>
                                    </div>
                                    :
                                    <div className='nav-user'>
                                        {
                                            (user && user.displayName) &&
                                            <p className='text-[#FF5733] max-md:hidden text-xl font-bold'>{user.displayName}</p>
                                        }
                                        <details className='flex justify-center items-center mx-3 relative'>
                                            <summary className='flex'>
                                                {user?.photoURL &&
                                                    <img className='icon border-4 h-14 w-14 mr-2 rounded-full' src={user.photoURL} alt="" />
                                                }
                                            </summary>
                                            {
                                                user &&
                                                <Logout nav={true}></Logout>
                                            }
                                        </details>
                                    </div>
                            }

                        </>
                        :
                        <>
                            {
                                (!location.pathname.includes("/login")) && <LoginButton></LoginButton>
                            }

                            {
                                (!location.pathname.includes("/register")) && <RegisterButton></RegisterButton>
                            }
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;