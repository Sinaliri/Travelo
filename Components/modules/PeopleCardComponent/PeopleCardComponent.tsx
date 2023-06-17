import Image from 'next/image';
import React from 'react';

interface PersonData {
    name: string;
    career: string;
    education: string;
    livingIn: string;
    personality: string;
    socialMedia: string;
    pets: string;
    workout: string;
    image: any;
}

interface PeopleCardComponentProps extends PersonData { }

const PeopleCardComponent = (props: PeopleCardComponentProps) => {
    const {
        name,
        career,
        education,
        livingIn,
        personality,
        socialMedia,
        pets,
        workout,
        image,
    } = props;

    return (
        <div className="PeopleCardComponent py-7 px-4" style={{ background: '#CFCFCF', width: 'fit-content', borderRadius: '50px' }}>
            <div className='text-sm'>
                <h3 className='mb-4 text-xl font-normal'>{name}</h3>
                <div className='flex'>
                    <div className='mr-4'>
                        <Image src={image} alt='' style={{ width: '200px', height: '150px' }} />
                    </div>
                    <div className='flex flex-column justify-content-between'>
                        <p>Career: {career}</p>
                        <p>Education: {education}</p>
                        <p>Living in: {livingIn}</p>
                        <p>Personality: {personality}</p>
                        <p>Social Media: {socialMedia}</p>
                        <p>Pets: {pets}</p>
                        <p>Workout: {workout}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleCardComponent;
