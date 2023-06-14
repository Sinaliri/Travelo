import React from 'react';
import CommonButtonWithRadius from '../CommonComponents/CommonButtonWithRadius/CommonButtonWithRadius';
import tripImage from '../../assets/images/TripImage.png'
import tripImage2 from '../../assets/images/TripImage2.png'
import tripImage3 from '../../assets/images/TripImage3.png'
import tripImage4 from '../../assets/images/TripImage4.png'
import tripImage5 from '../../assets/images/TripImage5.png'
import tripImage6 from '../../assets/images/TripImage6.png'
import Image from 'next/image';

const GallerySection = () => {
    const images = [tripImage, tripImage2, tripImage3, tripImage4, tripImage5, tripImage6]
    return (
        <div className='GallerySection mx-4 mb-5'>
            <div className='flex justify-content-between'>
                <div className='flex align-items-baseline'>
                    <h3 className='text-3xl font-normal'> Our Gallery </h3>
                    <h4 className='text-base font-normal ml-4'> Share your happy moments </h4>
                </div>
                <div>
                    <CommonButtonWithRadius text='view all' bgColor='#D9D9D9' bothSideRadius={true} />
                </div>
            </div>

            <div className='flex flex-wrap justify-content-around'
            style={{gap : '20px'}}>
                {images.map((item) => {
                    return (
                        <Image src={item} alt='' />
                    )
                })}
            </div>
        </div>
    );
};

export default GallerySection;