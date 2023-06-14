import React from 'react';
import RightSection from './RightSection/RightSection';
import MainSection from './MainSection/MainSection';

const HeroSection = () => {
    return (
        <div style={{ fontFamily: 'Inter' , maxHeight : '700px' }} className='flex'>
            <MainSection />
            <RightSection />
        </div>
    );
};

export default HeroSection;