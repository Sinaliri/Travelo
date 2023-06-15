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
    image: any
}

const PeopleCardComponent = (props: {
    data: PersonData[];
}) => {
    const { data } = props;

    return (
        <div className="PeopleCardComponent py-7 px-4" style={{ background: '#CFCFCF', width: 'fit-content', borderRadius: '50px' }}>
            {data.map((person, index) => (
                <div key={index} className='text-sm'>
                    <h3 className='mb-4 text-xl font-normal'>{person.name}</h3>
                    <div className='flex'>
                        <div className='mr-4'>
                            <Image src={person.image} alt='' style={{width : '200px' , height : '150px'}}/>
                        </div>
                        <div className='flex flex-column justify-content-between'>
                            <p>Career: {person.career}</p>
                            <p>Education: {person.education}</p>
                            <p>Living in: {person.livingIn}</p>
                            <p>Personality: {person.personality}</p>
                            <p>Social Media: {person.socialMedia}</p>
                            <p>Pets: {person.pets}</p>
                            <p>Workout: {person.workout}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PeopleCardComponent;
