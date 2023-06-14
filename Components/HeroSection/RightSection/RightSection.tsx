import React from 'react';
import DriverCard from './DriverCard/DriverCard';
import styles from "./RightSection.module.scss";

const RightSection = () => {
    const driverCards = [];

    for (let i = 0; i < 7; i++) {
        driverCards.push(<DriverCard key={i} />);
    }

    return (
        <div className={`RightSection ml-auto px-3 py-2 overflow-auto custom-scrollbar ${styles.RightSection}`
        }
            style={{ width: 'fit-content', background: '#424642' }}>
            <h4 className='RightSection__title text-white py-1 px-2 my-2 font-medium text-sm'
                style={{ background: '#000000', borderRadius: '50px' }}> meet our best drivers! </h4>

            <input placeholder='Please enter your location' className='text-white outline-none'
                style={{ border: 'none', borderBottom: '1px solid #FFFFFF', background: 'transparent' }}
            />

            <div>
                {driverCards}
            </div>
        </div >
    );
};

export default RightSection;
