import React from 'react';
import PropTypes from 'prop-types';
import {compose, withHandlers, setPropTypes} from 'recompose';
import './Users.css';

const Users = ({users, onUserClick}) => (
  <div className="Users">
    <div className="Users-items">
      {users.map(({name, status}) => (
        <div className="Users-user" key={name} onClick={onUserClick(name)}>
          <div className={`Users-status is-${status.type.toLowerCase()}`} />
          <div className="Users-name">{name}</div>
          {status.game &&
            <div className="Users-game">playing {status.game}</div>}
        </div>
      ))}
    </div>
  </div>
);

export default compose(
  withHandlers({
    onUserClick: ({onMention}) => userName => () => onMention(userName),
  }),
  setPropTypes({
    onMention: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.shape({
          type: PropTypes.string.isRequired,
          game: PropTypes.string,
        }),
      }),
    ),
    onUserClick: PropTypes.func.isRequired,
  }),
)(Users);
