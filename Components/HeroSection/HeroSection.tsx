import React from 'react';
import RightSection from './RightSection/RightSection';
import MainSection from './MainSection/MainSection';
import { ITrip } from '@/Context/Services/Functions/interfaces';

const HeroSection = (props: {Driver:ITrip} ) => {
    return (
        <div style={{ fontFamily: 'Inter' , maxHeight : '700px' }} className='flex'>
            <MainSection />
            <RightSection Driver={props.Driver} />
        </div>
    );
};

export default HeroSection;