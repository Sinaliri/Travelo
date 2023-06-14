import React from 'react';
import AvailableTripsCard from './AvailableTripsCard/AvailableTripsCard';
import CommonButtonWithRadius from '../CommonComponents/CommonButtonWithRadius/CommonButtonWithRadius';

const AvailableTrips = () => {
    const tripCards = Array.from({ length: 3 }, (_, index) => (
        <AvailableTripsCard key={index} />
    ));

    return (
        <div className='px-4 my-5 align-items-center'>
            <h2 className='text-3xl font-normal'> Available trips for Now! </h2>
            <div className='flex align-items-center' style={{gap : '230px'}}> 
                <div className='my-3 flex' style={{ gap: '20px' }}>
                    {tripCards}
                </div>
                <CommonButtonWithRadius text='More' bgColor='#D9D9D9' />
            </div>
        </div>
    );
};

export default AvailableTrips;
