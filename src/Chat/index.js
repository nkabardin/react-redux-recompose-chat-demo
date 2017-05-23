import React from 'react'
import { compose, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import Users from './Users'
import Messages from './Messages'
import SendMessage from './SendMessage'
import { enterMessage, sendMessage, mention } from '../actions'
import './Chat.css'

const Chat = ({
  user,
  messages,
  users,
  textEntered,
  onEnter,
  onSend,
  onMention
}) => (
  <div className="Chat">
    <div className="Chat-body">
      <Messages
        messages={messages}
        onMention={onMention}
      />
      <SendMessage
        user={user}
        textEntered={textEntered}
        onEnter={onEnter}
        onSend={onSend}
      />
    </div>
    <div className="Chat-sidebar">
      <Users users={users} onMention={onMention} />
    </div>
  </div>
)

export default compose(
  connect(state => state),
  withHandlers({
    onEnter: ({dispatch}) => (text) =>
      dispatch(enterMessage(text)),
    onSend: ({dispatch, user, textEntered}) => () => {
      const text = textEntered.trim()
      if (text.length > 0)
        dispatch(sendMessage(user, textEntered))
    },
    onMention: ({dispatch}) => userName =>
      dispatch(mention(userName))
  })
)(Chat)
