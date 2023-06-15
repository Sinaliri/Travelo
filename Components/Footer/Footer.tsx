import React from 'react';
import instagram from '../../assets/images/instagram3D.svg'
import facebook from '../../assets/images/facebook3D.svg'
import whatsapp from '../../assets/images/whatsapp3D.svg'
import Image from 'next/image';

const Footer = () => {
    const items = ['Profile', 'Creat a trip!', 'Find your favorite ones!', 'Settings']
    const socialMedia = [instagram, facebook, whatsapp]
    return (
        <div className='Footer p-6 flex flex-row'
            style={{ background: '#CBCBCB', gap: '100px' }}>
            <div className='Footer__about flex-1'>
                <h3 className='text-2xl font-normal mb-4'> About </h3>
                <p className='text-xs'>
                    Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no rejoiced. End friendship sufficient assistance can prosperous met. As game he show it park do. Was has unknown few certain ten promise. No finished my an likewise cheerful packages we.
                </p>
            </div>

            <div className='Footer_QuickLinks flex-1'>
                <h3 className='text-2xl font-normal mb-4'> Quick Links </h3>
                <div className='text-lg flex flex-column'
                    style={{ gap: '10px' }}
                >
                    {items.map((item) => {
                        return (
                            <div>
                                {item}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className='Footer_additionalLinks flex-1'>
                <h3 className='text-2xl font-normal mb-4'> TRAVELO </h3>
                <div className='flex'>
                    <h4 className='text-xs font-normal'
                        style={{ color: '#515151' }}
                    > 2023 </h4>
                    <hr className='mx-2' style={{ backgroundColor: '#515151' }} />
                    <h4 className='text-xs font-normal'> Privacy policy </h4>
                </div>
                <h4 className='text-xs font-normal mt-1' style={{ color: '#515151' }}> All Rights Reserved</h4>
                <h4 className='text-lg mt-3 font-normal'> Let’s socialize! </h4>
                <div>
                    {socialMedia.map((item) => {
                        return (
                            <Image src={item} alt='' width={40} />
                        )
                    })}
                </div>

                <h4 className='text-lg mt-3 font-normal'> Customer support </h4>
                <h4 className='text-lg mt-2 font-normal'> 0912-112-1212 </h4>

            </div>
        </div>
    );
};

export default Footer;