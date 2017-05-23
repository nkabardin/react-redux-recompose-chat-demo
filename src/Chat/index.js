import React from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import Users from './Users'
import Messages from './Messages'
import SendMessage from './SendMessage'
import { enterMessage, sendMessage } from '../actions/chat'
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
  connect((state) => state.chat),
  withHandlers(({dispatch}) => {
    let messagesRef

    return {
      onMessagesRef: () => (ref) => {
        messagesRef = ref
      },
      onEnter: () => (text) => {
        dispatch(enterMessage(text))
      },
      onSend: () => () => {
        if (messagesRef) {
          setTimeout(() => {
            messagesRef.scrollTop = messagesRef.scrollHeight;
          }, 0)
        }

        dispatch(sendMessage())
      }
    }
  })
)(Chat)
