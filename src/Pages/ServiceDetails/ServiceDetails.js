import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    return (
        <div>
            <h1>
               service details of {serviceId}
            </h1>
            
        </div>
    );
};

export default ServiceDetails;