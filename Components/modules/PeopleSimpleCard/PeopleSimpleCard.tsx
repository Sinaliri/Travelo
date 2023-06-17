import React from 'react';

const PeopleSimpleCard = (props: {
    name: string
    role: string
}) => {
    const name = props.name
    const role = props.role
    return (
        <div className='PeopleSimpleCard bg-white flex flex-column align-items-center'
            style={{ width: 'fit-content' , borderRadius : '10px' , gap : '10px' , padding : '10px 15px' }}
        >
            <img src='https://xsgames.co/randomusers/avatar.php?g=male'
                style={{ borderRadius: '50%', width: '4.5rem', height: '4.5rem' }} />
            <h4 className='font-normal'> {name} </h4>
            <h4 className='font-normal'> {role} </h4>
        </div>
    );
};

export default PeopleSimpleCard;