import React from 'react'
import './Users.css'

const Users = ({users}) => (
  <div className='Users'>
    <div className='Users-items'>
      {users.map(({name, status}) => (
        <div className='Users-user' key={name}>
          <div className={`Users-status is-${status.type.toLowerCase()}`} />
          <div className='Users-name'>{name}</div>
        </div>
      ))}
    </div>
  </div>
)

export default Users
