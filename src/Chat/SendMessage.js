import React from 'react'
import './SendMessage.css'

const SendMessage = ({user, textEntered}) => (
  <div className='SendMessage'>
    <div className='SendMessage-user'>{user}</div>
    <form className='SendMessage-form'>
      <div className='SendMessage-input_container'>
        <input
          type='text'
          name='text'
          value={textEntered}
          className='SendMessage-input'
          autoComplete='off' />
      </div>
      <div className='SendMessage-submit_container'>
        <button
          type='submit'
          name='submit'
          className='SendMessage-submit'
        >
          Send
        </button>
      </div>
    </form>
  </div>
)

export default SendMessage
