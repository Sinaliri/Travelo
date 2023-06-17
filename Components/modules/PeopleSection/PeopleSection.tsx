import React, { useState } from 'react';
import pointer from '../../../assets/icons/pointer.svg';
import Image from 'next/image';
import PeopleSimpleCard from '../PeopleSimpleCard/PeopleSimpleCard';

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
const PeopleSection = (props: {
    mostEligible: PersonData[], nearby: PersonData[], views: PersonData[]
}) => {
    const mostEligible = props.mostEligible
    const nearby = props.nearby
    const views = props.views
    const options = ['Most Eligible', 'Nearby', 'Views'];
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <div className='PeopleSection'>
            <div className='flex align-items-baseline justify-content-between'>
                <div className='flex mt-4' style={{ gap: '70px' }}>
                    {options.map((item) => (
                        <h4
                            key={item}
                            style={{
                                fontSize: '18px',
                                fontWeight: 'normal',
                                color: selectedOption === item ? '#000000' : '#575757',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleOptionClick(item)}
                        >
                            {item}
                        </h4>
                    ))}
                </div>
                <div className='flex align-items-baseline'>
                    <h4 className='font-normal mr-3'>View all</h4>
                    <Image src={pointer} alt='' />
                </div>
            </div>

            {/* Show exclusive content based on the selected option */}
            {selectedOption === 'Most Eligible' && (
                <div className='my-5 flex justify-content-between'>
                    {mostEligible.slice(0, 3).map((item) => (
                        <PeopleSimpleCard key={item.first_name} name={item.first_name} role={item.career} />
                    ))}
                </div>
            )}
            {selectedOption === 'Nearby' && (
                <div className='my-5 flex justify-content-between'>
                    {nearby.slice(0, 3).map((item) => (
                        <PeopleSimpleCard key={item.first_name} name={item.first_name} role={item.career} />
                    ))}
                </div>
            )}
            {selectedOption === 'Views' && (
                <div className='my-5 flex justify-content-between'>
                    {views.slice(0, 3).map((item) => (
                        <PeopleSimpleCard key={item.first_name} name={item.first_name} role={item.career} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PeopleSection;
