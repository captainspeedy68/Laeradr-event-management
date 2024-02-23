import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredServicesIds } from '../../utility/LocalStorage';
import IndividualOrders from './IndividualOrders';

const Orders = () => {
    // const services = useLoaderData();
    const [services, setServices] = useState([]);
    const [events, setEvents] = useState([]);
    const [storedServicesIds, setStoredServicesIds] = useState([]);
    const [storedEvents, setStoredEvents] = useState([])
    useEffect(() => {

        fetch('/services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services data:', error));

        fetch('/events.json')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error fetching events data:', error));
    }, []);


    // a better use effect
    useEffect(() => {
        const fetchStoredIds = async () => {
            const ids = await getStoredServicesIds("service");
            const eventIds = await getStoredServicesIds("event");
            setStoredServicesIds(ids);
            setStoredEvents(eventIds);
        };
        fetchStoredIds();
    }, []);

    const orderedServices = services.filter(service => storedServicesIds.includes(service.id));
    const orderedEvents = events.filter(event => storedEvents.includes(event.id));

    return (
        <div className='my-10'>
            <div className='mx-auto md:flex flex-col items-center justify-center '>
                <div className=''>
                    {
                        (orderedServices.length > 0) &&
                        <h1 className='font-extrabold text-2xl text-center'>Ordered Services: {orderedServices.length}</h1>
                    }

                    {orderedServices.map(service => (
                        <IndividualOrders key={service.id} service={service}></IndividualOrders>
                    ))}
                </div>

            </div>
            <hr />
            <div className='mx-auto md:flex flex-col items-center justify-center'>
                {
                    (orderedEvents.length > 0) &&
                    <h1 className='font-extrabold text-2xl text-center'>Conference Tickets: {orderedEvents.length}</h1>
                }

                <div className=''>

                    {orderedEvents.map(event => (
                        <IndividualOrders key={event.id} service={event}></IndividualOrders>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Orders;
