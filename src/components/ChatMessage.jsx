import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center'>
        <FaUserCircle/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
