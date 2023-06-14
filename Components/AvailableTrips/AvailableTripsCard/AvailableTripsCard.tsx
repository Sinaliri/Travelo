import React from 'react';
import save from '../../../assets/images/Save.svg'
import Image from 'next/image';
import CommonButtonWithRadius from '@/Components/CommonComponents/CommonButtonWithRadius/CommonButtonWithRadius';

const AvailableTripsCard = () => {
    return (
        <div className='AvailableTripsCard flex flex-column p-5'
            style={{ background: '#D9D9D9', width: 'fit-content', borderRadius: '40px' }}
        >
            <div className='flex'>
                <div>
                    <img src='https://xsgames.co/randomusers/avatar.php?g=male'
                        style={{ borderRadius: '50%', width: '5rem', height: '5rem' }} />
                </div>
                <div className='flex flex-column ml-3' style={{ gap: '10px' }}>
                    <h3 className='text-xl font-normal'> Semnan  Tehran </h3>
                    <h3 className='text-base font-normal'> Alireza Kiani </h3>
                    <h4 className='text-base font-normal'> 100 T </h4>
                </div>
            </div>

            <div className='flex justify-content-between align-items-center mt-3'>
                <Image src={save} alt='' style={{width : '18px'}} />
                <CommonButtonWithRadius text='More Info' bgColor='#fff' />
            </div>
        </div>
    );
};

export default AvailableTripsCard;