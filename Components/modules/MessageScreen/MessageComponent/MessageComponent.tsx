import React from 'react';

interface MessageComponentProps {
    content: string;
    position: 'right' | 'left'
}

const MessageComponent: React.FC<MessageComponentProps> = ({ content, position }) => {
    const messageStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'flex-end',
        borderRadius: '10px',
        padding: '10px',
        maxWidth: '300px',
        margin: '10px',
        backgroundColor: '#fff', // Message background color
        color: '#000000', // Message text color
        position: 'relative',
    };

    return (
        <div className={`flex flex-column ${position === 'left' ? 'mr-auto' : 'ml-auto'}`} style={{ width: 'fit-content' }}>
            <div style={messageStyle}>
                {content}
                <div style={{ fontSize: '7px' }} className='ml-2'> 19:20 </div>
            </div>
        </div>
    );
};

export default MessageComponent;
