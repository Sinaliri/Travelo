import React from 'react';
import link from '../../../../assets/icons/link.svg'
import voice from '../../../../assets/icons/voice.svg'
import Image from 'next/image';

const MessageInput = () => {
    return (
        <div className='MessageInput absolute bottom-0 w-full'>
            <input placeholder='write a a message...' className='w-full outline-none'
            style={{border : 'none' , padding : '12px 35px'}}
            />
            <Image src={link} alt='link' className='absolute cursor-pointer' style={{left : '8px' , top : '12px'}}/>
            <Image src={voice} alt='link' className='absolute cursor-pointer' style={{right : '8px' , top : '8px'}}/>
        </div>
    );
};

export default MessageInput;