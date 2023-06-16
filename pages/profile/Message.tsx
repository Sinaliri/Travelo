import MessageSidebar from '@/Components/modules/MessageSidebar/MessageSidebar'
import React from 'react'

const Message = () => {
  return (
    <div>
      <div className='h-full absolute left-0 top-0 w-4' style={{fontFamily : 'Inter'}}>
        <MessageSidebar />
      </div>
    </div>
  )
}

export default Message