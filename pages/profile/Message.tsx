import MessageScreen from '@/Components/modules/MessageScreen/MessageScreen'
import MessageSidebar from '@/Components/modules/MessageSidebar/MessageSidebar'
import React from 'react'

const Message = () => {
  return (
    <div>
      <div className='h-full absolute left-0 top-0 flex w-full' style={{ fontFamily: 'Inter' }}>
        <div style={{flex : '0.4'}}>
          <MessageSidebar />
        </div>
        <div className='relative' style={{flex : '1'}}>
          <MessageScreen />
        </div>
      </div>
    </div>
  )
}

export default Message