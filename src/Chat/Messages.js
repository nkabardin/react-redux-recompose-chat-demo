import React from 'react';
import './Messages.css';

const Messages = ({ messages }) => (
  <div className='Messages'>
    {messages.map(({sender, text, timestamp}) => (
      <div className='Messages-message' key={`${sender}_${timestamp}`}>
        <div className='Messages-sender'>{sender}</div>
        <div className='Messages-text'>{text}</div>
      </div>
    ))}
  </div>
)

export default Messages;
