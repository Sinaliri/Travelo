import Image from 'next/image';
import React from 'react';
import pointer from '../../../assets/images/pointer.svg'

const CommonButton = () => {
    return (
        <div className='bg-white text-xs flex  align-items-center cursor-pointer'
            style={{ color: '#000000', padding: '10px 15px', gap: '10px', borderRadius: '10px' }}
        >
            Sign up as a student!
            <Image src={pointer} alt='' />
        </div>
    );
};

export default CommonButton;