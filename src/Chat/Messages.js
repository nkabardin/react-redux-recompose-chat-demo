import React from 'react'
import {compose, lifecycle, withHandlers} from 'recompose'
import './Messages.css'
import classNames from 'classnames'

const Messages = ({ messages, onRef }) => (
  <div className='Messages' ref={onRef}>
    <div className='Messages-items'>
      {messages.map(({sender, text, timestamp, isSystem}) => (
        <div
          className={classNames('Messages-message', {'is-system': isSystem})}
          key={`${sender}_${timestamp}`}>
          <div className='Messages-sender'>{sender}</div>
          <div className='Messages-text'>{text}</div>
        </div>
      ))}
    </div>
  </div>
)

export default compose(
  withHandlers(() => {
    let ref;

    return {
      onRef: () => (element) => ref = element,
      onUpdate: () => () => {
        if (ref) {
          ref.scrollTop = ref.scrollHeight;
        }
      }
    }
  }),
  lifecycle({
    componentDidUpdate: function () {
      this.props.onUpdate()
    }
  }))(Messages)
