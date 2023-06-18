import React from 'react';
import HeaderPic from '../../../assets/images/HeaderPic.png'
import Image from 'next/image';
import pointer from '../../../assets/images/pointer.svg'
import CommonButton from '@/Components/CommonComponents/CommonButton/CommonButton';
import home from '../../../assets/images/home.svg'
import Link from 'next/link';

const MainSection = () => {
    const names = [
        {text:'Dashboard',link_url:"./profile/Dashboard"},
        {text:'Create a trip!',link_url:"./create-trip"},
        {text:'Find your favorite ones!',link_url:"./people"},
        {text:'Available trips',link_url:"./availabletrips"},
       
    ];

    return (
        <div className='MainSection flex-1'>
            <div className='h-full relative'>
                <Image src={HeaderPic} alt='' className='w-full h-full' style={{ objectFit: 'cover' }} />
                <div className='absolute' style={{ top: '15px', right: '30px' }}>
                    <CommonButton />
                </div>
                <div className='w-5 absolute h-full text-white flex align-items-center px-4'
                    style={{ background: 'rgba(0, 0, 0, 0.5)', top: '0', width: 'fit-content' }}
                >
                    <h2 className='text-7xl font-normal'> Safe and Easy! </h2>
                </div>

                <ul className='absolute list-none flex-wrap top-0 text-white flex text-xs justify-content-evenly w-5'
                    style={{ marginTop: '10px' }}
                >
                    {names.map((name, index) => (
                        <li className='cursor-pointer flex align-items-center text-white' key={index}>
                            {index === 0 && <Image src={home} alt='Home' className='mr-2' />}
                            <Link className='text-white' href={name.link_url}>{name.text}</Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default MainSection;
