import React, { ChangeEvent, useEffect, useState } from 'react';
import save from '../../../assets/images/Save.svg'
import unsave from '../../../assets/icons/selectedBookmark.svg'
import Image from 'next/image';
import CommonButtonWithRadius from '@/Components/CommonComponents/CommonButtonWithRadius/CommonButtonWithRadius';
import { AddToFavorite_api } from '@/Context/Services/Functions/Api';

const AvailableTripsCard = (props:{from:string,to:string,price:number,ownername:string,image:string ,id:number }) => {
  const [active,setActive]=useState(false);
    const addtoFavorite=(event:ChangeEvent<HTMLElement>)=>{
        console.log(event.target);
        setActive(true)
        AddToFavorite_api(event.target.id).then((res) => {
            console.log(res)
        })

    }
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
                <Image id={props.id.toString()} src={!active ? save : unsave } alt='make bookmark' style={{width : '18px'}} onClick={addtoFavorite}/>
                <CommonButtonWithRadius text='More Info' bgColor='#fff' />
            </div>
        </div>
    );
};

export default AvailableTripsCard;