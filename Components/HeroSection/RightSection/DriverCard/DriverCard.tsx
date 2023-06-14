import React, { useState } from 'react';
import { Rating, RatingChangeEvent } from "primereact/rating";

const DriverCard = () => {
    const [value, setValue] = useState<number>(0);

    return (
        <div className='DriverCard bg-white my-3 py-3 px-2 flex flex-column max-w-14rem'
            style={{ borderRadius: '10px', gap: '20px' }}>
            <img src='https://xsgames.co/randomusers/avatar.php?g=male'
                style={{ borderRadius: '50%', width: '4rem', height: '4rem' }} />
            <p className='text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo quam, suscipit tempus leo sit amet
            </p>
            <Rating className='justify-content-end'
                value={value} onChange={(e: RatingChangeEvent) => setValue(e.value)} cancel={false} />
        </div>
    );
};

export default DriverCard;