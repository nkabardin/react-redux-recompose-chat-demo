import React from 'react'
import './Users.css'

const Users = ({users}) => (
  <div className='Users'>
    {users.map(({name, status}) => (
      <div className='Users-user' key={name}>
        <div className={`Users-status is-${status}`} />
        <div className='Users-name'>{name}</div>
      </div>
    ))}
  </div>
)

export default Users
