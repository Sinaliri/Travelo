import React from 'react';
import save from '../../../assets/images/Save.svg'
import Image from 'next/image';
import CommonButtonWithRadius from '@/Components/CommonComponents/CommonButtonWithRadius/CommonButtonWithRadius';

const AvailableTripsCard = (props:{from:string,to:string,price:number,ownername:string,image:string }) => {
   console.log(props.image)
    return (
        <div className='AvailableTripsCard flex flex-column p-5'
            style={{ background: '#D9D9D9', width: 'fit-content', borderRadius: '40px' }}
        >
            <div className='flex'>
                <div>
                    <img src={`http://localhost:8000/${props.image}`}
                        style={{ borderRadius: '50%', width: '5rem', height: '5rem' }} />
                </div>
                <div className='flex flex-column ml-3' style={{ gap: '10px' }}>
                    <h3 className='text-xl font-normal'> {props.from} {`>`} {props.to} </h3>
                    <h3 className='text-base font-normal'> {props.ownername} </h3>
                    <h4 className='text-base font-normal'> {props.price} T </h4>
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