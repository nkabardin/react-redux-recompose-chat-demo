import React from 'react';
import PropTypes from 'prop-types';
import {compose, withHandlers, setPropTypes} from 'recompose';
import {connect} from 'react-redux';
import Users from './Users';
import Messages from './Messages';
import SendMessage from './SendMessage';
import {enterMessage, sendMessage, mention} from '../actions';
import './Chat.css';

const Chat = (
  {
    user,
    messages,
    users,
    textEntered,
    onEnter,
    onSend,
    onMention,
  },
) => (
  <div className="Chat">
    <div className="Chat-body">
      <Messages messages={messages} onMention={onMention} />
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
);

export default compose(
  connect(state => state),
  withHandlers({
    onEnter: ({dispatch}) => text => dispatch(enterMessage(text)),
    onSend: ({dispatch, user, textEntered}) =>
      () => {
        const text = textEntered.trim();
        if (text.length > 0) dispatch(sendMessage(user, textEntered));
      },
    onMention: ({dispatch}) => userName => dispatch(mention(userName)),
  }),
  setPropTypes({
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        sender: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        isSystem: PropTypes.bool,
      }),
    ),
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.shape({
          type: PropTypes.string.isRequired,
          game: PropTypes.string,
        }),
      }),
    ),
    textEntered: PropTypes.string.isRequired,
    onEnter: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
    onMention: PropTypes.func.isRequired,
  }),
)(Chat);
