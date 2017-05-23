import React from 'react';
import {compose, lifecycle, withHandlers} from 'recompose';
import classNames from 'classnames';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './Messages.css';

const Messages = ({messages, onRef, onMention, onUserClick}) => (
  <div className="Messages" ref={onRef}>
    <div className="Messages-items">
      <CSSTransitionGroup
        transitionName="Messages-transition"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {messages.map(({sender, text, timestamp, isSystem}) => (
          <div
            className={classNames('Messages-message', {'is-system': isSystem})}
            key={`${sender}_${timestamp}`}
          >
            <div className="Messages-sender" onClick={onUserClick(sender)}>
              {sender}
            </div>
            <div className="Messages-text">{text}</div>
          </div>
        ))}
      </CSSTransitionGroup>
    </div>
  </div>
);

export default compose(
  withHandlers(() => {
    let ref;

    return {
      onRef: () => element => ref = element,
      onUpdate: () =>
        () => {
          if (ref) {
            ref.scrollTop = ref.scrollHeight;
          }
        },
      onUserClick: ({onMention}) => userName => () => onMention(userName),
    };
  }),
  lifecycle({
    componentDidUpdate: function() {
      this.props.onUpdate();
    },
  }),
)(Messages);
