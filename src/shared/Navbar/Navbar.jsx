import React from 'react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isBannerVisible, setIsBannerVisible] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
        setTimeout(() => {
            setClicked(false);
        }, 75);
    };

    const links = <>
        <li onClick={() => setIsBannerVisible(true)}><NavLink className={`bg-white active-link btn min-h-4 h-8 mx-1 border-none shadow-none hover:bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% hover:text-white ${location.pathname === "/" ? "bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white " : ""}`} to={"/"} >
            Home
        </NavLink>
        </li>
        <li onClick={() => setIsBannerVisible(false)}><NavLink className={`bg-white active-link btn min-h-4 h-8 mx-1 border-none shadow-none hover:bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% hover:text-white ${location.pathname === "/events" ? "bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white " : ""}`} to={"/events"}>Events</NavLink></li>
        <li onClick={() => setIsBannerVisible(false)}><NavLink className={`bg-white active-link btn min-h-4 h-8 mx-1 border-none shadow-none hover:bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% hover:text-white ${location.pathname === "/about" ? "bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white " : ""}`} to={"/about"}>About</NavLink></li>
        <li onClick={() => setIsBannerVisible(false)}><NavLink className={`bg-white active-link btn min-h-4 h-8 mx-1 border-none shadow-none hover:bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% hover:text-white ${location.pathname === "/blog" ? "bg-gradient-to-r from-[#ff530a] from-20% via-[#FF7418] via-60% to-[#FFA328] to-95% text-white " : ""}`} to={"/blog"}>Blog</NavLink></li>
    </>
    return (
        <div className="navbar my-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 menu menu-sm">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="rounded-md px-4 py-2 font-bold border-none text-xl gradient-text">Event Mangement</a>
            </div>
            <div className="navbar-center hidden lg:flex align-middle items-center">
                <ul className="menu-horizontal px-10 flex justify-between ">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">

                <section className={`relative hover:cursor-pointer ${clicked ? 'scale-105' : ''} transition-transform duration-75 overflow-hidden bg-gradient-to-r from-[#ff530a] via-[#FF7418] to-[#FFA328] border-2 border-transparent rounded-md px-4 py-2 text-white font-semibold shadow-md mx-auto`} onClick={handleClick}><Link to={"/login"}>
                    Login
                    <span className="absolute inset-0 border-2 border-solid border-white rounded-md"></span>
                </Link>
                </section>

                <section className={`relative hover:cursor-pointer ${clicked ? 'scale-105' : ''} transition-transform duration-75 overflow-hidden bg-gradient-to-r from-[#ff530a] via-[#FF7418] to-[#FFA328] border-2 border-transparent rounded-md px-4 py-2 text-white font-semibold shadow-md`} onClick={handleClick}><Link to={"/register"}>
                    Register
                    <span className="absolute inset-0 border-2 border-solid border-white rounded-md"></span>
                </Link>
                </section>

            </div>
        </div>
    );
};

export default Navbar;