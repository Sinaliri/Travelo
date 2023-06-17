import React from 'react';
import DriverCard from './DriverCard/DriverCard';
import styles from "./RightSection.module.scss";
 import { ITrip } from '@/Context/Services/Functions/interfaces';

const RightSection = (props: {Driver:any}) => {
    const {Driver} =props;

   

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
                {/* {driverCards } */}
                {
                    Driver &&
                    Driver.map((item:any)=>{
                        return <DriverCard key={item.index} rate={item.rate} image={item.trip_owner_image}/>
                    })
                }
            </div>
        </div >
    );
};

export default RightSection;
