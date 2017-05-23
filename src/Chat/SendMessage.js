import React from 'react';
import PropTypes from 'prop-types';
import {compose, withHandlers, setPropTypes} from 'recompose';
import './SendMessage.css';

const SendMessage = (
  {
    user,
    textEntered,
    onChange,
    onSubmit,
    onInputRef,
    onBlur,
  },
) => (
  <div className="SendMessage">
    <div className="SendMessage-user">{user}</div>
    <form className="SendMessage-form" onSubmit={onSubmit}>
      <div className="SendMessage-input_container">
        <input
          type="text"
          name="text"
          value={textEntered}
          className="SendMessage-input"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          autoFocus
          onChange={onChange}
          ref={onInputRef}
          onBlur={onBlur}
        />
      </div>
      <div className="SendMessage-submit_container">
        <button type="submit" name="submit" className="SendMessage-submit">
          Send
        </button>
      </div>
    </form>
  </div>
);

export default compose(
  withHandlers(() => {
    let inputRef;

    return {
      onChange: ({onEnter}) => e => onEnter(e.target.value),
      onSubmit: ({onSend}) =>
        e => {
          e.preventDefault();
          setTimeout(onSend, 1);
          return false;
        },
      onInputRef: () => ref => inputRef = ref,
      onBlur: () =>
        () => {
          if (inputRef) {
            setTimeout(() => inputRef.focus(), 0);
          }
        },
    };
  }),
  setPropTypes({
    user: PropTypes.string.isRequired,
    textEntered: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onInputRef: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onEnter: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
  }),
)(SendMessage);
