import React, { useState } from 'react';
import { useEffect } from 'react';
import IndividualEvents from '../Events/IndividualEvents';
import IndividualService from './IndividualService';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='md:grid grid-cols-3 mx-auto gap-1'>

                {
                    services.map(service => <IndividualService key={service.id} service={service}></IndividualService>)
                }
            </div>
        </div>

    );
};

export default Services;