import React from 'react';
import CommonButtonWithRadius from '../CommonComponents/CommonButtonWithRadius/CommonButtonWithRadius';
import tripImage from '../../assets/images/TripImage.png';
import tripImage2 from '../../assets/images/TripImage2.png';
import tripImage3 from '../../assets/images/TripImage3.png';
import tripImage4 from '../../assets/images/TripImage4.png';
import tripImage5 from '../../assets/images/TripImage5.png';
import tripImage6 from '../../assets/images/TripImage6.png';
import Image from 'next/image';
import like from '../../assets/icons/Like.svg'
import dislike from '../../assets/icons/dislike.svg'


const GallerySection = (props: {
    introduction?: boolean;
    generateRandomOrder?: boolean;
}) => {
    const { introduction, generateRandomOrder } = props;
    const images = [tripImage, tripImage2, tripImage3, tripImage4, tripImage5, tripImage6];

    if (generateRandomOrder) {
        images.sort(() => Math.random() - 0.5);
    }

    return (
        <div className="GallerySection mx-4 mb-5">
            {introduction && (
                <div className="flex justify-content-between">
                    <div className="flex align-items-baseline mb-5 mt-3">
                        <h3 className="text-3xl font-normal"> Our Gallery </h3>
                        <h4 className="text-base font-normal ml-4"> Share your happy moments </h4>
                    </div>
                    <div>
                        <CommonButtonWithRadius text="view all" bgColor="#D9D9D9" bothSideRadius={true} />
                    </div>
                </div>
            )}
            <div className="flex flex-wrap justify-content-around" style={{ gap: '20px' }}>
                {images.map((item, index) => {
                    return (
                        <div className='relative'>
                            <div className='absolute right-0 bottom-0'
                                style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '10px 25px', borderRadius: '50px 0px' }}>
                                <div className='flex'>
                                    <div className='flex'>
                                        <Image src={like} alt='' className='mr-1' />
                                        <div> 32 </div>
                                    </div>
                                    <div className='flex ml-3'>
                                        <Image src={dislike} alt='' className='mr-1' />
                                        <div> 5 </div>
                                    </div>
                                </div>
                            </div>
                            <Image key={index} src={item} alt="" className='h-full'
                                style={{ objectFit: 'cover', borderRadius: '50px' }} />
                        </div>

                    )
                })}
            </div>
        </div>
    );
};

export default GallerySection;
