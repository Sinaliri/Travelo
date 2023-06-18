import { Contacts } from '@/Context/Services/Functions/Api';
import React, { useEffect, useState } from 'react';

const MessageSidebar = () => {
    const [users, setUsers] = useState([])
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    useEffect(() => {
        Contacts().then((res) => {
            setUsers(res.data)
        })
    }, [])

    return (
        <div className="MessageSidebar h-full py-5" style={{ background: '#FFE588', borderRadius: '50px 50px 0px 0px' }}>
            <h4 className="flex justify-content-center font-normal text-2xl"> Message </h4>
            <div className="cursor-pointer flex flex-column my-5" style={{ rowGap: '15px' }}>
                {users.map((item) => (
                    <div
                        className="flex align-items-center "
                        key={item}
                        onClick={() => handleItemClick(item)}
                        style={{
                            width: '103%',
                            backgroundColor: selectedItem === item ? '#CFCFCF' : 'transparent',
                            padding: '10px 30px',
                        }}
                    >
                        <img src="https://xsgames.co/randomusers/avatar.php?g=male" className="mr-3" style={{ borderRadius: '50%', width: '3rem', height: '3rem' }} alt="Avatar" />
                        {item.user_fullname}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MessageSidebar;
