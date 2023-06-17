import React from 'react';
import Image from 'next/image';
import CommonButtonWithRadius from '../CommonComponents/CommonButtonWithRadius/CommonButtonWithRadius';

interface FeatureItem {
    text: string;
    fontSize: string;
}

interface FeaturesSectionProps {
    image: any;
    featureItems: FeatureItem[];
    
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ image, featureItems }) => {
    return (
        <div className='FeaturesSection mb-4 flex flex-row mx-4' style={{ background: '#D9D9D9', borderRadius: '50px' }}>
            <div style={{ flex: '1' }}>
                <Image src={image} alt='' />
            </div>
            <div style={{ flex: '2' }}>
                <div className='flex flex-column gap-4 m-6'>
                    {featureItems.map((item, index) => (
                        <h3 key={index} className={`text-${item.fontSize} font-normal`}>{item.text}</h3>
                    ))}
                </div>
                <div className='flex justify-content-center'>
                    <CommonButtonWithRadius text='Choose a trip!' bgColor='#fff' bothSideRadius={true} fontSize={20} />
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
