import React from 'react';
import Users from './Users';
import Messages from './Messages';
import SendMessage from './SendMessage';
import './Chat.css';

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
);

export default Chat;
