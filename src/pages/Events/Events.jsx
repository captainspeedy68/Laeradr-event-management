import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import IndividualEvents from './IndividualEvents';

const Events = () => {
    const [displayEvents, setDisplayEvents] = useState([]);
    useEffect(() => {
        fetch("/events.json")
        .then(res => res.json())
        .then(data => setDisplayEvents(data))
    }, [])
    return (
        // here I shall add the events that attendees can join by paying for the tickets
        // <div className='md:grid md:grid-cols-3 max-lg:grid-cols-2 gap-2'>
        <div className='md:grid grid-cols-1 lg:grid-cols-3 lg:gap-2 max-lg:grid-cols-2 max-lg:gap-2 my-10 mx-auto'>
            {
                displayEvents.map(event => <IndividualEvents key={event.id} event = {event}></IndividualEvents>)
            }
        </div>
    );
};

export default Events;<h1>an event going on here</h1>