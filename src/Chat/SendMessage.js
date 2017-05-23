import React from 'react'
import './SendMessage.css'

const SendMessage = ({user, textEntered}) => (
  <div className='SendMessage'>
    <div className='SendMessage-user'>{user}</div>
    <form className='SendMessage-form'>
      <input
        type='text'
        name='text'
        value={textEntered}
        className='SendMessage-input' />
      <button
        type='submit'
        name='submit'
        value='Send'
        className='SendMessage-submit'
      />
    </form>
  </div>
)

export default SendMessage
