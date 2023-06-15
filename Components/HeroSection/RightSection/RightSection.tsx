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
            style={{ width: 'fit-content', background: '#CFCFCF' }}>
            <h4 className='RightSection__title py-1 px-2 my-2 font-medium text-sm'
                style={{ borderRadius: '50px', color: '#00000' }}> meet our best drivers! </h4>

            <input placeholder='Please enter your location' className='RightSection__input outline-none'
                style={{ border: 'none', borderBottom: '2px solid #000000', color: '#000000', background: 'transparent' }}
            />

            <div>
                {driverCards}
            </div>
        </div >
    );
};

export default RightSection;
