import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Services from '../Services/Services';
import Banner from './Banner';

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
            <Banner services = {services}></Banner>
            <Services services={services}></Services>        
            </div>
    );
};

export default Home;