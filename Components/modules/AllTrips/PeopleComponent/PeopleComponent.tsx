import Gallery from '@/Components/Gallery/Gallery';
import GallerySection from '@/Components/GallerySection/GallerySection';
import { DataContext } from '@/Context/ContextProvider';
import React, { useContext, useEffect, useState } from 'react';
import PeopleCardComponent from '../../PeopleCardComponent/PeopleCardComponent';
import image from '../../../../assets/images/WomanTakingPicture.png'
import { People } from '@/Context/Services/Functions/Api';

const PeopleComponent = () => {
    interface PersonData {
        first_name: string;
        career: string;
        education: string;
        livingIn: string;
        personality_type: string;
        instagram: string;
        workout: string;
        image: any;
    }
    const [nearby, setNearby] = useState<PersonData[]>([]);
    const [eligible, setEligible] = useState<PersonData[]>([]);
    const [views, setViews] = useState<PersonData[]>([]);

    useEffect(() => {
        People().then((res) => {
            console.log(res);
            setNearby(res.data.trip_Nearby);
            setEligible(res.data.most_eligible)
            setViews(res.data.views)
        });
    }, []);

    const tabs = [
        {
            title: 'Nearby',
            content: (
                <div className='flex flex-wrap justify-content-around my-5' style={{ rowGap: '50px' }}>
                    {nearby.length > 0 ? (
                        nearby.map((item) => (
                            <div key={item?.first_name}>
                                {item?.first_name && (
                                    <PeopleCardComponent
                                        name={item?.first_name}
                                        career={item?.career || 'unknown'}
                                        education={item?.education || 'unknown'}
                                        livingIn={item?.livingIn || 'unknown'}
                                        personality={item?.personality_type || 'unknown'}
                                        socialMedia={item?.instagram || 'unknown'}
                                        pets='none'
                                        workout={item?.workout || 'unknown'}
                                        image={image}
                                    />
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No nearby people found.</p>
                    )}
                </div>
            ),
        },
        {
            title: 'Most Eligible',
            content: (
                <div className='flex flex-wrap justify-content-around my-5' style={{ rowGap: '50px' }}>
                    {eligible.length > 0 ? (
                        eligible.map((item) => (
                            <div key={item?.first_name}>
                                {item?.first_name && (
                                    <PeopleCardComponent
                                        name={item?.first_name}
                                        career={item?.career || 'unknown'}
                                        education={item?.education || 'unknown'}
                                        livingIn={item?.livingIn || 'unknown'}
                                        personality={item?.personality_type || 'unknown'}
                                        socialMedia={item?.instagram || 'unknown'}
                                        pets='none'
                                        workout={item?.workout || 'unknown'}
                                        image={image}
                                    />
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No eligible people found.</p>
                    )}
                </div>
            ),
        },
        {
            title: 'Views',
            content: (
                <div className='flex flex-wrap justify-content-around my-5' style={{ rowGap: '50px' }}>
                    {views.length > 0 ? (
                        views.map((item) => (
                            <div key={item?.first_name}>
                                {item?.first_name && (
                                    <PeopleCardComponent
                                        name={item?.first_name}
                                        career={item?.career || 'unknown'}
                                        education={item?.education || 'unknown'}
                                        livingIn={item?.livingIn || 'unknown'}
                                        personality={item?.personality_type || 'unknown'}
                                        socialMedia={item?.instagram || 'unknown'}
                                        pets='none'
                                        workout={item?.workout || 'unknown'}
                                        image={image}
                                    />
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No views found.</p>
                    )}
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
