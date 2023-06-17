import React, { useState } from 'react';
import pointer from '../../../assets/icons/pointer.svg';
import Image from 'next/image';
import PeopleSimpleCard from '../PeopleSimpleCard/PeopleSimpleCard';

const PeopleSection = () => {
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
                    <PeopleSimpleCard name='Elnaz' role='Web developer' />
                    <PeopleSimpleCard name='Elnaz' role='Web developer' />
                    <PeopleSimpleCard name='Elnaz' role='Web developer' />
                    <PeopleSimpleCard name='Elnaz' role='Web developer' />
                </div>
            )}
            {selectedOption === 'Nearby' && (
                <div className='my-5 flex justify-content-between'>
                    <PeopleSimpleCard name='Mohammad' role='Web developer' />
                    <PeopleSimpleCard name='Amir' role='Web developer' />
                    <PeopleSimpleCard name='Sina' role='Web developer' />
                    <PeopleSimpleCard name='Mehdi' role='Web developer' />
                </div>
            )}
            {selectedOption === 'Views' && (
                <div className='my-5 flex justify-content-between'>
                    <PeopleSimpleCard name='Arian' role='Web developer' />
                    <PeopleSimpleCard name='Farshad' role='Web developer' />
                    <PeopleSimpleCard name='Amin' role='Web developer' />
                    <PeopleSimpleCard name='Mehdi' role='Web developer' />
                </div>
            )}
        </div>
    );
};

export default PeopleSection;
