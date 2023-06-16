import React, { useState } from 'react';

const MessageSidebar = () => {
    const users = ['Alireza Kiani', 'Amir Soltani', 'Siavash Ghanepor'];
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="MessageSidebar h-full w-full py-5" style={{ background: '#FFE588', width: 'fit-content', borderRadius: '50px 50px 0px 0px' }}>
            <h4 className="flex justify-content-center font-normal text-2xl"> Message </h4>
            <div className="cursor-pointer flex flex-column my-5" style={{ rowGap: '15px' }}>
                {users.map((item) => (
                    <div
                        className="flex align-items-center "
                        key={item}
                        onClick={() => handleItemClick(item)}
                        style={{
                            width : '103%',
                            backgroundColor: selectedItem === item ? '#CFCFCF' : 'transparent',
                            padding: '10px 30px',
                        }}
                    >
                        <img src="https://xsgames.co/randomusers/avatar.php?g=male" className="mr-3" style={{ borderRadius: '50%', width: '3rem', height: '3rem' }} alt="Avatar" />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageSidebar;
