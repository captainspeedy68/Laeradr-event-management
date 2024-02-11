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
        <div className='grid grid-cols-3 gap-2'>
            {
                displayEvents.map(event => <IndividualEvents key={event.id} event = {event}></IndividualEvents>)
            }
        </div>
    );
};

export default Events;<h1>an event going on here</h1>