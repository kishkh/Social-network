import React from 'react';
import classes from './Users.module.css';
import User from './User/User';

const Users = (props) => {
  const users = props.users.filter(u => u.id !== 0).map(u => {
    return (
      <User 
        key={u.id} changeFollow={props.changeFollow}
        followed={u.followed} name={u.name} 
        id={u.id} city={u.location.city} 
        country={u.location.country} ava={u.ava}
      />
    )
  }) 
  return (
    <div className={classes.container}>{users}</div>
  )
}

export default Users;