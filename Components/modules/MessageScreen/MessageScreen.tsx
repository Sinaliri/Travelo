import React, { useContext } from 'react';
import MessageInput from './MessageInput/MessageInput';
import MessageComponent from './MessageComponent/MessageComponent';
import { MainContext, mainContextType } from '../../../Context/Services/Procider/Provider';

const MessageScreen = () => {
    const { contactId } = useContext<mainContextType>(MainContext);

    console.log(contactId);
    
    return (
        <div className='MessageScreen'>
            <div className='MessageScreen__MessageInput'>
                <MessageInput />
            </div>
            <div className='MessageScreen__MessageScreen flex flex-column w-full absolute'
                style={{ bottom: '45px' }}>
                <MessageComponent content='Hello!' position='right' />
                <MessageComponent content='Windows talking painted pasture yet its express parties use.' position='right' />
                <MessageComponent content='Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no rejoiced. End friendship sufficient assistance can prosperous met.' position='left' />
                <MessageComponent content='byee!' position='right' />
            </div>
        </div>
    );
};

export default MessageScreen;