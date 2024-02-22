import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Services from '../Services/Services';
import Banner from './Banner';
import Us from './Us';
import Marquee from "react-fast-marquee";
import Messages from './Messages/Messages';
const Home = () => {
    const { user } = useContext(AuthContext);
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const elementImage = services[2]?.image_url
    return (
        <div className='m-0 p-0'>
            <Banner services={services}></Banner>
            <Marquee speed={80} className='relative top-72 my-10'>
                {user ? <p className='text-md font-bold text-[#878787] mx-5 mt-10'><span className='font-extrabold'>Breaking News: </span>30% Off In June~July For All Tech Events</p>
                    :
                    <p className='text-lg font-bold text-[#878787] mx-5 mt-10'><span className='font-extrabold'>Notice: </span> Login / Register to see more features!</p>
                }
            </Marquee>
            <hr className='relative top-80 my-10 border-1 border-[#fdac2e]' />
            <div className='lg:grid grid-cols-2 mx-auto my-10'>
                <Us></Us>
                <Services services={services}></Services>
            </div>
            <hr className='border-1 border-[#FDAC2E]' />
            <Messages className="mx-auto"></Messages>
        </div>
    );
};

export default Home;