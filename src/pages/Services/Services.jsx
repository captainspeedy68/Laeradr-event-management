import React, { useState } from 'react';
import { useEffect } from 'react';
import IndividualEvents from '../Events/IndividualEvents';
import IndividualService from './IndividualService';

const Services = ({services}) => {

    return (
        <div className='relative z-10 md:mt-80 mx-auto'>
            <h2 className='text-[#878787] text-lg uppercase tracking-wide text-center mb-5'>Our Services</h2>
            <div className='md:grid grid-cols-3 mx-auto gap-y-0 w-fit gap-x-0'>

                {
                    services.map(service =><IndividualService className = "m-0 p-0" key={service.id} service={service}></IndividualService>)
                }
            </div>
        </div>

    );
};

export default Services;