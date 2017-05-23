import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Users from './Users'
import Messages from './Messages'
import SendMessage from './SendMessage'
import './Chat.css'

const Chat = ({ user, messages, users, textEntered }) => (
  <div className="Chat">
    <div className="Chat-body">
      <Messages messages={messages} />
      <SendMessage user={user} textEntered={textEntered} />
    </div>
    <div className="Chat-sidebar">
      <Users users={users} />
    </div>
  </div>
)

export default compose(
  connect((state) => state.chat)
)(Chat)
