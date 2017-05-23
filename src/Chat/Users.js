import React from 'react';
import {compose, withHandlers} from 'recompose';
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
)(Users);
