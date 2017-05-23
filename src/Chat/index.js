import React from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import Users from './Users'
import Messages from './Messages'
import SendMessage from './SendMessage'
import { enterMessage, sendMessage } from '../actions'
import './Chat.css'

const Chat = ({ user, messages, users, textEntered, onMessagesRef, onEnter, onSend }) => (
  <div className="Chat">
    <div className="Chat-body">
      <Messages messages={messages} onContainerRef={onMessagesRef} />
      <SendMessage
        user={user}
        textEntered={textEntered}
        onEnter={onEnter}
        onSend={onSend}
      />
    </div>
    <div className="Chat-sidebar">
      <Users users={users} />
    </div>
  </div>
)

export default compose(
  connect(state => state),
  withHandlers({
      onEnter: ({dispatch}) => (text) =>
        dispatch(enterMessage(text)),
      onSend: ({dispatch, user, textEntered}) => () =>
        dispatch(sendMessage(user, textEntered))
  })
)(Chat)
