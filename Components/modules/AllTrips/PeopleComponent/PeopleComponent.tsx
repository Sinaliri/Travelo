import Gallery from '@/Components/Gallery/Gallery';
import GallerySection from '@/Components/GallerySection/GallerySection';
import { DataContext } from '@/Context/ContextProvider';
import React, { useContext } from 'react';
import PeopleCardComponent from '../../PeopleCardComponent/PeopleCardComponent';
import image from '../../../../assets/images/WomanTakingPicture.png'

const PeopleComponent = () => {

    const data = [
        {
            name: 'John Doe',
            career: 'Software Developer',
            education: 'Master of Science in Computer Science',
            livingIn: 'New York, USA',
            personality: 'Friendly and outgoing',
            socialMedia: 'Twitter: @johndoe',
            pets: 'Has a pet dog',
            workout: 'Enjoys working out',
            image: image
        },
    ];


    const data2 = [
        {
            name: 'Jim Stan',
            career: 'Back-end Developer',
            education: 'Master of Science in Computer Science',
            livingIn: 'New Jersey, USA',
            personality: 'Friendly and outgoing',
            socialMedia: 'Twitter: @JimStan',
            pets: 'none',
            workout: 'Enjoys working out',
            image: image
        },
    ];

    const tabs = [
        {
            title: 'Nearby',
            content: (
                <div className='flex flex-wrap justify-content-around my-5' style={{ rowGap: '50px' }}>
                    <PeopleCardComponent data={data} />
                    <PeopleCardComponent data={data} />
                    <PeopleCardComponent data={data} />
                    <PeopleCardComponent data={data} />
                    <PeopleCardComponent data={data} />
                    <PeopleCardComponent data={data} />
                    <PeopleCardComponent data={data} />
                    <PeopleCardComponent data={data} />

                </div>
            ),
        },
        {
            title: 'Most Eligible',
            content: (
                <div className='flex flex-wrap justify-content-around my-5' style={{ rowGap: '50px' }}>
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />

                </div>
            ),
        },
        {
            title: 'Views',
            content: (
                <div className='flex flex-wrap justify-content-around my-5' style={{ rowGap: '50px' }}>
                    
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />
                    <PeopleCardComponent data={data2} />

                </div>
            ),
        },
    ];
    return (
        <div>
            <Gallery title="Find your favorite ones!" description="" tabs={tabs} />
        </div>
    );
};

export default PeopleComponent;
